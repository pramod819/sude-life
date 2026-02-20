/**
 * [C90] - Cards with icon & text service
 */
import { ImageData } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

interface CardWithIconResponse {
    title: Title;
    description: string;
    cardDetails: CardWithIconData;
}

interface CardWithIconRequest {
    __component: string;
    id: number;
    title: Title;
}

interface CardWithIconData {
    title: string;
    description: string;
    icon: ImageData;
}

export default {
    renderComponent: async (
        component: CardWithIconRequest,
        id: number,
        params: object
    ): Promise<CardWithIconResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.c90-cards-with-icon-and-text')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    description: { populate: true },
                    cards: {
                        populate: true,
                    },
                },
            });
        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const cardData = componentData.cards.map((data): CardWithIconData => {
            const icon = strapi
                .service('api::content.field-render')
                .getImage(data.icon);

            return {
                title: data.title,
                description: data.description,
                icon,
            };
        });

        return {
            title: titleData,
            description: componentData.description,
            cardDetails: cardData,
        };
    },
};
