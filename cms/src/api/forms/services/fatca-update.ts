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

interface FatcaUpdateFormRequest {
    policy_no: string;
    dob: string;
    client_id: string;
    name: string;
    outside_resident: boolean;
    outside_tax: boolean;
    outside_curr_address: boolean;
    outside_perm_address: boolean;
    outside_phone: boolean;
    outside_authority: boolean;
    outside_curr_authority: boolean;
    outside_instruction: boolean;
    privacy: boolean;
    curr_authority_date: string;
    father_name: string;
    birth_place: string;
    birth_country: string;
    token: string;
}

interface FatcaData {
    PartnerDetails: PartnerDetails;
    PolicyDetails: PolicyDetails;
    CaseUpdation: CaseCreationItem;
}
export default {
    saveContent: async (req: FatcaUpdateFormRequest): Promise<FormResponse> => {
        try {
            const validation: ValidationMessage = await strapi
                .service('api::forms.fatca-update')
                .validateContent(req);

            if (validation.status === HTTP_STATUS_SUCCESS) {
                const content = await strapi
                    .service('api::forms.fatca-update')
                    .createContent(req);

                const body = JSON.stringify(content);

                const apiToken = await strapi
                    .service('api::forms.token')
                    .createHmac(body);

                const response = await strapi
                    .service('api::forms.external')
                    .fetchCsApi(body, apiToken);

                //ToDo
                return {
                    success: validation.success,
                    data: { client_id: '12345' },
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
        formInput: FatcaUpdateFormRequest
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
            result.message.push('Date of Birth is required');
        }

        if (formInput.client_id.trim() === '') {
            flag = true;
            result.message.push('Client Id is required');
        }

        if (formInput.name.trim() === '') {
            flag = true;
            result.message.push('Name is required');
        }

        if (typeof formInput.outside_resident !== 'boolean') {
            flag = true;
            result.message.push(
                'Mention you are in the resident jurisdiction of India or not'
            );
        }

        if (typeof formInput.outside_tax !== 'boolean') {
            flag = true;
            result.message.push(
                'Mention you are in Tax resident of jurisdiction outside India or not'
            );
        }

        if (typeof formInput.outside_curr_address !== 'boolean') {
            flag = true;
            result.message.push(
                'Mention you have current address of resident outside India or not'
            );
        }

        if (typeof formInput.outside_perm_address !== 'boolean') {
            flag = true;
            result.message.push(
                'Mention you have permanent address of resident outside India or not'
            );
        }

        if (typeof formInput.outside_authority !== 'boolean') {
            flag = true;
            result.message.push(
                'Mention you have signatory authority outside India or not'
            );
        }

        if (typeof formInput.outside_curr_authority !== 'boolean') {
            flag = true;
            result.message.push(
                'Mention you have signatory authority outside India or not currently'
            );
        }

        if (typeof formInput.outside_instruction !== 'boolean') {
            flag = true;
            result.message.push(
                'Mention you have any standing instruction of fund transfer outside India or not'
            );
        }

        if (typeof formInput.privacy !== 'boolean') {
            flag = true;
            result.message.push('Please accept or reject privacy policy');
        }

        if (formInput.curr_authority_date.trim() === '') {
            flag = true;
            result.message.push('Current  is required');
        }

        if (formInput.father_name.trim() === '') {
            flag = true;
            result.message.push(
                'Current outside signatory authority effective date is required'
            );
        }

        if (formInput.birth_place.trim() === '') {
            flag = true;
            result.message.push('Place of birth is required');
        }

        if (formInput.birth_country.trim() === '') {
            flag = true;
            result.message.push('Country of birth is required');
        }

        if (flag) {
            result.status = HTTP_STATUS_VALIDATION;
        }

        result.form = formInput;

        return result;
    },
    createContent: async (
        formInput: FatcaUpdateFormRequest
    ): Promise<FatcaData> => {
        return {
            PartnerDetails: {
                Partner: env('CSAPI_PARTNER_TYPE'),
                PartnerCode: env('CSAPI_PARTNER_CODE'),
            },
            PolicyDetails: {
                PolicyNo: formInput.policy_no.trim(),
                DOB: formInput.dob.trim(),
                ClientId: formInput.client_id.trim(),
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
                        Key: 'PAN__c',
                        Value: '',
                    },
                ],
            },
        };
    },
};
