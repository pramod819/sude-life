import { Title, ImageData } from '../../../../types/custom/common-type';

/**
 * media-queries service
 */

interface ComponentResponse {
    titleTags: Title;
    mediaQuery: MediaQueryData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface MediaQueryData {
    icon: ImageData;
    boxTitle: string;
    boxText: string;
    boxType: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c99').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                mediaQueries: { populate: true },
            },
        });

        const titleTags = strapi
            .service('api::content.field-render')
            .getTitle(componentData.titleTags);

        const mediaQueryData = componentData.mediaQueries.map(
            (data): MediaQueryData => {
                const icon = strapi
                    .service('api::content.field-render')
                    .getImage(data.icon);
                return {
                    icon,
                    boxTitle: data.boxTitle,
                    boxText: data.boxText,
                    boxType: data.boxType,
                };
            }
        );

        return {
            titleTags: titleTags,
            mediaQuery: mediaQueryData,
        };
    },
};
