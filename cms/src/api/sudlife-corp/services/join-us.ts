import {
    Title,
    MediaImage,
    LabelPack,
} from '../../../../types/custom/common-type';

/**
 * join-us service
 */
interface ComponentResponse {
    title: Title;
    bulletPoints: string[];
    bgColour: string;
    bgImage: MediaImage;
    formTitle: string;
    labelPack: LabelPack[];
    bulletPointsOverlayColour: string;
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
        const componentData = await strapi
            .query('corp-dynamic.join-us')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    bulletPoints: { populate: true },
                    bgImage: { populate: true },
                    formTitle: { populate: true },
                    labelPack: { populate: true },
                },
            });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const bulletPoints = componentData.bulletPoints.map((data): string => {
            return data.text;
        });

        const bgImage = componentData.bgImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgImage)
            : null;

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        return {
            title: titleData,
            bulletPoints,
            bgColour: componentData.bgColour,
            bgImage,
            bulletPointsOverlayColour: componentData.bulletPointsOverlayColour,
            formTitle: componentData.formTitle,
            labelPack,
        };
    },
};
