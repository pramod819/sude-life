/**
 * standard-image-text service
 */

import { ImageData, Title } from '../../../../types/custom/common-type';

interface StandardImageTextResponse {
    title: Title;
    description: string;
    image: ImageData;
}

interface StandardImageTextRequest {
    __component: string;
    id: number;
}
export default {
    renderComponent: async (
        component: StandardImageTextRequest,
        id: number,
        params: object
    ): Promise<StandardImageTextResponse> => {
        const componentData = await strapi.query('corp-dynamic.c58').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                image: { populate: true },
                description: { populate: true },
            },
        });
        const imageData = componentData.image
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.image)
            : null;

        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const description = componentData.description
            ? strapi
                  .service('api::content.field-render')
                  .getDescriptionText(componentData.description)
            : null;

        return {
            title: titleData,
            description: description,
            image: imageData,
        };
    },
};
