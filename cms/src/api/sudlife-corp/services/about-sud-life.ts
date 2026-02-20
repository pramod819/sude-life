import { Title, MediaImage, Cta } from '../../../../types/custom/common-type';

/**
 * about-sud-life service
 */
interface ComponentResponse {
    title: Title;
    description: string;
    image: MediaImage;
    items: ItemData;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
    description: string;
    image: MediaImage;
    items: ItemData;
}

interface ItemData {
    title: string;
    description: string;
    cta: Cta;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c37').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                description: { populate: true },
                image: { populate: true },
                items: { populate: true },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const image: MediaImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.image);

        const items = componentData.items.map((data): ItemData => {
            const cta = strapi
                .service('api::content.field-render')
                .getCta(data.cta);

            return {
                title: data.title,
                description: data.description,
                cta,
            };
        });

        return {
            title: titleData,
            description: componentData.description,
            image,
            items,
        };
    },
};
