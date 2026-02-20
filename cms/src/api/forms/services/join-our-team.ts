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
 * join-our-team service
 */
const OTP_TYPE = 'join_team';
interface JoinOurTeamFormRequest {
    full_name: string;
    mobile: string;
    email: string;
    department: string;
    message: string;
    resume: string;
    otp: string;
    token: string;
}

export default {
    saveContent: async (
        req: JoinOurTeamFormRequest,
        token: string
    ): Promise<FormResponse> => {
        try {
            const validation: ValidationMessage = await strapi
                .service('api::forms.join-our-team')
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
                    .documents('api::join-our-team.join-our-team')
                    .create({
                        data: {
                            fullName: req.full_name,
                            mobile: req.mobile,
                            email: req.email,
                            department: req.department,
                            message: req.message,
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
        formInput: JoinOurTeamFormRequest
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

        if (formInput.full_name.trim() === '') {
            flag = true;
            result.message.push('Full name is required');
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

        if (formInput.department.trim() === '') {
            flag = true;
            result.message.push('Department is required');
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
