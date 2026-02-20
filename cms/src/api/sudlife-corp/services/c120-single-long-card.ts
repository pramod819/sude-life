/**
 * [C120] - Single Long card
 */
import { Cta } from '../../../../types/custom/common-type';
import { MediaImage } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

interface SingleLongCardResponse {
    title: Title;
    backgroundImage: MediaImage;
    cta: Cta;
}

interface SingleLongCardRequest {
    __component: string;
    id: number;
}

export default {
    renderComponent: async (
        component: SingleLongCardRequest,
        id: number,
        params: object
    ): Promise<SingleLongCardResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.c120-single-long-card')
            .findOne({
                where: { id: component.id },
                populate: {
                    Title: { populate: true },
                    cta: { populate: true },
                    BackgroundImage: {
                        populate: true,
                    },
                },
            });
        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.Title);

        const backgroundImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.BackgroundImage);

        const cta = strapi
            .service('api::content.field-render')
            .getCta(componentData.cta);

        return {
            title: titleData,
            backgroundImage: backgroundImage,
            cta: cta,
        };
    },
};
