import { API_RESULT_FAIL } from '../../../../types/custom/common-type';

/**
 * A set of functions called "actions" for `sudlife-corp`
 */
export default {
    customerLogin: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.customer-login')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    panUpdate: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.pan-update')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    fatcaUpdate: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.fatca-update')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    payment: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.payment')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    otpGeneration: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.otp-generation')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    grievance: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.grievance')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    jobList: async (ctx, next) => {
        try {
            ctx.body = await strapi
                .service('api::forms.external')
                .fetchJobList();
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    downloadCertificate: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.external')
                .downloadCOI(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    otpValidate: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.otp-generation')
                .verifyOtp(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
};
