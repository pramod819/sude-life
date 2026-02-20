import { Title, LabelPack } from '../../../../types/custom/common-type';

/**
 * coi-download service
 */
interface ComponentResponse {
    navigationId: string;
    title: Title;
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
        const componentData = await strapi.query('corp-dynamic.c122').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                labelPack: { populate: true },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        return {
            navigationId: componentData.navigationId,
            title: titleData,
            labelPack,
        };
    },
};
