import { Title, LabelPack } from '../../../../types/custom/common-type';

/**
 * branch-locator service
 */
interface ComponentResponse {
    title: Title;
    state: string[];
    labelPack: LabelPack[];
    navigationId: string;
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
        const componentData = await strapi.query('corp-dynamic.c43').findOne({
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

        const labelPack = await strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        const stateDistrict = await strapi
            .service('api::branch-locator.location')
            .getStateDistrictHierarchy();

        return {
            title: titleData,
            state: stateDistrict,
            labelPack,
            navigationId: componentData.navigationId,
        };
    },
};
