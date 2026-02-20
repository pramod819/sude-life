/**
 * [C121] - Cards Listing service
 */
import { MediaImage } from '../../../../types/custom/common-type';
import { Title, Cta } from '../../../../types/custom/common-type';

interface CardResponse {
    title: Title;
    description: string;
    cardDetails: CardData;
}

interface CardRequest {
    __component: string;
    id: number;
    title: Title;
}

interface CardData {
    title: string;
    description: string;
    image: MediaImage;
    cta: Cta;
}

export default {
    renderComponent: async (
        component: CardRequest,
        id: number,
        params: object
    ): Promise<CardResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.c121-cards-listing')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    description: { populate: true },
                    cards: {
                        populate: {
                            description: { populate: true },
                            image: { populate: true },
                            title: { populate: true },
                            cta: { populate: true },
                        },
                    },
                },
            });
        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const cardData = componentData.cards.map((data): CardData => {
            const image = strapi
                .service('api::content.field-render')
                .getMediaImage(data.image);

            const cta = data.cta
                ? strapi.service('api::content.field-render').getCta(data.cta)
                : null;

            return {
                title: data.title,
                description: data.description,
                image,
                cta,
            };
        });

        return {
            title: titleData,
            description: componentData.description,
            cardDetails: cardData,
        };
    },
};
