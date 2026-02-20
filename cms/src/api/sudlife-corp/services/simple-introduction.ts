import { MediaImage, Title } from '../../../../types/custom/common-type';

/**
 * simple-introduction service
 */

interface SimpleInductionResponse {
    title: Title;
    image: MediaImage;
    introductionDetails: InductionDetailsData;
}

interface SimpleInductionRequest {
    __component: string;
    id: number;
    title: Title;
}

interface SimpleInductionData {
    title: string;
    description: string;
}

interface InductionDetailsData {
    description: string;
    introductionList: SimpleInductionData;
}

export default {
    renderComponent: async (
        component: SimpleInductionRequest,
        id: number,
        params: object
    ): Promise<SimpleInductionResponse> => {
        const componentData = await strapi.query('corp-dynamic.c47').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                image: { populate: true },
                introductionDetails: {
                    populate: {
                        description: { populate: true },
                        introductionList: { populate: true },
                    },
                },
            },
        });
        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const imageData = componentData.image
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.image)
            : null;

        const introductionListInfo = componentData.introductionDetails.map(
            (data): InductionDetailsData => {
                const inductionData = strapi
                    .service('api::sudlife-corp.inclusion-exclusion')
                    .getItems(data.introductionList);
                return {
                    description: data.description,
                    introductionList: inductionData,
                };
            }
        );

        return {
            title: titleData,
            image: imageData,
            introductionDetails: introductionListInfo,
        };
    },
};
