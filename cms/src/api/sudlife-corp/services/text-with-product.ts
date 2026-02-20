import { Title, ProductResponse } from '../../../../types/custom/common-type';

/**
 * product-cards service
 */
interface ComponentResponse {
    title: Title;
    subtitle: string;
    disclaimer: string;
    product: ProductResponse;
    secondProduct: ProductResponse;
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
        const componentData = await strapi.query('corp-dynamic.c75').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                subTitle: { populate: true },
                disclaimer: { populate: true },
                product: {
                    populate: {
                        features: { populate: true },
                        thumbnail: { populate: true },
                    },
                },
                secondProduct: {
                    populate: {
                        features: { populate: true },
                        thumbnail: { populate: true },
                    },
                },
            },
        });

        const title = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const product = componentData.product
            ? strapi
                  .service('api::content.plan')
                  .formatProduct(componentData.product)
            : {};

        const secondProduct = componentData.secondProduct
            ? strapi
                  .service('api::content.plan')
                  .formatProduct(componentData.secondProduct)
            : {};

        return {
            title,
            subtitle: componentData.subTitle,
            disclaimer: componentData.disclaimer,
            product,
            secondProduct,
        };
    },
};
