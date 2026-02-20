import { ValidationMessage } from './validation';
import {
    HTTP_STATUS_SUCCESS,
    HTTP_STATUS_VALIDATION,
    HTTP_STATUS_UNAUTHORIZED,
    FormResponse,
    VALIDATION_FAILED,
    PartnerDetails,
    PolicyDetails,
} from '../../../../types/custom/common-type';
import { env } from '@strapi/utils';
import { generateOTP } from 'otp-agent';

const SMS_ATTEMPT: number = 5;

/**
 * contact-us service
 */

interface OtpFormRequest {
    mobile: string;
    token: string;
    type: string;
}

interface SMSDetailsList {
    Key: string;
    Value: string;
}

interface SMSDetails {
    TemplateName: string;
    CustomerMobileNo: string;
    List: SMSDetailsList[];
}

interface CustomerOtpData {
    PartnerDetails: PartnerDetails;
    PolicyDetails: PolicyDetails;
    SMS: SMSDetails;
}

export default {
    saveContent: async (req: OtpFormRequest): Promise<FormResponse> => {
        try {
            const validation: ValidationMessage = await strapi
                .service('api::forms.otp-generation')
                .validateContent(req);

            if (validation.status === HTTP_STATUS_SUCCESS) {
                const count = await strapi
                    .service('api::forms.otp-generation')
                    .checkOtpHistory(req);

                if (count > SMS_ATTEMPT) {
                    return {
                        success: validation.success,
                        data: {
                            message: [
                                'You have reached Maximum attempt. Please try again after 10 minutes',
                            ],
                        },
                        status: validation.status,
                    };
                }

                const otp: string = generateOTP();
                const content = await strapi
                    .service('api::forms.otp-generation')
                    .createContent(req, otp);

                const body = JSON.stringify(content);

                const apiToken = await strapi
                    .service('api::forms.token')
                    .createHmac(body);

                const result = await strapi
                    .service('api::forms.external')
                    .fetchCsApi('/CustomerService/SendSMS', body, apiToken);

                if (result.success === true) {
                    await strapi
                        .service('api::forms.otp-generation')
                        .addOtpHistory(req, count, otp);

                    result.data.otp = otp;
                }

                return result;
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
        formInput: OtpFormRequest
    ): Promise<ValidationMessage> => {
        let result = {
            message: [],
            status: HTTP_STATUS_SUCCESS,
            form: {},
            success: true,
        };

        const formTypes = [
            'grievance',
            'join_us',
            'contact_us',
            'agent',
            'login',
            'dnd',
            'partner',
            'product',
            'join_team',
            'newsletter',
            'join_us_professional',
            'gift_city',
            'download_certificate',
        ];

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

        if (formInput.mobile.trim() === '') {
            flag = true;
            result.message.push('Mobile Number is required');
        }

        const type = formInput.type.trim();

        if (type === '') {
            flag = true;
            result.message.push('Type is required');
        } else if (formTypes.includes(type) === false) {
            flag = true;
            result.message.push('Type is required');
        }

        if (flag) {
            result.status = HTTP_STATUS_VALIDATION;
        }

        result.form = formInput;

        return result;
    },
    createContent: async (
        formInput: OtpFormRequest,
        otp: string
    ): Promise<CustomerOtpData> => {
        const mobileNo = formInput.mobile.trim();
        const dateObj = new Date();
        const dateString =
            dateObj.toLocaleDateString('en-Us') +
            ' ' +
            dateObj.toLocaleTimeString('en-Us');

        return {
            PartnerDetails: {
                Partner: env('CSAPI_PARTNER_TYPE'),
                PartnerCode: env('CSAPI_PARTNER_CODE'),
            },
            PolicyDetails: {
                PolicyNo: '',
                DOB: '',
                ClientId: '',
                ApplicationNumber: '',
            },
            SMS: {
                TemplateName: 'LoginOTP',
                CustomerMobileNo: mobileNo,
                List: [
                    {
                        Key: '@applicationname',
                        Value: 'SUDLife Portal',
                    },
                    {
                        Key: '@otp',
                        Value: otp,
                    },
                    {
                        Key: '@datetime',
                        Value: dateString,
                    },
                ],
            },
        };
    },
    checkOtpHistory: async (formInput: OtpFormRequest): Promise<number> => {
        const knex = strapi.db.connection;
        const mobileNo = formInput.mobile.trim();
        const result = await knex('otp_history')
            .select('mobile', 'count', 'updatedAt')
            .where({ mobile: mobileNo });

        let count = 1;

        if (result.length > 0) {
            let updated = new Date(result[0].updatedAt);

            let date = new Date();
            date.setMinutes(date.getMinutes() - 10);

            if (updated.getTime() >= date.getTime()) {
                count = result[0].count + 1;
            }
        }

        return count;
    },
    addOtpHistory: async (
        formInput: OtpFormRequest,
        count: number,
        otp: string
    ): Promise<void> => {
        const knex = strapi.db.connection;
        const mobileNo = formInput.mobile.trim();
        const type = formInput.type.trim();

        const dataExist = await knex('otp_history')
            .select('mobile', 'id')
            .where({ mobile: mobileNo });

        let date = new Date();
        let updated = date.toLocaleDateString('en-CA', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        });
        let i = 0;

        while (i < 3) {
            updated = updated.replace('/', '-');
            i++;
        }

        updated = updated.replace(',', '');
        updated = updated.replace('a.m.', '').replace('p.m.', '');

        let id = 0;

        if (dataExist.length === 0) {
            [id] = await knex('otp_history').insert({
                mobile: mobileNo,
                count: count,
                updatedAt: updated,
            });
        } else {
            id = dataExist[0].id;
            await knex('otp_history').where('id', '=', id).update({
                count: count,
                updatedAt: updated,
            });
        }

        if (id > 0) {
            await strapi
                .service('api::forms.otp-generation')
                .deleteOtpRecords(id);
            await knex('otp_records').insert({
                otp_id: id,
                otp: otp,
                type: type,
                updatedAt: updated,
            });
        }
    },
    deleteOtpRecords: async (otp_id: number): Promise<void> => {
        if (otp_id <= 0) {
            return;
        }
        const knex = strapi.db.connection;
        await knex('otp_records').where('otp_id', '=', otp_id).del();
    },
    deleteExpiredOtpRecords: async (
        mobile: string,
        otp: string,
        type: string
    ): Promise<void> => {
        const otpValidation = await strapi
            .service('api::forms.otp-generation')
            .validateOtpRecords(mobile, otp, type);

        await strapi
            .service('api::forms.otp-generation')
            .deleteOtpRecords(otpValidation);
    },
    validateOtpRecords: async (
        mobile: string,
        otp: string,
        type: string
    ): Promise<number> => {
        const knex = strapi.db.connection;
        const result = await knex
            .select(['a.id', 'b.updatedAt'])
            .from('otp_history as a')
            .leftJoin('otp_records as b', function () {
                this.on('a.id', '=', 'b.otp_id');
            })
            .where('a.mobile', '=', mobile)
            .where('b.otp', '=', otp)
            .where('b.type', '=', type);

        if (result.length > 0) {
            let updated = new Date(result[0].updatedAt);

            let date = new Date();
            date.setMinutes(date.getMinutes() - 30);
            if (updated.getTime() >= date.getTime()) {
                return result[0].id;
            }
        }

        return 0;
    },
    verifyOtp: async (req: {
        mobile: string;
        otp: string;
        type: string;
        token: string;
    }): Promise<FormResponse> => {
        const response = {
            success: true,
            data: {},
            status: HTTP_STATUS_SUCCESS,
        };

        const validation: ValidationMessage = await strapi
            .service('api::forms.otp-generation')
            .validateContent(req);

        if (validation.status === HTTP_STATUS_SUCCESS) {
            const otpValidation = await strapi
                .service('api::forms.otp-generation')
                .validateOtpRecords(req.mobile, req.otp, req.type);

            if (otpValidation <= 0) {
                response.status = HTTP_STATUS_VALIDATION;
                response.data = 'Invalid OTP';
            }

            await strapi
                .service('api::forms.otp-generation')
                .deleteExpiredOtpRecords(
                    req.mobile.trim(),
                    req.otp.trim(),
                    req.type
                );

            return response;
        } else {
            return {
                success: validation.success,
                data: validation.message,
                status: validation.status,
            };
        }
    },
};
