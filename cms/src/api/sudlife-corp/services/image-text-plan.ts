/**
 * image-text-plan service
 */

import { MediaImage, Title, Cta } from '../../../../types/custom/common-type';
import marked from 'marked';

interface ImageTextPlanResponse {
    title: Title;
    description: string | Promise<string>;
    backgroundColor: string;
    bgImage: MediaImage;
    image: MediaImage;
    planList: PlanListData;
    link: Cta;
    button: Cta;
}

interface ImageTextPlanRequest {
    __component: string;
    id: number;
    title: Title;
}

interface PlanListData {
    title: string;
    description: string;
}

export default {
    renderComponent: async (
        component: ImageTextPlanRequest,
        id: number,
        params: object
    ): Promise<ImageTextPlanResponse> => {
        const componentData = await strapi.query('corp-dynamic.c35').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                bgimage: { populate: true },
                image: { populate: true },
                planList: { populate: true },
                link: { populate: true },
                button: { populate: true },
            },
        });

        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const bgImageData: MediaImage = componentData.bgimage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgimage)
            : null;

        const imageData: MediaImage = componentData.image
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.image)
            : null;

        const linkData = componentData.link
            ? strapi
                  .service('api::content.field-render')
                  .getCta(componentData.link)
            : null;

        const buttonData = componentData.button
            ? strapi
                  .service('api::content.field-render')
                  .getCta(componentData.button)
            : null;

        const plainInfo = componentData.planList.map((data): PlanListData => {
            return {
                title: data.title,
                description: data.description,
            };
        });

        return {
            title: titleData,
            description: componentData.description
                ? marked.parse(componentData.description)
                : '',
            backgroundColor: componentData.backgroundColor ?? '',
            bgImage: bgImageData,
            image: imageData,
            planList: plainInfo,
            link: linkData,
            button: buttonData,
        };
    },
};
