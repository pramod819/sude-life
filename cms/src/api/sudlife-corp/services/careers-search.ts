import { Title, LabelPack } from '../../../../types/custom/common-type';

/**
 * careers-search service
 */
interface ComponentResponse {
    title: Title;
    labelPack: LabelPack[];
    navigationId: string;
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
        const componentData = await strapi.query('corp-dynamic.c113').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                labelPack: { populate: true },
            },
        });

        const title = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        return {
            title,
            labelPack,
            navigationId: componentData.navigationId,
        };
    },
};
