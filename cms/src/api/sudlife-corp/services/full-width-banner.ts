/**
 * full-width-banner service
 */
import { ImageData, Cta } from '../../../../types/custom/common-type';

interface FullWidthBannerResponse {
    image: ImageData;
    title: string;
    subTitle: string;
    cta: Cta;
}

interface FullWidthBannerRequest {
    __component: string;
    id: number;
}
export default {
    renderComponent: async (
        component: FullWidthBannerRequest,
        id: number,
        params: object
    ): Promise<FullWidthBannerResponse> => {
        const componentData = await strapi.query('corp-dynamic.c36').findOne({
            where: { id: component.id },
            populate: {
                image: { populate: true },
                title: { populate: true },
                subTitle: { populate: true },
                cta: { populate: true },
            },
        });

        const image = componentData.image
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.image)
            : null;

        const cta = componentData.cta
            ? strapi
                  .service('api::content.field-render')
                  .getCtas(componentData.cta)
            : null;

        return {
            image,
            title: componentData.title,
            subTitle: componentData.subTitle,
            cta,
        };
    },
};
