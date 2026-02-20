import { Title, LabelPack } from '../../../../types/custom/common-type';

/**
 * employee-wish service
 */
interface ComponentResponse {
    navigationId: string;
    variation: string;
    title: Title;
    shortDescription: string;
    employeeList: [];
    labelPack: LabelPack[];
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
        const componentData = await strapi.query('corp-dynamic.c125').findOne({
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

        const employeeList = await strapi
            .service('api::forms.external')
            .getEmployeeList(componentData.variation);

        return {
            navigationId: componentData.navigationId,
            variation: componentData.variation,
            title,
            shortDescription: componentData.shortDescription,
            employeeList,
            labelPack,
        };
    },
};
