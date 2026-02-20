import { MediaImage } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

/**
 * navigation service
 */

interface ComponentResponse {
    items: NavigationItems;
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface BulletPointResponse {
    title: string;
}

interface NavigationItems {
    navigationId: string;
    title: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c118').findOne({
            where: { id: component.id },
            populate: {
                navigationItems: {
                    populate: {
                        navigationId: { populate: true },
                        title: { populate: true },
                    },
                },
            },
        });

        const items = componentData.navigationItems.map(
            (data): NavigationItems => {
                return {
                    navigationId: data.navigationId,
                    title: data.title,
                };
            }
        );

        return {
            items,
        };
    },
};
