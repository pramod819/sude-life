/**
 * video-carousel service
 */
import { MediaImage } from '../../../../types/custom/common-type';

interface ComponentResponse {
    slides: SlideData;
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface SlideData {
    title: string;
    type: string;
    thumbnail: MediaImage;
    youtubeLink: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c64').findOne({
            where: { id: component.id },
            populate: {
                slides: {
                    populate: {
                        thumbnail: { populate: true },
                    },
                },
            },
        });

        const slides = componentData.slides.map((data): SlideData => {
            const thumbnail = strapi
                .service('api::content.field-render')
                .getMediaImage(data.thumbnail);

            return {
                title: data.title,
                type: data.type,
                thumbnail,
                youtubeLink: data.youtubeLink,
            };
        });

        return slides;
    },
};
