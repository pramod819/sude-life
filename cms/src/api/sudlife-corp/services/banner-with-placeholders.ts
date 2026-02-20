import { Title, MediaImage, Cta } from '../../../../types/custom/common-type';

/**
 * banner-with-placeholders service
 */
interface ComponentResponse {
    title: Title;
    shortDescription: string;
    backgroundImage: MediaImage;
    cta: Cta;
    leftText: string;
    rightText: string;
    rightImage: MediaImage;
    leftImage: MediaImage;
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
        const componentData = await strapi.query('corp-dynamic.c106').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                cta: { populate: true },
                backgroundImage: { populate: true },
                leftImage: { populate: true },
                rightImage: { populate: true },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const backgroundImage: MediaImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.backgroundImage);

        const leftImage: MediaImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.leftImage);

        const rightImage: MediaImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.rightImage);

        const cta = componentData.cta
            ? strapi
                  .service('api::content.field-render')
                  .getCta(componentData.cta)
            : null;

        return {
            title: titleData,
            shortDescription: componentData.shortDescription,
            backgroundImage,
            cta,
            leftText: componentData.leftText,
            rightText: componentData.rightText,
            leftImage,
            rightImage,
        };
    },
};
