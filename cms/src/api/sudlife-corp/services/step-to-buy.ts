/**
 * step-to-buy service
 */
import {
    MediaImage,
    Title,
    ImageData,
    Cta,
} from '../../../../types/custom/common-type';

interface StepToBuyResponse {
    title: Title;
    subTitle: string;
    overlapTitle: string;
    overlapBackgroundImage: MediaImage;
    stepToBuy: StepToBuyData;
    cta: Cta;
    bulletPointTitle: string;
    bulletPoints: string[];
}

interface StepToBuyRequest {
    __component: string;
    id: number;
    title: Title;
}

interface StepToBuyData {
    title: string;
    description: string;
    icon: ImageData;
}

interface BulletPointData {
    text: string;
}

export default {
    renderComponent: async (
        component: StepToBuyRequest,
        id: number,
        params: object
    ): Promise<StepToBuyResponse> => {
        const componentData = await strapi.query('corp-dynamic.c20').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                overlapBackgroundImage: { populate: true },
                stepToBuy: { populate: true },
                cta: { populate: true },
                bulletPoints: { populate: true },
            },
        });
        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;
        const ctaData = componentData.cta
            ? strapi
                  .service('api::content.field-render')
                  .getCtas(componentData.cta)
            : null;
        const bgImage: MediaImage = componentData.overlapBackgroundImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.overlapBackgroundImage)
            : null;

        const stepToBuyInfo = componentData.stepToBuy.map(
            (data): StepToBuyData => {
                const imageData = strapi
                    .service('api::content.field-render')
                    .getImage(data.icon);
                return {
                    title: data.title,
                    description: data.description,
                    icon: imageData,
                };
            }
        );

        const bulletPointInfo = componentData.bulletPoints.map(
            (data): string => {
                return data.text;
            }
        );

        return {
            title: titleData,
            subTitle: componentData.subTitle,
            overlapTitle: componentData.overlapTitle,
            overlapBackgroundImage: bgImage,
            stepToBuy: stepToBuyInfo,
            cta: ctaData,
            bulletPointTitle: componentData.bulletPointTitle,
            bulletPoints: bulletPointInfo,
        };
    },
};
