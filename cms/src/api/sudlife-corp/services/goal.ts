import { Title } from '../../../../types/custom/common-type';
import { Cta } from '../../../../types/custom/common-type';
import { MediaImage } from '../../../../types/custom/common-type';
import { ImageData } from '../../../../types/custom/common-type';

/**
 * goal service
 */

interface GoalResponse {
    title: Title;
    description: string;
    bgimage: ImageData;
    bgcolor: string;
    goalCard: GoalData;
}

interface GoalRequest {
    __component: string;
    id: number;
    title: Title;
    description: string;
    bgcolor: string;
    goalCard: GoalData;
}

interface GoalData {
    bgcolor: string;
    text: string;
    image: MediaImage;
    cta: Cta;
}

export default {
    renderComponent: async (
        component: GoalRequest,
        id: number,
        params: object
    ): Promise<GoalResponse> => {
        const componentData = await strapi.query('corp-dynamic.c13').findOne({
            where: { id: component.id },
            populate: {
                goalCard: {
                    populate: {
                        bgcolor: {
                            populate: true,
                        },
                        text: {
                            populate: true,
                        },
                        image: {
                            populate: true,
                        },
                        cta: {
                            populate: true,
                        },
                    },
                },
                bgimage: { populate: true },
                titleTags: { populate: true },
            },
        });
        const bgimage = componentData.bgimage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgimage)
            : null;

        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const goalData = componentData.goalCard.map((data): GoalData => {
            const imageData = data.image
                ? strapi
                      .service('api::content.field-render')
                      .getMediaImage(data.image)
                : null;

            const cta = data.cta
                ? strapi.service('api::content.field-render').getCta(data.cta)
                : null;

            return {
                bgcolor: data.bgcolor,
                text: data.text,
                image: imageData,
                cta: cta,
            };
        });

        return {
            title: titleData,
            description: component.description,
            bgimage: bgimage,
            bgcolor: component.bgcolor,
            goalCard: goalData,
        };
    },
};
