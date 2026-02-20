import {
    Title,
    MediaImage,
    ImageData,
} from '../../../../types/custom/common-type';

/**
 * overview service
 */
interface ComponentResponse {
    title: Title;
    image: MediaImage;
    text: TextData[];
    cards: CardData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
    image: MediaImage;
    text: TextData[];
    cards: CardData[];
}

interface TextData {
    title: string;
    description: string;
}

interface CardData {
    icon: ImageData;
    title: string;
    description: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c70').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                image: { populate: true },
                text: { populate: true },
                cards: { populate: true },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const image: MediaImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.image);

        const text = componentData.text.map((data): TextData => {
            return {
                title: data.title,
                description: data.description,
            };
        });

        const cards = componentData.cards.map((data): CardData => {
            const icon = strapi
                .service('api::content.field-render')
                .getImage(data.icon);

            return {
                icon,
                title: data.title,
                description: data.description,
            };
        });

        return {
            title: titleData,
            image,
            text,
            cards,
        };
    },
};
