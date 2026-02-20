import {
    API_RESULT_FAIL,
    API_RESULT_FORMAT,
    FormResponse,
    FormResponseExternal,
    HTTP_STATUS_FORBIDDEN,
    HTTP_STATUS_SUCCESS,
} from '../../../../types/custom/common-type';

/**
 * A set of functions called "actions" for `sudlife-corp`
 */
export default {
    indexCorpPage: async (ctx, next) => {
        try {
            const { query } = ctx;

            const type = query.type;

            await strapi.service('api::search.utils').bulkImport(type);

            ctx.body = API_RESULT_FORMAT;
        } catch (err) {
            console.log(err);
            ctx.body = API_RESULT_FAIL;
        }
    },
    deleteIndexCorpPage: async (ctx, next) => {
        try {
            const { query } = ctx;

            const type = query.type;

            await strapi.service('api::search.utils').deleteIndex(type);

            ctx.body = API_RESULT_FORMAT;
        } catch (err) {
            console.log(err);
            ctx.body = API_RESULT_FAIL;
        }
    },
    query: async (ctx, next): Promise<void> => {
        ctx.body = {
            success: false,
            data: [],
            status: HTTP_STATUS_FORBIDDEN,
        };

        try {
            const { query } = ctx;

            ctx.body.success = true;
            ctx.body.status = HTTP_STATUS_SUCCESS;
            ctx.body.data = await strapi
                .service('api::search.search')
                .query(query);
        } catch (err) {
            ctx.body.data = err;
        }
    },
    autocomplete: async (ctx, next): Promise<void> => {
        ctx.body = {
            success: false,
            data: [],
            status: HTTP_STATUS_FORBIDDEN,
        };

        try {
            const { query } = ctx;

            ctx.body.success = true;
            ctx.body.status = HTTP_STATUS_SUCCESS;
            ctx.body.data = await strapi
                .service('api::search.autocomplete')
                .suggest(query);
        } catch (err) {
            console.log(err);
            ctx.body = API_RESULT_FAIL;
        }
    },
};
