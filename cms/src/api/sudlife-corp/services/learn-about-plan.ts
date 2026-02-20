import {
    Title,
    ImageData,
    MediaImage,
} from '../../../../types/custom/common-type';

/**
 * learn-about-plan service
 */
interface ComponentResponse {
    title: Title;
    media: MediaData;
    subTitle: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface MediaData {
    icon: ImageData;
    title: string;
    media: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c33').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                media: { populate: true },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const media = componentData.media.map((data): MediaData => {
            const icon = strapi
                .service('api::content.field-render')
                .getImage(data.icon);

            const filePath = strapi
                .service('api::content.field-render')
                .getPdfPath(data.media);

            return {
                icon,
                title: data.title,
                media: filePath,
            };
        });

        return {
            title: titleData,
            media,
            subTitle: componentData.subTitle,
        };
    },
};
