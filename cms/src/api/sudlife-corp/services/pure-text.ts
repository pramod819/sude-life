import { Title } from '../../../../types/custom/common-type';

/**
 * pure-text service
 */
interface ComponentResponse {
    title: Title;
    description: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
    description: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c69').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                description: { populate: true },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        return {
            title: titleData,
            description: componentData.description,
        };
    },
};
