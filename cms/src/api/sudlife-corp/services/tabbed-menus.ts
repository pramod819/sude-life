/**
 * tabbed-menus service
 */

interface ComponentRequest {
    __component: string;
    id: number;
}

interface TabData {
    name: string;
    link: string;
    active: boolean;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<TabData[]> => {
        const componentData = await strapi.query('corp-dynamic.c109').findOne({
            where: { id: component.id },
            populate: {
                tabs: { populate: true },
            },
        });

        return componentData.tabs.map((data): TabData => {
            return {
                name: data.name,
                link: data.link,
                active: data.active,
            };
        });
    },
};
