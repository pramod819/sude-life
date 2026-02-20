import {
    Title,
    MediaImage,
    LabelPack,
} from '../../../../types/custom/common-type';

/**
 * product-form service
 */
interface ComponentResponse {
    title: Title;
    subTitle: string;
    shortDescription: string;
    bgImage: MediaImage;
    pointers: string[];
    product: Product;
    formTitle: string;
    labelPack: LabelPack[];
    disclaimer: string[];
    disableBlopRedirection: boolean;
    disableCcLeads: boolean;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface Product {
    productId: string;
    name: string;
    soldOffline: boolean;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.product-form')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    subTitle: { populate: true },
                    shortDescription: { populate: true },
                    bgImage: { populate: true },
                    pointers: { populate: true },
                    product: { populate: true },
                    formTitle: { populate: true },
                    labelPack: { populate: true },
                    disclaimer: { populate: true },
                },
            });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const bgImage = componentData.bgImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgImage)
            : null;

        const pointers = componentData.pointers.map((data): string => {
            return data.text;
        });

        const productId = componentData.product
            ? componentData.product.productId
            : '';

        const product = componentData.product
            ? {
                  name: componentData.product.title,
                  productId: productId,
                  soldOffline: componentData.product.soldOffline ?? false,
              }
            : null;

        const labelPack = componentData.labelPack
            ? strapi
                  .service('api::content.field-render')
                  .getLabelPacks(componentData.labelPack)
            : null;

        const disclaimer = componentData.disclaimer.map((data): string => {
            return data.text;
        });

        return {
            title: titleData,
            subTitle: componentData.subTitle,
            shortDescription: componentData.shortDescription,
            bgImage,
            pointers,
            product,
            formTitle: componentData.formTitle,
            labelPack,
            disclaimer,
            disableBlopRedirection:
                componentData.disableBlopRedirection ?? false,
            disableCcLeads: componentData.disableCcLeads ?? false,
        };
    },
};
