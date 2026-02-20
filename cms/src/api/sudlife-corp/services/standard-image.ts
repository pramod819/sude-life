/**
 * standard-image service
 */
import { ImageData } from '../../../../types/custom/common-type';

interface StandardImageResponse {
    image: ImageData;
}

interface StandardImageRequest {
    __component: string;
    id: number;
}
export default {
    renderComponent: async (
        component: StandardImageRequest,
        id: number,
        params: object
    ): Promise<StandardImageResponse> => {
        const componentData = await strapi.query('corp-dynamic.c4').findOne({
            where: { id: component.id },
            populate: { media_img: { populate: true } },
        });
        const image = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.media_img);
        return { image: image };
    },
};
