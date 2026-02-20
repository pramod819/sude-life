/**
 * avoid-claim-reject service
 */

import { MediaImage, Title } from '../../../../types/custom/common-type';

interface AvoidClaimRejectResponse {
    title: Title;
    image: MediaImage;
    avoidClaimReject: AvoidClaimRejectData;
}

interface AvoidClaimRejectRequest {
    __component: string;
    id: number;
    title: Title;
}

interface AvoidClaimRejectData {
    title: string;
    description: string;
}

export default {
    renderComponent: async (
        component: AvoidClaimRejectRequest,
        id: number,
        params: object
    ): Promise<AvoidClaimRejectResponse> => {
        const componentData = await strapi.query('corp-dynamic.c24').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                image: { populate: true },
                avoidRejection: { populate: true },
            },
        });
        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.titleTags);

        const imageData: MediaImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.image);

        const avoidClaimInfo = componentData.avoidRejection.map(
            (data): AvoidClaimRejectData => {
                return {
                    title: data.title,
                    description: data.description,
                };
            }
        );

        return {
            title: titleData,
            image: imageData,
            avoidClaimReject: avoidClaimInfo,
        };
    },
};
