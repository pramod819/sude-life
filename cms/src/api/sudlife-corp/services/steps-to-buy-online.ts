import { Title, ImageData } from '../../../../types/custom/common-type';

/**
 * steps-to-buy-online service
 */
interface ComponentResponse {
    title: Title;
    subTitle: string;
    description: string;
    tabs: TabsData;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface TabsData {
    title: string;
    description: string;
    icon: ImageData;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c51').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                subTitle: { populate: true },
                description: { populate: true },
                tabs: { populate: true },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const tabs = componentData.tabs.map((data): TabsData => {
            const icon: ImageData = strapi
                .service('api::content.field-render')
                .getImage(data.icon);

            return {
                title: data.title,
                description: data.description,
                icon,
            };
        });

        return {
            title: titleData,
            subTitle: componentData.subTitle,
            description: componentData.description,
            tabs,
        };
    },
};
