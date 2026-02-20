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
 * have-an-idea service
 */
interface HaveAnIdeaFormRequest {
    employee_id: string;
    department: string;
    subject: string;
    idea: string;
    otp: string;
    token: string;
}

export default {
    saveContent: async (
        req: HaveAnIdeaFormRequest,
        token: string
    ): Promise<FormResponse> => {
        try {
            const validation: ValidationMessage = await strapi
                .service('api::forms.have-an-idea')
                .validateContent(req);

            if (validation.status === HTTP_STATUS_SUCCESS) {
                await strapi
                    .documents('api::have-an-idea.have-an-idea')
                    .create({
                        data: {
                            employee_id: req.employee_id,
                            department: req.department,
                            subject: req.department,
                            idea: req.idea,
                        },
                        status: STATUS_PUBLISH,
                    });

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
        formInput: HaveAnIdeaFormRequest
    ): Promise<ValidationMessage> => {
        let result = {
            message: [],
            status: HTTP_STATUS_SUCCESS,
            form: {},
            success: true,
        };

        // const validCaptcha: boolean = await strapi
        //     .service('api::forms.validation')
        //     .validateCaptcha(formInput.token);

        // if (!validCaptcha) {
        //     result.status = HTTP_STATUS_UNAUTHORIZED;
        //     result.message = ['Invalid captcha'];
        //     result.success = false;

        //     return result;
        // }

        let flag = false;

        if (formInput.employee_id.trim() === '') {
            flag = true;
            result.message.push('Employee ID is required');
        }

        if (formInput.department.trim() === '') {
            flag = true;
            result.message.push('Department is required');
        }

        if (formInput.subject.trim() === '') {
            flag = true;
            result.message.push('Subject is required');
        }

        if (formInput.idea.trim() === '') {
            flag = true;
            result.message.push('Describe your idea');
        }

        if (flag) {
            result.status = HTTP_STATUS_VALIDATION;
        }

        result.form = formInput;

        return result;
    },
};
