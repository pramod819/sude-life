/**
 * simple-banner service
 */
import { Title, MediaImage, Cta } from '../../../../types/custom/common-type';

interface ComponentResponse {
    title: Title;
    subTitle: string;
    rating: string;
    bgImage: MediaImage;
    cta: Cta[];
    navigationId: string;
    tags: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
}
export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c100').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                subTitle: { populate: true },
                rating: { populate: true },
                bgImage: { populate: true },
                cta: { populate: true },
                tags: { populate: true },
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

        const cta = strapi
            .service('api::content.field-render')
            .getCtas(componentData.cta);

        return {
            title: title,
            subTitle: componentData.subTitle,
            rating: componentData.rating,
            bgImage,
            cta,
            navigationId: componentData.navigationId,
            tags: componentData.tags,
        };
    },
};
