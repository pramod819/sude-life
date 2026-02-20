import {
    Title,
    MediaImage,
    Cta,
    BlogCategoryRequest,
    LabelPack,
    BlogResponse,
} from '../../../../types/custom/common-type';

/**
 * category-feature-blog
 */
interface ComponentResponse {
    backgroundImage: MediaImage;
    labelPack: LabelPack;
    blogs: BlogResponse[];
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
        const componentData = await strapi.query('corp-dynamic.c104').findOne({
            where: { id: component.id },
            populate: {
                labelPack: { populate: true },
                backgroundImage: { populate: true },
                blog_category: { populate: true },
            },
        });

        const backgroundImage = componentData.backgroundImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.backgroundImage)
            : null;

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        const blogs = await strapi
            .service('api::content.blog')
            .getBlogsByCetegory({ categoryId: componentData.blog_category.id });

        return {
            backgroundImage,
            labelPack,
            blogs,
        };
    },
};
