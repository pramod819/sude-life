import { MediaImage } from '../../../../types/custom/common-type';
import { ImageData } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

/**
 * tab-slider service
 */

interface TabSliderResponse {
    title: Title;
    backgroundImage: MediaImage;
    mediaTab: MediaTabResponse;
}

interface TabSliderRequest {
    __component: string;
    id: number;
    title: Title;
}

interface VideoIdsData {
    videoid: string;
}

interface MediaTabData {
    type: string;
    title: string;
    description: string;
    images: ImageData[];
    videoids: VideoIdsData[];
}

interface MediaTabResponse {
    type: string;
    title: string;
    description: string;
    mediaList: MediaImage[] | VideoIdsData[];
}

export default {
    renderComponent: async (
        component: TabSliderRequest,
        id: number,
        params: object
    ): Promise<TabSliderResponse> => {
        const componentData = await strapi.query('corp-dynamic.c11').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                bgimage: { populate: true },
                tab: {
                    populate: {
                        type: { populate: true },
                        title: { populate: true },
                        description: { populate: true },
                        images: { populate: true },
                        videoids: { populate: true },
                    },
                },
            },
        });

        const title = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const backgroundImage = componentData.bgimage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgimage)
            : null;

        const mediaTab = componentData.tab.map(
            (data: MediaTabData): MediaTabResponse => {
                let list = [];

                if (data.type === 'image') {
                    list = data.images
                        ? strapi
                              .service('api::content.field-render')
                              .getMediaImages(data.images)
                        : null;
                } else if (data.type === 'video') {
                    list = strapi
                        .service('api::sudlife-corp.tab-slider')
                        .getVideoIds(data.videoids);
                }

                return {
                    type: data.type,
                    title: data.title,
                    description: data.description,
                    mediaList: list,
                };
            }
        );

        return {
            title,
            backgroundImage,
            mediaTab,
        };
    },
    getVideoIds: (videoIds: VideoIdsData[]): string[] => {
        return videoIds.map((item) => {
            return item.videoid;
        });
    },
};
