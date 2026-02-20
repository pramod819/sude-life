import {
    Title,
    ImageData,
    ProductResponse,
} from '../../../../types/custom/common-type';

/**
 * product-cards service
 */
interface ComponentResponse {
    title: Title;
    subtitle: string;
    products: ProductResponse[];
    blockTitle: string;
    bulletPoints: string[];
    disclaimerText: string;
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
        const componentData = await strapi.query('corp-dynamic.c65').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                subtitle: { populate: true },
                products: {
                    populate: {
                        features: { populate: true },
                        thumbnail: { populate: true },
                    },
                },
                blockTitle: { populate: true },
                bulletPoints: { populate: true },
                disclaimerText: { populate: true },
            },
        });

        const title = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const products = componentData.products.map((data): ProductResponse => {
            const product = strapi
                .service('api::content.plan')
                .formatProduct(data);

            return product;
        });

        const bulletPoints = componentData.bulletPoints.map(
            (data): string[] => {
                return data.text;
            }
        );

        return {
            title,
            subtitle: componentData.subtitle,
            products,
            blockTitle: componentData.blockTitle,
            bulletPoints,
            disclaimerText: componentData.disclaimerText,
        };
    },
};
