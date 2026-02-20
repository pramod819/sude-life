import {
    Title,
    MediaImage,
    Cta,
    ImageData,
} from '../../../../types/custom/common-type';

/**
 * video-slider service
 */
interface ComponentResponse {
    title: Title;
    shortDescription: string;
    backgroundImage: MediaImage;
    videoItems: VideoItemData[];
    cta: Cta;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface VideoItemData {
    videoTitle: string;
    image: ImageData;
    video: ImageData;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c107').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                backgroundImage: { populate: true },
                videoItems: { populate: true },
                cta: { populate: true },
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

        const cta = componentData.cta
            ? strapi
                  .service('api::content.field-render')
                  .getCta(componentData.cta)
            : null;

        const videoItems = componentData.videoItems.map(
            (data): VideoItemData => {
                const video = strapi
                    .service('api::content.field-render')
                    .getImage(data.video);

                const image = data.image
                    ? strapi
                          .service('api::content.field-render')
                          .getImage(data.image)
                    : null;

                return {
                    videoTitle: data.videoTitle,
                    video,
                    image,
                };
            }
        );

        return {
            title: titleData,
            shortDescription: componentData.shortDescription,
            backgroundImage,
            cta,
            videoItems,
        };
    },
};
