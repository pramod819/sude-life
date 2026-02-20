import { API_RESULT_FAIL } from '../../../../types/custom/common-type';

/**
 * A set of functions called "actions" for `sudlife-corp`
 */
export default {
    contactUs: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.contact-us')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    doNotDisturb: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi.service('api::forms.dnd').saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    becomeAgent: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.become-an-agent')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    joinUs: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.join-us')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    businessPartner: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.business-partner')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    productForm: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.product-form')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    newsletter: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.newsletter')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    joinOurTeam: async (ctx, next) => {
        try {
            const authorization = ctx.request.header.authorization;
            const token: string = await strapi
                .service('api::content.blog-api-view')
                .getToken({ authorization });

            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.join-our-team')
                .saveContent(body, token);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    joinUsProfessional: async (ctx, next) => {
        try {
            const authorization = ctx.request.header.authorization;
            const token: string = await strapi
                .service('api::content.blog-api-view')
                .getToken({ authorization });

            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.join-us-professional')
                .saveContent(body, token);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    giftCity: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.gift-city')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
    haveAnIdea: async (ctx, next) => {
        try {
            const body = ctx.request.body;

            ctx.body = await strapi
                .service('api::forms.have-an-idea')
                .saveContent(body);
        } catch (err) {
            ctx.body = API_RESULT_FAIL;
        }
    },
};
