import { Cta } from '../../../../types/custom/common-type';
import { MediaImage } from '../../../../types/custom/common-type';
import { ImageData } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

/**
 * text-and-image service
 */

interface TextAndImageResponse {
    title: Title;
    subtitle: string;
    subtitleBold: boolean;
    description: string;
    navigationButton: NavigationButton;
    button: Cta;
    cta: Cta;
    image: MediaImage;
    ad_text: AdvisoryTextdata;
    icons: ImageData;
    navigationId: string;
}

interface TextAndImageRequest {
    __component: string;
    id: number;
    subtitle: string;
}

interface AdvisoryTextdata {
    text: string;
}

interface NavigationButton {
    title: string;
    navigationId: string;
}

export default {
    renderComponent: async (
        component: TextAndImageRequest,
        id: number,
        params: object
    ): Promise<TextAndImageResponse> => {
        const componentData = await strapi.query('corp-dynamic.c15').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                navigationButton: { populate: true },
                button: { populate: true },
                cta: { populate: true },
                image: { populate: true },
                ad_text: { populate: true },
                icons: { populate: true },
            },
        });
        const icons: ImageData = componentData.icons
            ? strapi
                  .service('api::content.field-render')
                  .getImages(componentData.icons)
            : null;

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitles(componentData.title)
            : null;

        const advisoryTextdata = componentData.ad_text.map(
            (data): AdvisoryTextdata => {
                return {
                    text: data.text,
                };
            }
        );

        const navigationButton = componentData.navigationButton
            ? {
                  title: componentData.navigationButton?.title,
                  navigationId: componentData.navigationButton?.navigationId,
              }
            : null;

        const button = componentData.button
            ? strapi
                  .service('api::content.field-render')
                  .getCta(componentData.button)
            : null;

        const cta = componentData.cta
            ? strapi
                  .service('api::content.field-render')
                  .getCtas(componentData.cta)
            : null;

        const image: MediaImage = componentData.image
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.image)
            : null;

        return {
            title: titleData,
            subtitle: componentData.subtitle,
            subtitleBold: componentData.boldSubtitleText,
            description: componentData.description,
            navigationButton,
            button,
            cta,
            image,
            ad_text: advisoryTextdata,
            icons,
            navigationId: componentData.navigationId,
        };
    },
};
