import { Title, MediaImage } from '../../../../types/custom/common-type';

/**
 * rotating-scrollable-cards service
 */
interface ComponentResponse {
    title: Title;
    subTitle: string;
    cards: CardsData;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface CardsData {
    bgColour: string;
    title: string;
    description: string;
    fontColour: string;
    image: MediaImage;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c77').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                subTitle: { populate: true },
                cards: {
                    populate: {
                        image: { populate: true },
                    },
                },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const cards = componentData.cards.map((data): CardsData => {
            const image = data.image
                ? strapi
                      .service('api::content.field-render')
                      .getMediaImage(data.image)
                : null;

            return {
                bgColour: data.bgColour,
                title: data.title,
                description: data.description,
                fontColour: data.fontColour,
                image,
            };
        });

        return {
            title: titleData,
            subTitle: componentData.subTitle,
            cards,
        };
    },
};
