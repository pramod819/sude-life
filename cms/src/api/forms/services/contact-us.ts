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
 * contact-us service
 */
const OTP_TYPE = 'contact_us';
interface ContactFormRequest {
    name: string;
    subject: string;
    email: string;
    mobile: string;
    message: string;
    otp: string;
    token: string;
}
export default {
    saveContent: async (req: ContactFormRequest): Promise<FormResponse> => {
        try {
            const validation: ValidationMessage = await strapi
                .service('api::forms.contact-us')
                .validateContent(req);

            if (validation.status === HTTP_STATUS_SUCCESS) {
                await strapi
                    .documents('api::form-contactus.form-contactus')
                    .create({
                        data: {
                            name: req.name,
                            subject: req.subject,
                            email: req.email,
                            mobile: req.mobile,
                            message: req.message,
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
        formInput: ContactFormRequest
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

        if (formInput.email.trim() === '') {
            flag = true;
            result.message.push('Email is required');
        } else {
            const emailValid: boolean = strapi
                .service('api::forms.validation')
                .validateEmail(formInput.email);
            if (!emailValid) {
                flag = true;
                result.message.push('Invalid Email');
            }
        }

        if (mobile === '') {
            flag = true;
            result.message.push('Mobile is required');
        }

        if (formInput.subject.trim() === '') {
            flag = true;
            result.message.push('Subject is required');
        }

        if (formInput.message.trim() === '') {
            flag = true;
            result.message.push('Message is required');
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
