import {
    Title,
    MediaImage,
    ImageData,
    Cta,
} from '../../../../types/custom/common-type';

/**
 * text-with-overlap-card service
 */
interface ComponentResponse {
    title: Title;
    description: string;
    backgroundImage: MediaImage;
    cards: CardsData;
    navigationId: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface CardsData {
    cardTitle: string;
    description: string;
    icon: ImageData;
    cta: Cta;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c108').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                description: { populate: true },
                backgroundImage: { populate: true },
                cards: { populate: true },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const backgroundImage: MediaImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.backgroundImage);

        const cards = componentData.cards.map((data): CardsData => {
            const cta = data.cta
                ? strapi.service('api::content.field-render').getCtas(data.cta)
                : null;

            const icon = data.icon
                ? strapi
                      .service('api::content.field-render')
                      .getImage(data.icon)
                : null;

            return {
                cardTitle: data.cardTitle,
                description: data.description,
                icon,
                cta,
            };
        });

        return {
            title: titleData,
            description: componentData.description,
            backgroundImage,
            cards,
            navigationId: componentData.navigationId,
        };
    },
};
