import {
    Title,
    BlogCategoryResponse,
} from '../../../../types/custom/common-type';

/**
 * blog-category
 */
interface ComponentResponse {
    title: Title;
    blogCategories: BlogCategoryResponse[];
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c62').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
            },
        });
        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.titleTags);

        const blogCategories = await strapi
            .service('api::content.blog-category')
            .getBlogCategories();

        return {
            title: titleData,
            blogCategories,
        };
    },
};
