import { ValidationMessage } from './validation';
import {
    HTTP_STATUS_SUCCESS,
    HTTP_STATUS_VALIDATION,
    HTTP_STATUS_UNAUTHORIZED,
    FormResponse,
    VALIDATION_FAILED,
    STATUS_PUBLISH,
} from '../../../../types/custom/common-type';

/**
 * become-an-agent service
 */
const OTP_TYPE = 'agent';
interface BecomeAnAgentFormRequest {
    name: string;
    mobile: string;
    source: string;
    medium: string;
    campaign: string;
    content: string;
    term: string;
    otp: string;
    token: string;
}

export default {
    saveContent: async (
        req: BecomeAnAgentFormRequest
    ): Promise<FormResponse> => {
        try {
            const validation: ValidationMessage = await strapi
                .service('api::forms.become-an-agent')
                .validateContent(req);

            if (validation.status === HTTP_STATUS_SUCCESS) {
                await strapi
                    .documents('api::become-an-agent.become-an-agent')
                    .create({
                        data: {
                            name: req.name,
                            mobile: req.mobile,
                            source: req.source,
                            medium: req.medium,
                            campaign: req.campaign,
                            content: req.content,
                            term: req.term,
                        },
                        status: STATUS_PUBLISH,
                    });

                await strapi
                    .service('api::forms.otp-generation')
                    .deleteExpiredOtpRecords(
                        req.mobile.trim(),
                        req.otp.trim(),
                        OTP_TYPE
                    );

                return {
                    success: validation.success,
                    data: {},
                    status: HTTP_STATUS_SUCCESS,
                };
            } else {
                return {
                    success: validation.success,
                    data: validation.message,
                    status: validation.status,
                };
            }
        } catch (err) {
            return {
                success: true,
                data: { error: VALIDATION_FAILED },
                status: HTTP_STATUS_VALIDATION,
            };
        }
    },
    validateContent: async (
        formInput: BecomeAnAgentFormRequest
    ): Promise<ValidationMessage> => {
        let result = {
            message: [],
            status: HTTP_STATUS_SUCCESS,
            form: {},
            success: true,
        };

        const mobile = formInput.mobile.trim();
        const otp = formInput.otp.trim();

        const validCaptcha: boolean = await strapi
            .service('api::forms.validation')
            .validateCaptcha(formInput.token);

        if (!validCaptcha) {
            result.status = HTTP_STATUS_UNAUTHORIZED;
            result.message = ['Invalid captcha'];
            result.success = false;

            return result;
        }

        let flag = false;

        if (formInput.name.trim() === '') {
            flag = true;
            result.message.push('Name is required');
        }

        if (mobile === '') {
            flag = true;
            result.message.push('Please enter valid mobile number');
        }

        if (otp === '') {
            flag = true;
            result.message.push('OTP is required');
        } else {
            const otpValidation = await strapi
                .service('api::forms.otp-generation')
                .validateOtpRecords(mobile, otp, OTP_TYPE);

            if (otpValidation <= 0) {
                flag = true;
                result.message.push('Invalid OTP');
            }
        }

        if (flag) {
            result.status = HTTP_STATUS_VALIDATION;
        }

        result.form = formInput;

        return result;
    },
};
