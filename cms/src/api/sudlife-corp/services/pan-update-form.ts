import {
    Title,
    MediaImage,
    LabelPack,
} from '../../../../types/custom/common-type';

/**
 * pan-update-form service
 */
interface ComponentResponse {
    title: Title;
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
            .query('corp-dynamic.form-panupdate')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    label_pack: { populate: true },
                },
            });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.label_pack);

        return {
            title: titleData,
            labelPack,
        };
    },
};
