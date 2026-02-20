import { Title, MediaType } from '../../../../types/custom/common-type';

/**
 * image-gallery service
 */
interface ComponentResponse {
    title: Title;
    variation: string;
    imageGallery: ImageGallery[];
    navigationId: string;
}

interface ImageGallery {
    tag: string;
    data: MediaType[];
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
        const componentData = await strapi.query('corp-dynamic.c89').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                tag: { populate: true },
            },
        });

        const imageGallery = [];

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        let tags = [];

        if (componentData.variation === 'careers_page') {
            tags = componentData.tag ? [componentData.tag] : [];
        } else {
            tags = await strapi
                .service('api::content.image-gallery')
                .getImageGalleryTags();
        }

        for (const [index, tag] of tags.entries()) {
            const data = await strapi
                .service('api::content.image-gallery')
                .getImageGalleryByTag(tag.name);

            if (data.length > 0) {
                imageGallery[index] = {
                    tag: tag.name,
                    data,
                };
            }
        }

        return {
            title: titleData,
            variation: componentData.variation ?? 'default',
            imageGallery,
            navigationId: componentData.navigationId,
        };
    },
};
