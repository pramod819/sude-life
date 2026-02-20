import { Title, MediaImage, Cta } from '../../../../types/custom/common-type';

/**
 * banner-carousel service
 */
interface ComponentResponse {
    title: Title;
    slides: SlideData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface SlideData {
    image: MediaImage;
    ctas: Cta[];
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c59').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                slides: {
                    populate: {
                        image: { populate: true },
                        cta: { populate: true },
                    },
                },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const slides = componentData.slides.map((data): SlideData => {
            const image: MediaImage = strapi
                .service('api::content.field-render')
                .getMediaImage(data.image);

            const ctas = strapi
                .service('api::content.field-render')
                .getCtas(data.cta);

            return {
                image,
                ctas,
            };
        });

        return {
            title: titleData,
            slides,
        };
    },
};
