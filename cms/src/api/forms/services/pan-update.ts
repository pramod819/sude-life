import { ValidationMessage } from './validation';
import {
    HTTP_STATUS_SUCCESS,
    HTTP_STATUS_VALIDATION,
    HTTP_STATUS_UNAUTHORIZED,
    FormResponse,
    VALIDATION_FAILED,
    PartnerDetails,
    PolicyDetails,
    CaseCreationItem,
} from '../../../../types/custom/common-type';
import { env } from '@strapi/utils';

/**
 * contact-us service
 */

interface PanUpdateFormRequest {
    policy_no: string;
    pan_no: string;
    dob: string;
    token: string;
}

interface PanData {
    PartnerDetails: PartnerDetails;
    PolicyDetails: PolicyDetails;
    CaseUpdation: CaseCreationItem;
}
export default {
    saveContent: async (req: PanUpdateFormRequest): Promise<FormResponse> => {
        try {
            const validation: ValidationMessage = await strapi
                .service('api::forms.pan-update')
                .validateContent(req);

            if (validation.status === HTTP_STATUS_SUCCESS) {
                const content = await strapi
                    .service('api::forms.pan-update')
                    .createContent(req);

                const body = JSON.stringify(content);

                const apiToken = await strapi
                    .service('api::forms.token')
                    .createHmac(body);

                return await strapi
                    .service('api::forms.external')
                    .fetchCsApi('/CustomerService/CaseUpdate', body, apiToken);
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
        formInput: PanUpdateFormRequest
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

        if (formInput.pan_no.trim() === '') {
            flag = true;
            result.message.push('PAN Number is required');
        }

        if (flag) {
            result.status = HTTP_STATUS_VALIDATION;
        }

        result.form = formInput;

        return result;
    },
    createContent: async (
        formInput: PanUpdateFormRequest
    ): Promise<PanData> => {
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
            CaseUpdation: {
                Action: 'CaseUpdate',
                Case: [
                    {
                        Key: 'Status',
                        Value: 'Closed',
                    },
                    {
                        Key: 'Sub_Status__c',
                        Value: '',
                    },
                    {
                        Key: 'Stop_Communication__c',
                        Value: 'true',
                    },
                ],
                CaseTransaction: [
                    {
                        Key: 'Type__c',
                        Value: 'Policy Related Changes',
                    },
                    {
                        Key: 'SUB_Type__c',
                        Value: 'PAN Card Updation',
                    },
                    {
                        Key: 'CaseNumber',
                        Value: formInput.pan_no.trim(),
                    },
                ],
            },
        };
    },
};
