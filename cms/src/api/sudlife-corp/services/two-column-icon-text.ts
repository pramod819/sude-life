/**
 * two-column-icon-text service
 */
import { Title, ImageData } from '../../../../types/custom/common-type';

interface ComponentResponse {
    title: Title;
    shortDescription: string;
    items: ItemsData;
    description: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface ItemsData {
    icon: ImageData;
    title: string;
    description: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c55').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                shortDescription: { populate: true },
                items: { populate: true },
                description: { populate: true },
                icon: { populate: true },
            },
        });

        const title = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const items = componentData.items.map((data): ItemsData => {
            const icon = data.icon
                ? strapi
                      .service('api::content.field-render')
                      .getImage(data.icon)
                : null;

            const description = data.description
                ? strapi
                      .service('api::content.field-render')
                      .getDescriptionText(data.description)
                : null;

            return {
                icon,
                title: data.title,
                description,
            };
        });

        return {
            title,
            shortDescription: componentData.shortDescription,
            description: componentData.description,
            items,
        };
    },
};
