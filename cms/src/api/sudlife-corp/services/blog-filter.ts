import {
    Title,
    BlogResponse,
    LabelPack,
    Cta,
} from '../../../../types/custom/common-type';

/**
 * Blog filter service
 */
interface ComponentResponse {
    title: Title;
    filter: string;
    blogsByCategory: BlogsByCategoryData[];
    labelPack: LabelPack[];
    showSlider: boolean;
    displayFormat: string;
    cta: Cta;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface BlogsByCategoryData {
    id: number;
    name: string;
    data: BlogListData;
}

interface BlogListData {
    list: BlogResponse[];
    loadMore: boolean;
    nextPage?: number;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.blog-filter')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    blog_category: { populate: true },
                    filter: { populate: true },
                    displayFormat: { populate: true },
                    labelPack: { populate: true },
                    cta: { populate: true },
                },
            });

        let blogsByCategory = [];

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const cta = componentData.cta
            ? strapi
                  .service('api::content.field-render')
                  .getCta(componentData.cta)
            : null;

        let showSlider = false;
        if (componentData.displayFormat === 'slider_with_trending') {
            const blogList = await strapi
                .service('api::content.blog')
                .getByFilter({ apiRequest: false });

            blogsByCategory = [
                {
                    data: blogList,
                },
            ];
            showSlider = true;
        } else if (componentData.displayFormat === 'slider_with_category') {
            const blogCategories = await strapi
                .service('api::content.blog-category')
                .getBlogCategories();

            for (const category of blogCategories) {
                const blogList = await strapi
                    .service('api::content.blog')
                    .getByFilter({ category: category.id, apiRequest: false });

                blogsByCategory.push({
                    id: category.id,
                    name: category.name,
                    data: blogList,
                });
            }
            showSlider = true;
        } else if (componentData.filter) {
            const blogCategories = await strapi
                .service('api::content.blog-category')
                .getBlogCategories();

            for (const category of blogCategories) {
                const blogList = await strapi
                    .service('api::content.blog')
                    .getByFilter({ category: category.id, apiRequest: false });

                blogsByCategory.push({
                    id: category.id,
                    name: category.name,
                    data: blogList,
                });
            }
        } else if (componentData.blog_category) {
            const blogCategory = await strapi
                .service('api::content.blog-category')
                .formatBlogCategory(componentData.blog_category);

            const blogList = await strapi
                .service('api::content.blog')
                .getByFilter({ category: blogCategory.id, apiRequest: false });

            blogsByCategory = [
                {
                    id: blogCategory.id,
                    name: blogCategory.name,
                    data: blogList,
                },
            ];
        }

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        return {
            title: titleData,
            filter: componentData.filter,
            blogsByCategory,
            labelPack,
            showSlider,
            displayFormat: componentData.displayFormat,
            cta,
        };
    },
};
