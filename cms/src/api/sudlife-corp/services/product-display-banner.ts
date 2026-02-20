import {
    Title,
    MediaImage,
    ProductResponse,
} from '../../../../types/custom/common-type';

/**
 * product-display-banner service
 */
interface ComponentResponse {
    backgroundImage: MediaImage;
    title: Title;
    subtitle: string;
    products: ProductResponse[];
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
        const componentData = await strapi.query('corp-dynamic.c73').findOne({
            where: { id: component.id },
            populate: {
                bgImage: { populate: true },
                title: { populate: true },
                subtitle: { populate: true },
                products: {
                    populate: {
                        features: { populate: true },
                        thumbnail: { populate: true },
                    },
                },
            },
        });

        const backgroundImage = componentData.bgImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgImage)
            : null;

        const products = componentData.products.map((data): ProductResponse => {
            const product = strapi
                .service('api::content.plan')
                .formatProduct(data);

            return product;
        });

        return {
            backgroundImage,
            title: componentData.title,
            subtitle: componentData.subTitle,
            products,
        };
    },
};
