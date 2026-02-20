import { Title } from '../../../../types/custom/common-type';

/**
 * Global search service
 */
interface ComponentResponse {
    navigationId: string;
    title: Title;
    searchPlaceholder: string;
    buttonLabel: string;
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
        const componentData = await strapi.query('corp-dynamic.c124').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
            },
        });

        const title = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        return {
            navigationId: componentData.navigationId,
            title,
            searchPlaceholder: componentData.searchPlaceholder,
            buttonLabel: componentData.buttonLabel,
        };
    },
};
