import { BranchResponse } from '../../../../types/custom/common-type';

/**
 * branch-detail service
 */

interface ParamsObject {
    slug: string;
}

export default {
    renderComponent: async (
        component: [],
        id: number,
        params: ParamsObject
    ): Promise<BranchResponse | []> => {
        return params.slug
            ? await strapi
                  .service('api::content.branch')
                  .getBranchBySlug(params.slug)
            : [];
    },
};
