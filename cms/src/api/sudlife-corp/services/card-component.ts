import { Cta } from '../../../../types/custom/common-type';
import { MediaImage } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

/**
 * card-component service
 */
interface CardComponentResponse {
    title: Title;
    description: string;
    card: CardComponentData;
}

interface CardComponentRequest {
    __component: string;
    id: number;
    title: Title;
    description: string;
}

interface CardComponentData {
    order: number;
    backgroundColor: string;
    title: string;
    description: string;
    backgroundImage: MediaImage;
    cta: Cta;
}

export default {
    renderComponent: async (
        component: CardComponentRequest,
        id: number,
        params: object
    ): Promise<CardComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c6').findOne({
            where: { id: component.id },
            populate: {
                card: {
                    populate: {
                        backgroundColor: {
                            populate: true,
                        },
                        backgroundImage: {
                            populate: true,
                        },
                        title: {
                            populate: true,
                        },
                        description: {
                            populate: true,
                        },
                        cta: {
                            populate: true,
                        },
                    },
                },
                titleTags: { populate: true },
            },
        });
        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const cardComponentData = componentData.card.map(
            (data, index): CardComponentData => {
                const imageData = data.backgroundImage
                    ? strapi
                          .service('api::content.field-render')
                          .getMediaImage(data.backgroundImage)
                    : null;

                const cta = data.cta
                    ? strapi
                          .service('api::content.field-render')
                          .getCta(data.cta)
                    : null;

                return {
                    order: ++index,
                    backgroundColor: data.backgroundColor,
                    backgroundImage: imageData,
                    title: data.title,
                    description: data.description,
                    cta: cta,
                };
            }
        );

        return {
            title: titleData,
            description: component.description,
            card: cardComponentData,
        };
    },
};
