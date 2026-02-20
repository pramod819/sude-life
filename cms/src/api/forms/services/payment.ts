import { ValidationMessage } from './validation';
import {
    FormResponse,
    HTTP_STATUS_SUCCESS,
    HTTP_STATUS_UNAUTHORIZED,
    HTTP_STATUS_VALIDATION,
    PartnerDetails,
    PolicyDetails,
    VALIDATION_FAILED,
} from '../../../../types/custom/common-type';
import { env } from '@strapi/utils';

/**
 * contact-us service
 */

interface PaymentFormRequest {
    policy_no: string;
    dob: string;
    token: string;
}

interface TransactionDetailsItem {
    PartnerTranID: string;
}

interface PaymentData {
    PartnerDetails: PartnerDetails;
    PolicyDetails: PolicyDetails;
    TransactionDetails: TransactionDetailsItem;
}

export default {
    saveContent: async (req: PaymentFormRequest): Promise<FormResponse> => {
        try {
            const validation: ValidationMessage = await strapi
                .service('api::forms.payment')
                .validateContent(req);

            if (validation.status === HTTP_STATUS_SUCCESS) {
                const content = await strapi
                    .service('api::forms.payment')
                    .createContent(req);

                const body = JSON.stringify(content);

                const encrypted = await strapi
                    .service('api::forms.token')
                    .encryptCS(body);

                const apiToken = await strapi
                    .service('api::forms.token')
                    .createHmac(body);

                return await strapi
                    .service('api::forms.external')
                    .fetchCsApi(
                        '/PaymentService/EnquiryPolicy',
                        { EncryptedRequest: encrypted },
                        apiToken,
                        true
                    );
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
        formInput: PaymentFormRequest
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

        if (formInput.policy_no.trim() === '') {
            flag = true;
            result.message.push('Policy Number is required');
        }

        if (formInput.dob.trim() === '') {
            flag = true;
            result.message.push('Date of Birth required');
        }

        if (flag) {
            result.status = HTTP_STATUS_VALIDATION;
        }

        result.form = formInput;

        return result;
    },
    createContent: async (
        formInput: PaymentFormRequest
    ): Promise<PaymentData> => {
        return {
            PartnerDetails: {
                Partner: env('CSAPI_PARTNER_TYPE'),
                PartnerCode: env('CSAPI_PARTNER_CODE'),
            },
            PolicyDetails: {
                PolicyNo: formInput.policy_no.trim(),
                DOB: formInput.dob.trim(),
                ClientId: '',
                ApplicationNumber: '',
            },
            TransactionDetails: {
                PartnerTranID: '',
            },
        };
    },
};
