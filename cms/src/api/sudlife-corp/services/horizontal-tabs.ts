import { Title, MediaImage } from '../../../../types/custom/common-type';

/**
 * horizontal-tabs service
 */
interface ComponentResponse {
    title: Title;
    shortDescription: string;
    tabs: TabData;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface TabData {
    tabTitle: string;
    title: string;
    description: string;
    image: MediaImage;
    bulletPoint: string[];
    isRightSideImage: boolean;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c44').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                tabs: {
                    populate: {
                        image: { populate: true },
                        bulletPoint: { populate: true },
                    },
                },
            },
        });
        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const tabs = componentData.tabs.map((data): TabData => {
            const image = data.image
                ? strapi
                      .service('api::content.field-render')
                      .getMediaImage(data.image)
                : null;

            const bulletPointInfo = data.bulletPoint.map((bullet): string => {
                return bullet.text;
            });

            return {
                tabTitle: data.tabTitle,
                title: data.title,
                description: data.description,
                bulletPoint: bulletPointInfo,
                image,
                isRightSideImage: data.isRightSideImage,
            };
        });

        return {
            title: titleData,
            shortDescription: componentData.shortDescription,
            tabs,
        };
    },
};
