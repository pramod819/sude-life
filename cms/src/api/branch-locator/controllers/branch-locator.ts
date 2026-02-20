export default {
    getLocalities: async (ctx, next) => {
        try {
            const district = ctx.request.query?.district;

            ctx.body = await strapi
                .service('api::branch-locator.location')
                .getLocalitiesByDistrict(district);
        } catch (err) {
            ctx.body = {
                success: false,
                data: {
                    app: {
                        imageBasePath: '',
                        language: '',
                        homeUrl: '',
                    },
                    info: {
                        path: '',
                        pageTitle: '',
                        metaTags: {},
                    },
                    components: {},
                },
                status: 403,
            };
        }
    },
    getByLocality: async (ctx, next) => {
        try {
            const locality = ctx.request.query?.locality;

            ctx.body = await strapi
                .service('api::branch-locator.location')
                .getBranchesByLocality(locality);
        } catch (err) {
            ctx.body = {
                success: false,
                data: {
                    app: {
                        imageBasePath: '',
                        language: '',
                        homeUrl: '',
                    },
                    info: {
                        path: '',
                        pageTitle: '',
                        metaTags: {},
                    },
                    components: {},
                },
                status: 403,
            };
        }
    },
};
