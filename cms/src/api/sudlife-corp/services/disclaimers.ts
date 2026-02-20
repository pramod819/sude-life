import { Title } from '../../../../types/custom/common-type';

/**
 * disclaimers service
 */
interface ComponentResponse {
    title: Title;
    disclaimerPoints: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface BulletPointData {
    text: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.c76-disclaimers')
            .findOne({
                where: { id: component.id },
                populate: {
                    disclaimerTitle: { populate: true },
                    disclaimerPoints: { populate: true },
                },
            });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.disclaimerTitle);

        return {
            title: titleData,
            disclaimerPoints: componentData.disclaimerPoints,
        };
    },
};
