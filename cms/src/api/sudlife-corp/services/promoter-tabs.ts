import {
    Title,
    MediaImage,
    ImageData,
} from '../../../../types/custom/common-type';

/**
 * promoter-tabs service
 */
interface ComponentResponse {
    titleTags: Title;
    backgroundImage: MediaImage;
    promoters: PromoterData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface PromoterData {
    title: string;
    tabIcon: ImageData;
    description: string;
    image: MediaImage;
    promoterFeatures: PromoterFeatureData[];
    promoterLabel: PromoterLabelData[];
}

interface PromoterFeatureData {
    title: string;
    shortDescription: string;
    icon: ImageData;
}

interface PromoterLabelData {
    label: string;
    number: string;
    icon: ImageData;
    isLink: boolean;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c78').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                backgroundImage: { populate: true },
                promoters: {
                    populate: {
                        title: { populate: true },
                        tabIcon: { populate: true },
                        description: { populate: true },
                        image: { populate: true },
                        promoterFeature: {
                            populate: {
                                title: { populate: true },
                                shortDescription: { populate: true },
                                icon: { populate: true },
                            },
                        },
                        featureLabel: {
                            populate: {
                                label: { populate: true },
                                number: { populate: true },
                                icon: { populate: true },
                            },
                        },
                    },
                },
            },
        });

        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const backgroundImage = componentData.backgroundImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.backgroundImage)
            : {};

        const promoters = componentData.promoters.map(
            (dataPromoter): PromoterData => {
                const tabIcon = strapi
                    .service('api::content.field-render')
                    .getImage(dataPromoter.tabIcon);

                const image = dataPromoter.image
                    ? strapi
                          .service('api::content.field-render')
                          .getMediaImage(dataPromoter.image)
                    : {};

                const promoterFeatures = dataPromoter.promoterFeature.map(
                    (data): PromoterFeatureData => {
                        const icon = strapi
                            .service('api::content.field-render')
                            .getImage(data.icon);

                        return {
                            title: data.title,
                            shortDescription: data.shortDescription,
                            icon,
                        };
                    }
                );

                const promoterLabel = dataPromoter.featureLabel.map(
                    (data1): PromoterLabelData => {
                        const icon = strapi
                            .service('api::content.field-render')
                            .getImage(data1.icon);

                        return {
                            label: data1.label,
                            number: data1.number,
                            icon,
                            isLink: data1.isLink,
                        };
                    }
                );

                return {
                    title: dataPromoter.title,
                    tabIcon,
                    description: dataPromoter.description,
                    image,
                    promoterFeatures: promoterFeatures,
                    promoterLabel: promoterLabel,
                };
            }
        );

        return {
            titleTags: titleData,
            backgroundImage,
            promoters,
        };
    },
};
