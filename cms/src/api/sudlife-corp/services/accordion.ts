import { Title } from '../../../../types/custom/common-type';

/**
 * accordion service
 */

interface AccordionResponse {
    mainTitle: Title;
    shortDescription: string;
    accordion: AccordionData;
    title: string;
    description: string;
    bulletPoints: string[];
    shortText: string;
}

interface AccordionRequest {
    __component: string;
    id: number;
    title: Title;
    subTitle: string;
}

interface AccordionData {
    title: string;
    variation: string;
    description: DescriptionData[];
}

interface DescriptionData {
    title: string;
    description: string;
}

export default {
    renderComponent: async (
        component: AccordionRequest,
        id: number,
        params: object
    ): Promise<AccordionResponse> => {
        const componentData = await strapi.query('corp-dynamic.c18').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                accordion: { populate: true },
                bulletPoints: { populate: true },
            },
        });

        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const accordion = componentData.accordion.map((data): AccordionData => {
            const description = data.description.map(
                (data): DescriptionData => {
                    const title = data.title;

                    return {
                        ...(title && { title }),
                        description: data.description,
                    };
                }
            );

            return {
                title: data.title,
                variation: data.variation,
                description,
            };
        });

        const bulletPoints = componentData.bulletPoints.map((data): string => {
            return data.text;
        });

        return {
            mainTitle: titleData,
            shortDescription: componentData.shortDescription ?? '',
            accordion,
            title: componentData.title ?? '',
            description: componentData.description ?? '',
            bulletPoints,
            shortText: componentData.shortText ?? '',
        };
    },
};
