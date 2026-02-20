import { MediaImage } from '../../../../types/custom/common-type';
import { ImageData } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

/**
 * inclusion-exclusion service
 */

interface ComponentResponse {
    title: Title;
    subTitle: string;
    backgroundImage: MediaImage;
    tab: TabResponse;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface TabItemRequest {
    id: number;
    title: string;
    description: string;
}

interface TabItemResponse {
    title: string;
    description: string;
}

interface TabResponse {
    title: string;
    description: string;
    icon: ImageData;
    tabItem: TabItemResponse[];
    disclaimer: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c21').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                bgImage: { populate: true },
                tab: {
                    populate: {
                        title: { populate: true },
                        subtitle: { populate: true },
                        description: { populate: true },
                        icon: { populate: true },
                        tabItem: { populate: true },
                        disclaimer: { populate: true },
                    },
                },
            },
        });

        const title = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const backgroundImage = componentData.bgImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgImage)
            : null;

        const tab = componentData.tab.map((data): TabResponse => {
            const icon = strapi
                .service('api::content.field-render')
                .getImage(data.icon);

            const tabItems = strapi
                .service('api::sudlife-corp.inclusion-exclusion')
                .getItems(data.tabItem);

            return {
                title: data.title,
                description: data.description,
                icon,
                tabItem: tabItems,
                disclaimer: data.disclaimer,
            };
        });

        return {
            title,
            subTitle: componentData.subtitle,
            backgroundImage,
            tab,
        };
    },
    getItem: ({ id, title, description }: TabItemRequest): TabItemResponse => {
        return { title, description };
    },
    getItems: (titleData: TabItemRequest[]): TabItemResponse[] => {
        return titleData.map((item: TabItemRequest): TabItemResponse => {
            return strapi
                .service('api::sudlife-corp.inclusion-exclusion')
                .getItem(item);
        });
    },
};
