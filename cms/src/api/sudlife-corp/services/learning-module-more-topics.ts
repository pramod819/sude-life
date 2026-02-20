import {
    Title,
    Cta,
    OtherTopicData,
} from '../../../../types/custom/common-type';

/**
 * learning-module-more-topics service
 */

interface ComponentResponse {
    title: Title;
    cta: Cta;
    list: OtherTopicData;
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
        const componentData = await strapi
            .query('corp-dynamic.lm-more-topics')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    cta: { populate: true },
                },
            });

        console.log(componentData);

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const cta = componentData.cta
            ? strapi
                  .service('api::content.field-render')
                  .getCta(componentData.cta)
            : null;

        const list = await strapi
            .service('api::content.learning-module')
            .getOtherTopics(id);

        return {
            title: titleData,
            cta,
            list,
        };
    },
};
