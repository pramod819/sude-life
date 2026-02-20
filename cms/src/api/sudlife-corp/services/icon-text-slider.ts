import { ImageData } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

/**
 * icon-text-slider service
 */
interface IconTextSliderResponse {
    title: Title;
    card: CardData;
    disclaimer: string;
}

interface IconTextSliderRequest {
    __component: string;
    id: number;
}

interface CardData {
    icon: ImageData;
    title: Title;
    description: string;
}

export default {
    renderComponent: async (
        component: IconTextSliderRequest,
        id: number,
        params: object
    ): Promise<IconTextSliderResponse> => {
        const componentData = await strapi.query('corp-dynamic.c25').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                card: {
                    populate: {
                        icon: { populate: true },
                        title: { populate: true },
                        description: { populate: true },
                    },
                },
                disclaimer: { populate: true },
            },
        });

        const title = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const card = componentData.card.map((data): CardData => {
            const icon = strapi
                .service('api::content.field-render')
                .getImage(data.icon);

            return {
                icon,
                title: data.title,
                description: data.description,
            };
        });

        return {
            title,
            card,
            disclaimer: componentData.disclaimer,
        };
    },
};
