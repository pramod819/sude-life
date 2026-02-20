import {
    Title,
    MediaImage,
    ImageData,
} from '../../../../types/custom/common-type';

/**
 * social-posts service
 */

interface ComponentResponse {
    title: Title;
    backgroundImage: MediaImage;
    subTitle: string;
    iconList: IconListData[];
    navigationId: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface IconListData {
    link: string;
    icon: ImageData;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c115').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                backgroundImage: { populate: true },
                iconList: { populate: true },
            },
        });

        const title = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const backgroundImage = componentData.backgroundImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.backgroundImage)
            : null;

        const iconList = componentData.iconList.map((data): IconListData => {
            const icon = data.icon
                ? strapi
                      .service('api::content.field-render')
                      .getImage(data.icon)
                : null;

            return {
                link: data.link,
                icon,
            };
        });

        return {
            title,
            subTitle: componentData.subTitle,
            backgroundImage,
            iconList,
            navigationId: componentData.navigationId,
        };
    },
};
