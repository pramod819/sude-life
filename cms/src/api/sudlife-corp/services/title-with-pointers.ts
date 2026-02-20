import { Title, MediaImage } from '../../../../types/custom/common-type';

/**
 * title-with-pointers service
 */
interface ComponentResponse {
    title: Title;
    eligibility: EligibilityData;
    eligibilityHeader: string;
    backgroundImage: MediaImage;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface EligibilityData {
    boldText: string;
    text: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c101').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                eligibility: { populate: true },
                backgroundImage: { populate: true },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const backgroundImage = componentData.backgroundImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.backgroundImage)
            : null;

        const eligibility = componentData.eligibility.map(
            (data): EligibilityData => {
                return {
                    boldText: data.boldText,
                    text: data.text,
                };
            }
        );

        return {
            title: titleData,
            eligibility,
            eligibilityHeader: componentData.mainTitle,
            backgroundImage,
        };
    },
};
