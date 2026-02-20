import {
    Title,
    WithdrawnPlanResponse,
} from '../../../../types/custom/common-type';

/**
 * tender
 */
interface ComponentResponse {
    title: Title;
    products: WithdrawnPlanResponse[];
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
        const componentData = await strapi.query('corp-dynamic.c54').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const products = await strapi
            .service('api::content.plan')
            .getWithdrawnPlans();

        return {
            title: titleData,
            products,
        };
    },
};
