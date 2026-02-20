import { Title } from '../../../../types/custom/common-type';

/**
 * three-background-cards service
 */

interface ComponentResponse {
    title: Title;
    shortDescription: string;
    card: CardResponse;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface CardResponse {
    title: string;
    description: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c86').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                shortDescription: { populate: true },
                card: {
                    populate: {
                        title: { populate: true },
                        description: { populate: true },
                    },
                },
            },
        });

        const title = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const card = componentData.card.map((data): CardResponse => {
            return {
                title: data.title,
                description: data.description,
            };
        });

        return {
            title,
            shortDescription: componentData.shortDescription,
            card,
        };
    },
};
