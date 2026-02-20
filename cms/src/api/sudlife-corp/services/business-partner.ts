import {
    Title,
    MediaImage,
    LabelPack,
} from '../../../../types/custom/common-type';

/**
 * business-partner service
 */
interface ComponentResponse {
    title: Title;
    subTitle: string;
    bgImage: MediaImage;
    disclaimer: string;
    formTitle: string;
    labelPack: LabelPack[];
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.business-partner')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    subTitle: { populate: true },
                    bgImage: { populate: true },
                    disclaimer: { populate: true },
                    formTitle: { populate: true },
                    labelPack: { populate: true },
                },
            });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const bgImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.bgImage);

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        return {
            title: titleData,
            subTitle: componentData.subTitle,
            bgImage,
            disclaimer: componentData.disclaimer,
            formTitle: componentData.formTitle,
            labelPack,
        };
    },
};
