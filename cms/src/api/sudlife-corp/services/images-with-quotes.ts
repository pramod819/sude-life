import { ImageData, MediaImage } from '../../../../types/custom/common-type';

/**
 * card-with-popup service
 */

interface ComponentResponse {
    imagesWithQuotes: ImagesWithQuotesData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface ImagesWithQuotesData {
    overlapImage: MediaImage;
    mainImage: ImageData;
    quote: string;
    name: string;
    designation: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c117').findOne({
            where: { id: component.id },
            populate: {
                imagesWithQuotes: {
                    populate: {
                        overlapImage: { populate: true },
                        mainImage: { populate: true },
                    },
                },
            },
        });

        const imagesWithQuotes = componentData.imagesWithQuotes.map(
            (data): ImagesWithQuotesData => {
                const overlapImage = data.overlapImage
                    ? strapi
                          .service('api::content.field-render')
                          .getMediaImage(data.overlapImage)
                    : null;

                const mainImage = data.mainImage
                    ? strapi
                          .service('api::content.field-render')
                          .getImage(data.mainImage)
                    : null;

                return {
                    overlapImage,
                    mainImage,
                    quote: data.quote,
                    name: data.name,
                    designation: data.designation,
                };
            }
        );

        return {
            imagesWithQuotes,
        };
    },
};
