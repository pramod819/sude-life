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
 * gift-city service
 */
const OTP_TYPE = 'gift_city';
interface GiftCityFormRequest {
    first_name: string;
    last_name: string;
    mobile: string;
    email: string;
    country: string;
    otp: string;
    token: string;
}
export default {
    saveContent: async (req: GiftCityFormRequest): Promise<FormResponse> => {
        try {
            const validation: ValidationMessage = await strapi
                .service('api::forms.gift-city')
                .validateContent(req);

            if (validation.status === HTTP_STATUS_SUCCESS) {
                await strapi.documents('api::gift-city.gift-city').create({
                    data: {
                        first_name: req.first_name,
                        last_name: req.last_name,
                        mobile: req.mobile,
                        email: req.email,
                        country: req.country,
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
        formInput: GiftCityFormRequest
    ): Promise<ValidationMessage> => {
        let result = {
            message: [],
            status: HTTP_STATUS_SUCCESS,
            form: {},
            success: true,
        };

        const validCaptcha: boolean = await strapi
            .service('api::forms.validation')
            .validateCaptcha(formInput.token);

        if (!validCaptcha) {
            result.status = HTTP_STATUS_UNAUTHORIZED;
            result.message = ['Invalid captcha'];
            result.success = false;

            return result;
        }

        const mobile = formInput.mobile.trim();
        const otp = formInput.otp.trim();

        let flag = false;

        if (formInput.first_name.trim() === '') {
            flag = true;
            result.message.push('First name is required');
        }

        if (formInput.last_name.trim() === '') {
            flag = true;
            result.message.push('Last name is required');
        }

        if (mobile === '') {
            flag = true;
            result.message.push('Mobile is required');
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

        if (otp !== '') {
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
