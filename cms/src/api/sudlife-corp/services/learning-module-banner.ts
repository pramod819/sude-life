import { Title, TopicData } from '../../../../types/custom/common-type';

/**
 * learning-module-banner service
 */
interface ComponentResponse {
    title: Title;
    shortDescription: string;
    topics: TopicData[];
    btnText: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c119').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                topics: {
                    populate: {
                        bannerImage: { populate: true },
                        module: { populate: true },
                        detailComponent: { populate: true },
                    },
                },
            },
        });

        const title = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const topics = [];
        for (const [index, item] of componentData.topics.entries()) {
            const component = item.detailComponent[0]?.__component;
            const detailId = item.detailComponent[0]?.id;
            let video = [];

            const bannerImage = item.bannerImage
                ? strapi
                      .service('api::content.field-render')
                      .getMediaImage(item.bannerImage)
                : null;

            if (component === 'corp-dynamic.lm-video') {
                video = await strapi
                    .service('api::content.learning-module')
                    .getVideo(detailId);
            }

            const tags = [
                item.module?.name,
                'Module-' + (item.module?.number ?? 0),
                'Topic-' + (item.number ?? 0),
            ];

            topics[index] = {
                topicNumber: item.number ?? 0,
                type: item.type,
                tags,
                title: item.title,
                shortDescription: item.shortDescription,
                bannerImage,
                ...(item.type !== 'video' ? { path: item.path } : null),
                ...(video ?? null),
            };
        }

        return {
            title,
            shortDescription: componentData.shortDescription,
            topics,
            btnText: componentData.btnText ?? '',
        };
    },
};
