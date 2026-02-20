/**
 * card-with-icon service
 */
import { Title, ImageData } from '../../../../types/custom/common-type';

interface ComponentResponse {
    title: Title;
    subTitle: string;
    cards: CardData;
    navigationId: string;
    subtitleBold: boolean;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface CardData {
    cardTitle: string;
    subTitle: string;
    fontColour: string;
    backgroundImage: ImageData;
    backgroundColor: string;
    link: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c92').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                subTitle: { populate: true },
                cards: { populate: true },
            },
        });

        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const cardData = componentData.cards.map((data): CardData => {
            const backgroundImage = data.backgroundImage
                ? strapi
                      .service('api::content.field-render')
                      .getImage(data.backgroundImage)
                : null;

            return {
                cardTitle: data.cardTitle,
                subTitle: data.subTitle,
                fontColour: data.fontColour,
                backgroundImage,
                backgroundColor: data.backgroundColor,
                link: data.link,
            };
        });

        return {
            navigationId: componentData.navigationId,
            title: titleData,
            subTitle: componentData.subTitle,
            subtitleBold: componentData.subtitleBold ?? false,
            cards: cardData,
        };
    },
};
