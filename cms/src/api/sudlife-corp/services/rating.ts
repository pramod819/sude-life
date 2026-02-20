import {
    Title,
    MediaImage,
    Cta,
    RATTING_DATA,
} from '../../../../types/custom/common-type';

/**
 * Rating service
 */
interface ComponentResponse {
    title: string;
    cta: Cta;
    image: MediaImage;
    rating: RatingData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
    cta: Cta;
    image: MediaImage;
    rating: RatingData[];
}

interface RatingData {
    id: number;
    title: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.c68-rating')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    cta: { populate: true },
                    image: { populate: true },
                    rating: { populate: true },
                },
            });
        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const cta = componentData.cta
            ? strapi
                  .service('api::content.field-render')
                  .getCta(componentData.cta)
            : null;

        const bgImage: MediaImage = componentData.image
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.image)
            : null;

        return {
            title: titleData,
            cta: cta,
            image: bgImage,
            rating: RATTING_DATA,
        };
    },
};
