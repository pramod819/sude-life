import { Title, MediaImage } from '../../../../types/custom/common-type';

/**
 * center-text-image service
 */
interface ComponentResponse {
    title: Title;
    subTitle: string;
    description: string;
    bgColour: string;
    bgImage: MediaImage;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
    subTitle: string;
    description: string;
    bgColour: string;
    bgImage: MediaImage;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c71').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                subTitle: { populate: true },
                description: { populate: true },
                bgColour: { populate: true },
                bgImage: { populate: true },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const bgImage: MediaImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.bgImage);

        return {
            title: titleData,
            subTitle: componentData.subTitle,
            description: componentData.description,
            bgColour: componentData.bgColour,
            bgImage,
        };
    },
};
