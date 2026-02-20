import { Title, MediaImage } from '../../../../types/custom/common-type';

/**
 * accordion-with-image service
 */

interface ComponentResponse {
    title: Title;
    image: MediaImage;
    type: string;
    accordion: AccordionData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface AccordionData {
    title: string;
    description: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c74').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                image: { populate: true },
                accordion: { populate: true },
            },
        });

        const title = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const image = componentData.image
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.image)
            : null;

        const accordion = componentData.accordion.map((data): AccordionData => {
            const description = data.description
                ? strapi
                      .service('api::content.field-render')
                      .getDescriptionText(data.description)
                : null;

            return {
                title: data.title,
                description,
            };
        });

        return {
            title,
            image,
            type: componentData.type,
            accordion,
        };
    },
};
