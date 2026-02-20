import { Cta, MediaImage, Title } from '../../../../types/custom/common-type';

/**
 * error-and-maintenance
 */

interface ComponentResponse {
    errorCode: string;
    title: Title;
    description: string;
    bgImage: MediaImage;
    cta: Cta;
    image: MediaImage;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c41').findOne({
            where: { id: component.id },
            populate: {
                errorCode: { populate: true },
                title: { populate: true },
                description: { populate: true },
                bgImage: { populate: true },
                cta: { populate: true },
                image: { populate: true },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const bgImage: MediaImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.bgImage);

        const cta = strapi
            .service('api::content.field-render')
            .getCta(componentData.cta);

        const image: MediaImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.image);

        return {
            errorCode: componentData.errorCode,
            title: titleData,
            description: componentData.description,
            bgImage,
            cta,
            image,
        };
    },
};
