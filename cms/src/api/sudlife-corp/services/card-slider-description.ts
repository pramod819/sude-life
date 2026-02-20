import { MediaImage, Cta } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

/**
 * card-slider-description service
 */

interface ComponentResponse {
    title: Title;
    backgroundImage: MediaImage;
    cards: CardResponse;
    navigationId: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface CardResponse {
    title: string;
    description: string;
    image: MediaImage;
    cta: Cta;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c42').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                bgImage: { populate: true },
                cards: {
                    populate: {
                        title: { populate: true },
                        description: { populate: true },
                        image: { populate: true },
                        cta: { populate: true },
                    },
                },
            },
        });

        const title = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const backgroundImage = componentData.bgImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgImage)
            : null;

        const cards = componentData.cards.map((data): CardResponse => {
            const image = data.image
                ? strapi
                      .service('api::content.field-render')
                      .getMediaImage(data.image)
                : null;

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
            title,
            backgroundImage,
            cards,
            navigationId: componentData.navigationId,
        };
    },
};
