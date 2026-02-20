/**
 * eligibility service
 */

import { MediaImage, Title } from '../../../../types/custom/common-type';

interface EligibilityResponse {
    title: Title;
    eligibility: EligibilityData;
}

interface EligibilityRequest {
    __component: string;
    id: number;
    title: Title;
}

interface EligibilityData {
    title: string;
    image: MediaImage;
    eligibilityList: EligibilityListData;
}

interface EligibilityListData {
    text: string;
}

export default {
    renderComponent: async (
        component: EligibilityRequest,
        id: number,
        params: object
    ): Promise<EligibilityResponse> => {
        const componentData = await strapi.query('corp-dynamic.c31').findOne({
            where: { id: component.id },
            populate: {
                eligibility: {
                    populate: {
                        title: {
                            populate: true,
                        },
                        image: {
                            populate: true,
                        },
                        eligibilityList: {
                            populate: {
                                text: {
                                    populate: true,
                                },
                            },
                        },
                    },
                },
                titleTags: { populate: true },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.titleTags);

        const eligibilityInfoData = componentData.eligibility.map(
            (data): EligibilityData => {
                const imageData = strapi
                    .service('api::content.field-render')
                    .getMediaImage(data.image);
                const claimInfoData = data.eligibilityList.map(
                    (data): EligibilityListData => {
                        return {
                            text: data.text,
                        };
                    }
                );
                return {
                    title: data.title,
                    image: imageData,
                    eligibilityList: claimInfoData,
                };
            }
        );

        return {
            title: titleData,
            eligibility: eligibilityInfoData,
        };
    },
};
