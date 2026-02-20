/**
 * leadership-speaks service
 */
import { Title, MediaImage } from '../../../../types/custom/common-type';

interface ComponentResponse {
    title: Title;
    bgImage: MediaImage;
    cards: CardData;
    navigationId: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface CardData {
    bgImage: MediaImage;
    transparentImage: MediaImage;
    quote: string;
    name: string;
    designation: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c94').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                bgImage: { populate: true },
                cards: {
                    populate: {
                        bgImage: { populate: true },
                        transparentImage: { populate: true },
                    },
                },
            },
        });

        const title = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const bgImage = componentData.bgImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgImage)
            : null;

        const cards = componentData.cards.map((data): CardData => {
            const bgImage = data.bgImage
                ? strapi
                      .service('api::content.field-render')
                      .getMediaImage(data.bgImage)
                : null;

            const transparentImage = data.transparentImage
                ? strapi
                      .service('api::content.field-render')
                      .getMediaImage(data.transparentImage)
                : null;

            return {
                bgImage,
                transparentImage,
                quote: data.quote,
                name: data.name,
                designation: data.designation,
            };
        });

        return {
            title,
            bgImage,
            cards,
            navigationId: componentData.navigationId,
        };
    },
};
