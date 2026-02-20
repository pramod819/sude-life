/**
 * select-plan service
 */

import { MediaImage, Title } from '../../../../types/custom/common-type';

interface SelectPlanResponse {
    title: Title;
    subTitle: string;
    image: MediaImage;
    selectPlan: SelectPlanData;
}

interface SelectPlanRequest {
    __component: string;
    id: number;
    title: Title;
}

interface SelectPlanData {
    title: string;
    description: string;
}

export default {
    renderComponent: async (
        component: SelectPlanRequest,
        id: number,
        params: object
    ): Promise<SelectPlanResponse> => {
        const componentData = await strapi.query('corp-dynamic.c28').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                image: { populate: true },
                selectPlan: { populate: true },
            },
        });
        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.titleTags);

        const imageData: MediaImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.image);

        const selectPlanInfo = componentData.selectPlan.map(
            (data): SelectPlanData => {
                return {
                    title: data.title,
                    description: data.description,
                };
            }
        );

        return {
            title: titleData,
            subTitle: componentData.subTitle,
            image: imageData,
            selectPlan: selectPlanInfo,
        };
    },
};
