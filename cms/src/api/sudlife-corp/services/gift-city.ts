import {
    Title,
    MediaImage,
    LabelPack,
    CountryResponse,
} from '../../../../types/custom/common-type';

/**
 * gift-city service
 */
interface ComponentResponse {
    formType: string;
    title: Title;
    shortDescription: string;
    acceptedCountries: CountryResponse[];
    bulletPoints: string[];
    bgColour: string;
    bgImage: MediaImage;
    formTitle: string;
    labelPack: LabelPack[];
    bulletPointsOverlayColour: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.gift-city')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    shortDescription: { populate: true },
                    accepted_countries: { populate: true },
                    bulletPoints: { populate: true },
                    bgImage: { populate: true },
                    formTitle: { populate: true },
                    labelPack: { populate: true },
                },
            });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const acceptedCountries = strapi
            .service('api::content.country')
            .getCountries(componentData.accepted_countries);

        const bulletPoints = componentData.bulletPoints.map((data): string => {
            return data.text;
        });

        const bgImage = componentData.bgImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgImage)
            : null;

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        return {
            formType: 'gift_city',
            title: titleData,
            shortDescription: componentData.shortDescription,
            acceptedCountries,
            bulletPoints,
            bgColour: componentData.bgColour,
            bgImage,
            bulletPointsOverlayColour: componentData.bulletPointsOverlayColour,
            formTitle: componentData.formTitle,
            labelPack,
        };
    },
};
