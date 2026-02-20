import { MediaImage } from '../../../../types/custom/common-type';

/**
 * steps-to-buy-online service
 */
interface ComponentResponse {
    tabs: TabsData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface TabsData {
    tabText: string;
    title: string;
    description: string;
    image: MediaImage;
    pointerTitle: string;
    points: string[];
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c87').findOne({
            where: { id: component.id },
            populate: {
                tabs: {
                    populate: {
                        tabText: { populate: true },
                        title: { populate: true },
                        description: { populate: true },
                        image: { populate: true },
                        pointerTitle: { populate: true },
                        points: { populate: true },
                    },
                },
            },
        });
        const tabs = componentData.tabs.map((data): TabsData => {
            const image: MediaImage = strapi
                .service('api::content.field-render')
                .getMediaImage(data.image);
            const points = data.points.map((data1): string => {
                return data1.text;
            });
            return {
                tabText: data.tabText,
                title: data.title,
                description: data.description,
                image,
                pointerTitle: data.pointerTitle,
                points,
            };
        });

        return {
            tabs,
        };
    },
};
