import { Cta } from '../../../../types/custom/common-type';
import { MediaImage } from '../../../../types/custom/common-type';
import { ImageData } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

/**
 * icon-and-text service
 */
interface IconAndTextResponse {
    title: Title;
    cta: Cta;
    icon: IconAndTextData;
    backgroundImage: MediaImage;
}

interface IconAndTextRequest {
    __component: string;
    id: number;
    title: string;
    titleTag: string;
}

interface IconAndTextData {
    title: Title;
    subTitle: string;
    description: string;
    iconImage: ImageData;
}

export default {
    renderComponent: async (
        component: IconAndTextRequest,
        id: number,
        params: object
    ): Promise<IconAndTextResponse> => {
        const componentData = await strapi.query('corp-dynamic.c7').findOne({
            where: { id: component.id },
            populate: {
                cta: { populate: true },
                icon: { populate: true },
                backgroundImage: { populate: true },
                titleTags: { populate: true },
            },
        });

        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const cta = componentData.cta
            ? strapi
                  .service('api::content.field-render')
                  .getCtas(componentData.cta)
            : null;

        const iconAndTextData = componentData.icon.map(
            (data): IconAndTextData => {
                const imageData = data.IconImage
                    ? strapi
                          .service('api::content.field-render')
                          .getImage(data.IconImage)
                    : null;

                return {
                    title: data.title,
                    subTitle: data.subTitle,
                    description: data.description,
                    iconImage: imageData,
                };
            }
        );

        const backgroundImage: MediaImage = componentData.backgroundImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.backgroundImage)
            : null;

        return {
            cta: cta,
            icon: iconAndTextData,
            backgroundImage: backgroundImage,
            title: titleData,
        };
    },
};
