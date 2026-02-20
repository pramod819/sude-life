/**
 * sud-life service
 */
import { env } from '@strapi/utils';
import {
    FormResponse,
    HTTP_STATUS_SUCCESS,
    HTTP_STATUS_VALIDATION,
    API_RESULT_FORMAT,
    STATUS_PUBLISH,
    HTTP_STATUS_FORBIDDEN,
    FormResponseExternal,
} from '../../../../types/custom/common-type';
import axios from 'axios';
const COUTRY_CODE = '91';
const STAGE = '10';
const APPLICATION_NO = '6033006';
export default {
    fetchCsApi: async (
        endPoint: string,
        body: object,
        apiToken: string,
        encrypted: false
    ): Promise<FormResponse> => {
        const { data, status } = await axios.post(
            env('CSAPI_BASE_PATH') + endPoint,
            encrypted ? JSON.stringify(body) : body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-HMAC-CS': apiToken,
                },
            }
        );

        if (encrypted) {
            return await strapi
                .service('api::forms.external')
                .formatCsContent(data, status);
        } else {
            return await strapi
                .service('api::forms.external')
                .formatContent(data, status);
        }
    },
    formatCsContent: async (data: any, status: number) => {
        const result: FormResponse = {
            success: false,
            data: { message: 'Invalid Data' },
            status: HTTP_STATUS_VALIDATION,
        };

        if (status !== HTTP_STATUS_SUCCESS) {
            return result;
        }

        const returnData = await strapi
            .service('api::forms.token')
            .decryptCS(data?.EncryptedResponse);

        const parsedData = JSON.parse(returnData);

        if (parsedData?.Status === 'Success') {
            result.data = parsedData;
            result.status = HTTP_STATUS_SUCCESS;
            result.success = true;
        }

        return result;
    },
    formatContent: async (data: any, status: number) => {
        const result: FormResponse = {
            success: false,
            data: { message: 'Invalid Data' },
            status: HTTP_STATUS_VALIDATION,
        };

        if (status !== HTTP_STATUS_SUCCESS) {
            return result;
        }

        if (data?.Status === 'Success') {
            result.data = data;
            result.status = HTTP_STATUS_SUCCESS;
            result.success = true;
        }

        return result;
    },
    fetchChatBot: async (): Promise<FormResponse> => {
        const result: FormResponse = {
            success: false,
            data: { html: '' },
            status: HTTP_STATUS_VALIDATION,
        };

        const { data, status } = await axios.get(env('CHATBOT_API_URL'), {
            headers: {
                API_KEY: env('CHATBOT_API_KEY'),
                APP_NAME: env('CHATBOT_APP_NAME'),
                SOURCE_SYSTEM: env('CHATBOT_SOURCE_SYSTEM'),
            },
        });

        if (status !== HTTP_STATUS_SUCCESS) {
            return result;
        }

        result.data = data;
        result.status = HTTP_STATUS_SUCCESS;
        result.success = true;

        return result;
    },
    fetchJobList: async () => {
        let jobList = [];
        let index = 0;
        let businessUnit = [];
        let location = [];
        const contents = API_RESULT_FORMAT;

        const body = JSON.stringify({
            api_key: env('DARWINBOX_JOBLIST_API_KEY'),
        });

        const { data, status } = await axios.get(
            env('DARWINBOX_BASE_URL') + '/JobsApiv3/Joblist',
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic ' + env('DARWINBOX_AUTH_KEY'),
                },
                data: body,
            }
        );

        if (status === HTTP_STATUS_SUCCESS) {
            for (const job of data.data) {
                if (job.post_on_careers_page === 1) {
                    const detail = await strapi
                        .service('api::forms.external')
                        .getJobDetails(job.job_id);

                    if (businessUnit.indexOf(job.department) === -1) {
                        businessUnit.push(job.department);
                    }

                    for (const loc of job.location_city) {
                        if (location.indexOf(loc) === -1) {
                            location.push(loc);
                        }
                    }

                    jobList[index++] = {
                        designation: detail.designation,
                        department: job.department,
                        experience: detail.experience,
                        location: job.location_city,
                        description: detail.job_description,
                        employeeType: job.employee_type,
                        applyLink:
                            env('DARWINBOX_BASE_URL') +
                            '/ms/candidate/careers/' +
                            job.job_id,
                    };
                }
            }
            contents.data = {
                businessUnit: businessUnit,
                location: location,
                jobList: jobList,
            };

            return contents;
        }

        return [];
    },
    getJobDetails: async (jobId: string) => {
        const body = JSON.stringify({
            api_key: env('DARWINBOX_JOBDETAIL_API_KEY'),
            job_id: jobId,
        });

        const { data, status } = await axios.get(
            env('DARWINBOX_BASE_URL') + '/JobsApiv3/Jobdetail',
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic ' + env('DARWINBOX_AUTH_KEY'),
                },
                data: body,
            }
        );

        if (status === HTTP_STATUS_SUCCESS) {
            const detail = data.data;
            return {
                designation: detail.designation,
                experience: detail.unit_experience
                    ? detail.experience_from +
                      ' - ' +
                      detail.experience_to +
                      ' ' +
                      detail.unit_experience +
                      ' Exp.'
                    : null,
                job_description: detail.job_decription,
            };
        }

        return [];
    },
    getCallCenterToken: async (): Promise<FormResponseExternal> => {
        const result: FormResponseExternal = {
            success: false,
            data: { value: '' },
            status: HTTP_STATUS_FORBIDDEN,
        };

        try {
            const response = await axios.post(
                env('CALL_CENTER_URL') + 'api/login',
                new URLSearchParams({
                    user: env('CLIENT_ID'),
                    password: env('CLIENT_SECRET'),
                }),
                {
                    headers: {
                        Authorization: env('CALL_CENTER_TOKEN'),
                    },
                }
            );

            if (response.data.access_token) {
                result.success = true;
                result.status = HTTP_STATUS_SUCCESS;
                result.data.value = response.data.access_token;
            }

            return result;
        } catch (error) {
            return result;
        }
    },
    sendLeadstoCallCenter: async (
        productData: any,
        productId: string,
        dobData: any
    ): Promise<FormResponseExternal> => {
        const result: FormResponseExternal = {
            success: false,
            data: { value: '' },
            status: HTTP_STATUS_FORBIDDEN,
        };

        try {
            const url = new URL(productData.source);
            const params = new URLSearchParams(url.search);
            const tokenData: FormResponseExternal = await strapi
                .service('api::forms.external')
                .getCallCenterToken();

            if (tokenData.status !== HTTP_STATUS_SUCCESS) {
                throw new Error('Invalid Token');
            }

            const UTMSource = params.get('utm_source') || '';
            const UTMMedium = params.get('utm_medium') || '';
            const UTMCampaign = params.get('utm_campaign') || '';

            const body = {
                phone_number: productData.mobile,
                list_id: '250625120032',
                campaign_id: '3128189',
                add_to_hopper: 'Y',
                custom_fields: 'Y',
                first_name: productData.first_name,
                last_name: productData.last_name,
                email: productData.email,
                product_name: productData.product_name,
                dob: dobData.dob,
                age: dobData.age,
                customer_gender: productData.gender,
                source: 'web',
                URLName: productData.source,
                UTMSource,
                UTMMedium,
                UTMCampaign,
            };

            const { data, status } = await axios.post(
                env('CALL_CENTER_URL') + 'api/add-lead',
                body,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + tokenData.data.value,
                    },
                }
            );

            if (status === HTTP_STATUS_SUCCESS) {
                result.status = HTTP_STATUS_SUCCESS;
                result.success = true;
            }
            result.data.value = data;

            return result;
        } catch (error) {
            console.log('Call Centre API:', error);
            return result;
        }
    },
    sendBolpRedirection: async (
        productData: any,
        productId: string,
        dobData: any
    ): Promise<FormResponseExternal> => {
        const result: FormResponseExternal = {
            success: false,
            data: { value: '' },
            status: HTTP_STATUS_FORBIDDEN,
        };

        try {
            const gender =
                productData.gender === 'male'
                    ? 1
                    : productData.gender === 'female'
                      ? 2
                      : 3;
            const body = {
                QuotMastDetails: JSON.stringify({
                    ApplicationNo: APPLICATION_NO + productId,
                    PartnerID: env('BOLP_PARTNER_ID'),
                    ProductCode: productData.product_id,
                    Stage: STAGE,
                }),
                LeadDetails: JSON.stringify({
                    FirstName: productData.first_name,
                    MiddleName: '',
                    LastName: productData.last_name,
                    DOB: dobData.dob,
                    Age: dobData.age,
                    Gend: gender,
                    MariStat: '',
                    Emai: productData.email,
                    Mobi: productData.mobile,
                    LeadMobileCoutryCode: COUTRY_CODE,
                    selUser: '',
                }),
                SolutionDetails: JSON.stringify({}),
                BIDetails: null,
                PaymentDetails: null,
                SIPaymentDetails: null,
                PlanDetails: null,
                AddressDetails: null,
                InsuAttrDetails: null,
                DeviceCode: null,
                AppVers: null,
                Token: null,
                Command: null,
                UserId: null,
                UserCode: null,
                DownloadType: null,
                prodid: 0,
                SoluId: null,
                CurrStat: 0,
            };
            const { data, status } = await axios.post(
                env('BOLP_URL') + 'Quotation/GenerateQuotation',
                body
            );

            if (status === HTTP_STATUS_SUCCESS) {
                result.status = HTTP_STATUS_SUCCESS;
                result.success = true;
            }
            result.data.value = data?.MidwayLink;

            console.log('BOLP Redirection Link', data);
            return result;
        } catch (error) {
            console.log('BOLP Redirection:', error);
            return result;
        }
    },
    generateCOIToken: async () => {
        const result: FormResponseExternal = {
            success: false,
            data: { value: '' },
            status: HTTP_STATUS_FORBIDDEN,
        };

        try {
            const body = {
                partner: 'Website',
                partnerCode: env('COI_DOWNLOAD_PARTNER_CODE'),
            };

            const { data, status } = await axios.post(
                env('COI_DOWNLOAD_API_URL') + 'ngh/estatement/generateToken',
                body,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'API-Key': env('COI_DOWNLOAD_API_KEY'),
                        SourceSystem: 'Estatement',
                    },
                }
            );

            if (status === HTTP_STATUS_SUCCESS) {
                result.success = true;
                result.status = HTTP_STATUS_SUCCESS;
                result.data.value = data.token;
            }

            return result;
        } catch (error) {
            return result;
        }
    },
    downloadCOI: async (formData: any): Promise<FormResponse> => {
        const result: FormResponse = {
            success: false,
            data: {},
            status: HTTP_STATUS_FORBIDDEN,
        };

        try {
            if (!formData.loan_acc_number && !formData.mobile) {
                throw new Error('mobile or loan account number required');
            }

            const tokenData: FormResponseExternal = await strapi
                .service('api::forms.external')
                .generateCOIToken();

            if (tokenData.status !== HTTP_STATUS_SUCCESS) {
                throw new Error('Invalid Token');
            }

            const body: any = {
                application_number: '',
                date_of_birth: formData.dob,
                loan_acc_number: formData.loan_acc_number,
                customer_mobile: formData.mobile,
                partner_code: env('COI_DOWNLOAD_PARTNER_CODE'),
            };

            const { data, status } = await axios.post(
                env('COI_DOWNLOAD_API_URL') + 'cfg/estatement/MRTACoi/download',
                body,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + tokenData.data.value,
                    },
                }
            );

            if (data.status === '1') {
                result.status = HTTP_STATUS_SUCCESS;
                result.success = true;
                result.data = {
                    mobile: data.mobile_number,
                    pdf: data.pdf,
                };
            } else if (data.status === '3') {
                result.status = HTTP_STATUS_SUCCESS;
                result.success = true;
                result.data = {
                    application_details: data.application_details,
                };
            }

            return result;
        } catch (error) {
            console.log('Download COI API:', error);
            return result;
        }
    },
    getEmployeeList: async (variation: string) => {
        let result: any = [];
        try {
            let api_key = env('BW_API_KEY');
            let report_id = env('BW_REPORT_ID');

            if (variation === 'New Joinees') {
                api_key = env('NJ_API_KEY');
                report_id = env('NJ_REPORT_ID');
            }

            const body = {
                api_key,
                report_id,
            };

            const { data, status } = await axios.post(
                env('DARWINBOX_BASE_URL') + '/reportsbuilderapi/reportdatav2',
                body,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Basic ' + env('EMPLOYEE_WISH_AUTH_KEY'),
                    },
                }
            );

            if (status === HTTP_STATUS_SUCCESS) {
                if (variation !== 'New Joinees') {
                    return data.response?.data
                        .filter((emp) => emp['Flow Name'] === variation)
                        .map((emp) => ({
                            name: emp['Subject Employee Name'],
                            date: emp['Initation Date'],
                            department: emp['Current Department'],
                            designation: emp['Designation Title'],
                        }));
                } else {
                    return data.response?.data.map((emp) => ({
                        name: emp['Full Name'],
                        date: emp['Date Of Joining'],
                        department: emp['Current Department'],
                        designation: emp['Designation Title'],
                    }));
                }
            }

            return result;
        } catch (error) {
            return result;
        }
    },
};
