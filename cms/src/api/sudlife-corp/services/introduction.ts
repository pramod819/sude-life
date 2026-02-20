import { Cta } from '../../../../types/custom/common-type';
import { MediaImage } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';
import { ImageData } from '../../../../types/custom/common-type';

/**
 * introduction service
 */

interface IntroductionResponse {
    title: Title;
    description: string;
    introCard: IntroductionData;
}

interface IntroductionRequest {
    __component: string;
    id: number;
    title: Title;
    description: string;
    introCard: IntroductionData;
}

interface IntroductionData {
    bgcolor: string;
    title: string;
    subTitle: string;
    bgimage: MediaImage;
}

export default {
    renderComponent: async (
        component: IntroductionRequest,
        id: number,
        params: object
    ): Promise<IntroductionResponse> => {
        const componentData = await strapi.query('corp-dynamic.c14').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                introcard: {
                    populate: {
                        bgcolor: {
                            populate: true,
                        },
                        title: {
                            populate: true,
                        },
                        sub_title: {
                            populate: true,
                        },
                        bgimage: {
                            populate: true,
                        },
                    },
                },
            },
        });
        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const introductionData = componentData.introcard.map(
            (data): IntroductionData => {
                const imageData = data.bgimage
                    ? strapi
                          .service('api::content.field-render')
                          .getMediaImage(data.bgimage)
                    : null;

                return {
                    bgcolor: data.bgcolor,
                    title: data.title,
                    subTitle: data.sub_title,
                    bgimage: imageData,
                };
            }
        );
        const description = component.description
            ? strapi
                  .service('api::content.field-render')
                  .replaceDomain(
                      component.description,
                      process.env.IMAGE_REPLACE,
                      process.env.IMAGE_BASE_PATH
                  )
            : null;

        return {
            title: titleData,
            description,
            introCard: introductionData,
        };
    },
};
