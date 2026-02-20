/**
 * guide-component service
 */
import { Title } from '../../../../types/custom/common-type';

interface ComponentResponse {
    title: Title;
    description: string;
    tabs: TabData;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface TabData {
    title: string;
    shortDescription: string;
    description: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c53').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                description: { populate: true },
                tabs: { populate: true },
            },
        });

        const title = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const tabs = componentData.tabs.map((data): TabData => {
            const description = data.description
                ? strapi
                      .service('api::content.field-render')
                      .getDescriptionText(data.description)
                : null;

            return {
                title: data.title,
                shortDescription: data.shortDescription,
                description,
            };
        });

        return {
            title,
            description: componentData.description,
            tabs,
        };
    },
};
