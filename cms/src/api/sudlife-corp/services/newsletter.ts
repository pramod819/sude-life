import { MediaImage } from '../../../../types/custom/common-type';

/**
 * newsletter service
 */
interface ComponentResponse {
    title: string;
    subtitle: string;
    bgColour: string;
    bgImage: MediaImage;
    inputPlaceholder: string;
    btnText: string;
    successMessage: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.newsletter')
            .findOne({
                where: { id: component.id },
                populate: {
                    bgImage: { populate: true },
                },
            });

        const bgImage = componentData.bgImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgImage)
            : null;

        return {
            title: componentData.title,
            subtitle: componentData.subtitle,
            bgColour: componentData.bgColour,
            bgImage,
            inputPlaceholder: componentData.inputPlaceholder,
            btnText: componentData.btnText,
            successMessage: componentData.successMessage ?? '',
        };
    },
};
