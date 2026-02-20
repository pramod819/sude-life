import { Title } from '../../../../types/custom/common-type';

/**
 * nested-tabs service
 */
interface ComponentResponse {
    title: Title;
    tabs?: TabsResponse[];
}

interface TabsResponse {
    text: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c123').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                tabs: {
                    populate: {
                        parent: {
                            populate: true,
                        },
                    },
                },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const tabs = await Promise.all(
            componentData.tabs.map(async (tab) => {
                const nestedTabs = await strapi
                    .service('api::content.nested-tabs')
                    .getNestedTree(String(tab.id));

                return {
                    text: tab.text,
                    children: nestedTabs,
                };
            })
        );

        return {
            title: titleData,
            tabs,
        };
    },
};
