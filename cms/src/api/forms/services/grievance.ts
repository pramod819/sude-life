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
 * grievance service
 */
const OTP_TYPE = 'grievance';
interface GrievanceFormRequest {
    policy_no: string;
    first_name: string;
    last_name: string;
    mobile: string;
    phone: string;
    email: string;
    message: string;
    customer: boolean;
    otp: string;
    token: string;
}

interface GrievanceData {
    PartnerDetails: PartnerDetails;
    PolicyDetails: PolicyDetails;
    CaseCreation: CaseCreationItem;
}
export default {
    saveContent: async (req: GrievanceFormRequest): Promise<FormResponse> => {
        try {
            const validation: ValidationMessage = await strapi
                .service('api::forms.grievance')
                .validateContent(req);

            if (validation.status === HTTP_STATUS_SUCCESS) {
                const content = await strapi
                    .service('api::forms.grievance')
                    .createContent(req);

                const body = JSON.stringify(content);

                const apiToken = await strapi
                    .service('api::forms.token')
                    .createHmac(body);

                const output = await strapi
                    .service('api::forms.external')
                    .fetchCsApi('/CustomerService/CrtCase', body, apiToken);

                if (output.status === HTTP_STATUS_SUCCESS) {
                    await strapi
                        .service('api::forms.otp-generation')
                        .deleteExpiredOtpRecords(
                            req.mobile.trim(),
                            req.otp.trim(),
                            OTP_TYPE
                        );
                }

                return output;
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
        formInput: GrievanceFormRequest
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
            result.message.push('First Name is required');
        }

        if (formInput.last_name.trim() === '') {
            flag = true;
            result.message.push('Last Name is required');
        }

        if (formInput.mobile.trim() === '') {
            flag = true;
            result.message.push('Mobile Number is required');
        }

        if (formInput.message.trim() === '') {
            flag = true;
            result.message.push('Message is required');
        }

        if (typeof formInput.customer !== 'boolean') {
            flag = true;
            result.message.push('Mention existing customer or not');
        }

        if (formInput.customer && formInput.policy_no.trim() === '') {
            flag = true;
            result.message.push('Policy Number is required');
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
    createContent: async (
        formInput: GrievanceFormRequest
    ): Promise<GrievanceData> => {
        const submittedValues = `Policy Number: ${formInput.policy_no.trim()}, Email: ${formInput.email.trim()}, First Name: ${formInput.first_name.trim()}, Last Name: ${formInput.last_name.trim()}, Mobile Number: ${formInput.mobile.trim()},Contact Number: ${formInput.phone.trim()}, Message: ${formInput.message.trim()}, Existing Customer: ${formInput.customer}`;

        return {
            PartnerDetails: {
                Partner: env('CSAPI_PARTNER_TYPE'),
                PartnerCode: env('CSAPI_PARTNER_CODE'),
            },
            PolicyDetails: {
                PolicyNo: formInput.policy_no.trim(),
                DOB: '',
                ClientId: '',
                ApplicationNumber: '',
            },
            CaseCreation: {
                Action: 'OtherProcess',
                Case: [
                    {
                        Key: 'Type',
                        Value: 'ER/GR',
                    },
                    {
                        Key: 'Call_Type__c',
                        Value: 'Others',
                    },
                    {
                        Key: 'Sub_Type__c',
                        Value: 'Customer Complaint through Web',
                    },
                    {
                        Key: 'Transaction_Type__c',
                        Value: 'ER/GR',
                    },
                    {
                        Key: 'Maker_Comments__c',
                        Value: submittedValues,
                    },
                    {
                        Key: 'Origin',
                        Value: 'Website',
                    },
                    {
                        Key: 'API_Status__c',
                        Value: 'Success',
                    },
                ],
                CaseTransaction: [],
            },
        };
    },
};
