import { Title, ImageData } from '../../../../types/custom/common-type';

/**
 * horizontal-tabs-with-numbering-icons service
 */
interface ComponentResponse {
    titleTags: Title;
    description: string;
    label: string;
    tabItems: TabsData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface TabsData {
    title: string;
    tabText: string;
    description: string;
    icon: ImageData;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c85').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                description: { populate: true },
                label: { populate: true },
                tabItems: { populate: true },
            },
        });
        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.titleTags);

        const tabs = componentData.tabItems.map((data): TabsData => {
            const icon: ImageData = strapi
                .service('api::content.field-render')
                .getImage(data.icon);

            return {
                title: data.title,
                description: data.description,
                tabText: data.tabText,
                icon,
            };
        });

        return {
            titleTags: titleData,
            label: componentData.label,
            description: componentData.description,
            tabItems: tabs,
        };
    },
};
