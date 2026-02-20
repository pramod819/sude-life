import { MediaImage } from '../../../../types/custom/common-type';
import { ImageData } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

/**
 * text-and-media service
 */

interface TextAndMediaResponse {
    title: Title;
    description: string;
    backgroundImage: MediaImage;
    mediaType: string;
    media: MediaImage;
    logos: TextAndMediaData;
    scanner: ImageData;
    scannerText: string;
}

interface TextAndMediaRequest {
    __component: string;
    id: number;
    title: Title;
    description: string;
    mediaType: string;
    scannerText: string;
}

interface TextAndMediaData {
    link: string;
    logo: ImageData;
}

export default {
    renderComponent: async (
        component: TextAndMediaRequest,
        id: number,
        params: object
    ): Promise<TextAndMediaResponse> => {
        const componentData = await strapi.query('corp-dynamic.c9').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                backgroundImage: { populate: true },
                media: { populate: true },
                logos: { populate: true },
                scanner: { populate: true },
            },
        });

        const textAndMediaData = componentData.logos.map(
            (data): TextAndMediaData => {
                const imageData = strapi
                    .service('api::content.field-render')
                    .getImage(data.logo);

                return {
                    link: data.link,
                    logo: imageData,
                };
            }
        );

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const backgroundImage: MediaImage = componentData.backgroundImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.backgroundImage)
            : null;

        const media: MediaImage = componentData.media
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.media)
            : null;

        const scanner = componentData.scanner
            ? strapi
                  .service('api::content.field-render')
                  .getImage(componentData.scanner)
            : null;

        return {
            title: titleData,
            description: component.description,
            backgroundImage: backgroundImage,
            mediaType: component.mediaType,
            media: media,
            logos: textAndMediaData,
            scanner,
            scannerText: component.scannerText,
        };
    },
};
