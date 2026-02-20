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
 * join-us-professional service
 */
const OTP_TYPE = 'join_us_professional';
interface JoinUsProfessionalFormRequest {
    first_name: string;
    last_name: string;
    mobile: string;
    resume: string;
    formType: 'Professional' | 'Advisor' | 'Intern';
    token: string;
    otp: string;
}

export default {
    saveContent: async (
        req: JoinUsProfessionalFormRequest,
        token: string
    ): Promise<FormResponse> => {
        try {
            const validation: ValidationMessage = await strapi
                .service('api::forms.join-us-professional')
                .validateContent(req);

            if (validation.status === HTTP_STATUS_SUCCESS) {
                //upload file
                const id = await strapi
                    .service('api::forms.file-render')
                    .uploadFile(req.resume, token);

                if (null === id) {
                    return {
                        success: true,
                        data: {
                            file: 'Failed to upload the document. Please try again later',
                        },
                        status: HTTP_STATUS_VALIDATION,
                    };
                }

                await strapi
                    .documents('api::join-us-professional.join-us-professional')
                    .create({
                        data: {
                            first_name: req.first_name,
                            mobile: req.mobile,
                            last_name: req.last_name,
                            formType: req.formType,
                            resume: id,
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
        formInput: JoinUsProfessionalFormRequest
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

        if (formInput.first_name.trim() === '') {
            flag = true;
            result.message.push('First name is required');
        }

        if (formInput.last_name.trim() === '') {
            flag = true;
            result.message.push('Last name is required');
        }

        if (formInput.mobile.trim() === '') {
            flag = true;
            result.message.push('Mobile is required');
        }

        if (formInput.resume.trim() === '') {
            flag = true;
            result.message.push('Resume is required');
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
