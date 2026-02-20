import {
    Title,
    MediaImage,
    LabelPack,
} from '../../../../types/custom/common-type';

/**
 * dnd service
 */
interface ComponentResponse {
    title: Title;
    shortDescription: string;
    bgImage: MediaImage;
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
        const componentData = await strapi.query('corp-dynamic.dnd').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                shortDescription: { populate: true },
                bgImage: { populate: true },
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
            shortDescription: componentData.shortDescription,
            bgImage,
            formTitle: componentData.formTitle,
            labelPack,
        };
    },
};
