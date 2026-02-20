import { ValidationMessage } from './validation';
import {
    HTTP_STATUS_SUCCESS,
    HTTP_STATUS_VALIDATION,
    HTTP_STATUS_UNAUTHORIZED,
    FormResponse,
    VALIDATION_FAILED,
    STATUS_PUBLISH,
    FormResponseExternal,
} from '../../../../types/custom/common-type';

/**
 * product-form service
 */

interface ProductFormRequest {
    first_name: string;
    last_name: string;
    gender: string;
    dob: string;
    email: string;
    mobile: string;
    product_id: string;
    product_name: string;
    token: string;
    source: string;
    blop_redirection: boolean;
    cc_leads: boolean;
}
interface DobRequest {
    dob: string;
    age: string;
}
export default {
    saveContent: async (req: ProductFormRequest): Promise<FormResponse> => {
        try {
            let midwayLink = '';
            const validation: ValidationMessage = await strapi
                .service('api::forms.product-form')
                .validateContent(req);

            if (validation.status === HTTP_STATUS_SUCCESS) {
                const productInfo = await strapi
                    .documents('api::product-form.product-form')
                    .create({
                        data: {
                            first_name: req.first_name,
                            last_name: req.last_name,
                            gender: req.gender,
                            dob: req.dob,
                            mobile: req.mobile,
                            email: req.email,
                            product_id: req.product_id,
                            product_name: req.product_name,
                            source: req.source,
                        },
                        status: STATUS_PUBLISH,
                    });

                if (req.blop_redirection !== true || req.cc_leads !== true) {
                    let age = 0;
                    if (req.dob) {
                        age = await strapi
                            .service('api::forms.product-form')
                            .calculateAge(req.dob);
                    }

                    if (req.cc_leads !== true) {
                        const callCenter: FormResponseExternal = await strapi
                            .service('api::forms.external')
                            .sendLeadstoCallCenter(req, productInfo.id, age);

                        console.log(callCenter, 'Call Centre API');
                    }

                    if (req.blop_redirection !== true) {
                        const bolpInfo: FormResponseExternal = await strapi
                            .service('api::forms.external')
                            .sendBolpRedirection(req, productInfo.id, age);

                        midwayLink = bolpInfo.data.value;
                    }
                }

                return {
                    success: validation.success,
                    data: {
                        midwayLink,
                    },
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
        formInput: ProductFormRequest
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

        if (formInput.source.trim() === '') {
            flag = true;
            result.message.push('Source is required');
        }

        if (formInput.dob.trim() === '') {
            flag = true;
            result.message.push('Date of Birth is required');
        }

        if (flag) {
            result.status = HTTP_STATUS_VALIDATION;
        }

        result.form = formInput;

        return result;
    },
    calculateAge: async (dob: string): Promise<DobRequest> => {
        const dateNew = dob.split('/').reverse().join('/');
        const dateObj = new Date(dateNew);
        const date = dateObj.toLocaleDateString('en-CA');
        const today = new Date();
        let ageData = today.getFullYear() - dateObj.getFullYear();
        const m = today.getMonth() - dateObj.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dateObj.getDate())) {
            ageData--;
        }

        return {
            age: ageData.toString(),
            dob: date,
        };
    },
};
