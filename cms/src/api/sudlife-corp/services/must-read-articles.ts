import {
    Title,
    BlogResponse,
    MediaImage,
} from '../../../../types/custom/common-type';

/**
 * must-read-articles service
 */
interface ComponentResponse {
    title: Title;
    shortDescription: string;
    bgImage: MediaImage;
    articles: BlogResponse[];
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
        const componentData = await strapi.query('corp-dynamic.c81').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                bgImage: { populate: true },
                articles: {
                    populate: {
                        article: {
                            populate: {
                                image: { populate: true },
                            },
                        },
                    },
                },
            },
        });

        const articles = [];
        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const bgImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.bgImage);

        for (const data of componentData.articles) {
            if (data?.article) {
                articles.push(
                    await strapi
                        .service('api::content.blog')
                        .format(data.article)
                );
            }
        }

        return {
            title: titleData,
            shortDescription: componentData.shortDescription,
            bgImage,
            articles,
        };
    },
};
