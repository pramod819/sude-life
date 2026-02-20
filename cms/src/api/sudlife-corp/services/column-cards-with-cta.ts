import { Title, MediaImage, Cta } from '../../../../types/custom/common-type';

/**
 * column-cards-with-cta service
 */
interface ComponentResponse {
    title: Title;
    subTitle: string;
    importantPoints: string;
    importantPointHeading: string;
    cards: CardsData;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface CardsData {
    title: string;
    fontColour: string;
    colour: string;
    image: MediaImage;
    cta: Cta;
    expandText: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c50').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                subTitle: { populate: true },
                importantPoints: { populate: true },
                importantPointHeading: { populate: true },
                cards: {
                    populate: {
                        image: { populate: true },
                        cta: { populate: true },
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
                fontColour: data.fontColour,
                colour: data.bgColour,
                image,
                cta,
                expandText: data.expandText,
            };
        });

        return {
            title: titleData,
            subTitle: componentData.subTitle,
            importantPoints: componentData.importantPoints,
            importantPointHeading: componentData.importantPointHeading,
            cards,
        };
    },
};
