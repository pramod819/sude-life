import {
    Title,
    BlogResponse,
    LabelPack,
} from '../../../../types/custom/common-type';

/**
 * related-articles service
 */
interface ComponentResponse {
    title: Title;
    articles: BlogResponse[];
    labelPack: LabelPack[];
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
        const componentData = await strapi.query('corp-dynamic.c83').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                articles: {
                    populate: {
                        blog: {
                            populate: {
                                image: { populate: true },
                            },
                        },
                    },
                },
                labelPack: { populate: true },
            },
        });
        const articles = [];

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        for (const data of componentData.articles) {
            if (data?.blog) {
                articles.push(
                    await strapi.service('api::content.blog').format(data.blog)
                );
            }
        }

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        return {
            title: titleData,
            articles,
            labelPack,
        };
    },
};
