import { Title, MediaImage } from '../../../../types/custom/common-type';

/**
 * scrolling-cards service
 */
interface ComponentResponse {
    title: Title;
    cards: CardsData;
    navigationId: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface CardsData {
    title: string;
    description: string;
    colour: string;
    image: MediaImage;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c49').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                cards: {
                    populate: {
                        image: { populate: true },
                    },
                },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const cards = componentData.cards.map((data): CardsData => {
            const image: MediaImage = data.image
                ? strapi
                      .service('api::content.field-render')
                      .getMediaImage(data.image)
                : null;

            return {
                title: data.title,
                description: data.description,
                colour: data.bgColour,
                image,
            };
        });

        return {
            title: titleData,
            cards,
            navigationId: componentData.navigationId,
        };
    },
};
