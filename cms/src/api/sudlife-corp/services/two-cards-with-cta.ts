/**
 * two-cards-with-cta service
 */
import { Title, MediaImage, Cta } from '../../../../types/custom/common-type';

interface ComponentResponse {
    variation: string;
    title: Title;
    subTitle: string;
    cards: CardData;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface CardData {
    bgColour: string;
    image: MediaImage;
    title: string;
    subTitle: string;
    titleBottom: boolean;
    cta: Cta;
    pointers: string[];
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c56').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                cards: {
                    populate: {
                        image: { populate: true },
                        cta: { populate: true },
                        pointers: { populate: true },
                    },
                },
            },
        });

        const title = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const variation = componentData.variation ?? 'default';

        const cards = componentData.cards.map((data): CardData => {
            const image = data.image
                ? strapi
                      .service('api::content.field-render')
                      .getMediaImage(data.image)
                : {};

            const cta = data.cta
                ? strapi.service('api::content.field-render').getCta(data.cta)
                : {};

            const pointers = data.pointers.map((data): string => {
                return data.text;
            });

            return {
                bgColour: data.bgColour,
                image,
                title: data.title,
                subTitle: data.subTitle,
                titleBottom: data.titleBottom,
                cta,
                pointers,
            };
        });

        return {
            variation,
            title,
            subTitle: componentData.subTitle ?? '',
            cards,
        };
    },
};
