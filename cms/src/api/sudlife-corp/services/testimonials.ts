import {
    Cta,
    AuthorResponse,
    MediaImage,
    ImageData,
} from '../../../../types/custom/common-type';

/**
 * str service
 */
interface TestimonialsResponse {
    title: string;
    subtitle: string;
    cta: Cta;
    authors: AuthorResponse[];
    backgroundImage: MediaImage;
    quoteImage: ImageData;
    bgColor: string;
    navigationId: string;
    transparentText: string;
}

interface TestimonialsRequest {
    __component: string;
    id: number;
    title: string;
    subtitle: string;
}
export default {
    renderComponent: async (
        component: TestimonialsRequest,
        id: number,
        params: object
    ): Promise<TestimonialsResponse> => {
        const componentData = await strapi.query('corp-dynamic.c5').findOne({
            where: { id: component.id },
            populate: {
                cta: { populate: true },
                authors: { populate: true },
                backgroundImage: { populate: true },
                quoteImage: { populate: true },
            },
        });

        const cta = componentData.cta
            ? strapi
                  .service('api::content.field-render')
                  .getCta(componentData.cta)
            : null;

        const backgroundImage = componentData.backgroundImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.backgroundImage)
            : null;

        const quoteImage = componentData.quoteImage
            ? strapi
                  .service('api::content.field-render')
                  .getImage(componentData.quoteImage)
            : null;

        const authors = strapi
            .service('api::content.author')
            .getAuthors(componentData.authors);

        return {
            subtitle: component.subtitle,
            title: component.title,
            cta: cta,
            authors: authors,
            backgroundImage,
            bgColor: componentData.bgColor,
            quoteImage,
            navigationId: componentData.navigationId,
            transparentText: componentData.transparentText,
        };
    },
};
