import { Title, ImageData } from '../../../../types/custom/common-type';

/**
 * how-it-works service
 */
interface ComponentResponse {
    title: Title;
    tab: TabData;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface TabData {
    tabTitle: string;
    description: string;
    video: ImageData;
    youtubeVideoId: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c32').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                tab: { populate: true },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const tab = componentData.tab.map((data): TabData => {
            const video = strapi
                .service('api::content.field-render')
                .getImage(data.video);

            return {
                tabTitle: data.tabTitle,
                description: data.description,
                youtubeVideoId: data.youtubeVideoId,
                video,
            };
        });

        return {
            title: titleData,
            tab,
        };
    },
};
