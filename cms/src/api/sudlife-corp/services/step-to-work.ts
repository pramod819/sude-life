/**
 * step-to-work service
 */

import { MediaImage, Title } from '../../../../types/custom/common-type';

interface StepToWorkResponse {
    title: Title;
    stepToWork: StepToWorkData;
}

interface StepToWorkRequest {
    __component: string;
    id: number;
    title: Title;
}

interface StepToWorkData {
    title: string;
    description: string;
    image: MediaImage;
}

export default {
    renderComponent: async (
        component: StepToWorkRequest,
        id: number,
        params: object
    ): Promise<StepToWorkResponse> => {
        const componentData = await strapi.query('corp-dynamic.c34').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                stepToWork: {
                    populate: {
                        image: {
                            populate: true,
                        },
                    },
                },
            },
        });
        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const stepToWorkInfo = componentData.stepToWork.map(
            (data): StepToWorkData => {
                const imageData: MediaImage = strapi
                    .service('api::content.field-render')
                    .getMediaImage(data.image);
                return {
                    title: data.title,
                    description: data.description,
                    image: imageData,
                };
            }
        );

        return {
            title: titleData,
            stepToWork: stepToWorkInfo,
        };
    },
};
