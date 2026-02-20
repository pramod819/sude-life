import { Title, MediaImage } from '../../../../types/custom/common-type';

/**
 * text-with-vertical-tab service
 */
interface ComponentResponse {
    titleTags: Title;
    description: string;
    backgroundImage: MediaImage;
    cards: CardData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface CardData {
    highlightText: string;
    text: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c79').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                cards: { populate: true },
                backgroundImage: { populate: true },
            },
        });

        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const bgImage: MediaImage = componentData.backgroundImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.backgroundImage)
            : null;

        const cards = componentData.cards.map((data): CardData => {
            return {
                highlightText: data.highlightText,
                text: data.text,
            };
        });

        return {
            titleTags: titleData,
            description: componentData.description,
            backgroundImage: bgImage,
            cards,
        };
    },
};
