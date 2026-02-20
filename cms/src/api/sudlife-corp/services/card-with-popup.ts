import { Title, ImageData, Cta } from '../../../../types/custom/common-type';

/**
 * card-with-popup service
 */

interface ComponentResponse {
    title: Title;
    shortDescription: string;
    cardItems: CardItemsData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface CardItemsData {
    icon: ImageData;
    text: string;
    cta: Cta;
    popupContent: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c102').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                cardItems: { populate: true },
            },
        });

        const title = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const cardItems = componentData.cardItems.map((data): CardItemsData => {
            const icon = strapi
                .service('api::content.field-render')
                .getImage(data.icon);

            const cta = strapi
                .service('api::content.field-render')
                .getCta(data.cta);

            return {
                icon,
                text: data.text,
                cta,
                popupContent: data.popupContent,
            };
        });

        return {
            title,
            shortDescription: componentData.shortDescription,
            cardItems,
        };
    },
};
