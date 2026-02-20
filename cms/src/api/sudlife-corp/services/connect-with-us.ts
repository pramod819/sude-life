import { Cta } from '../../../../types/custom/common-type';
import { MediaImage } from '../../../../types/custom/common-type';
import { ImageData } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

/**
 * connect-with-us service
 */
interface ConnectWithUsResponse {
    title: Title;
    cta: Cta;
    image: MediaImage;
    minicard: ConnectWithUsData;
    officeTitle: string;
    officeSubTitle: string;
    officeAddress: string;
    officeWorkHour: string;
}

interface ConnectWithUsRequest {
    __component: string;
    id: number;
    title: Title;
}

interface ConnectWithUsData {
    title: string;
    description: string;
    iconImage: ImageData;
}

export default {
    renderComponent: async (
        component: ConnectWithUsRequest,
        id: number,
        params: object
    ): Promise<ConnectWithUsResponse> => {
        const componentData = await strapi.query('corp-dynamic.c8').findOne({
            where: { id: component.id },
            populate: {
                image: { populate: true },
                cta: { populate: true },
                minicard: { populate: true },
                title: { populate: true },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const image: MediaImage = componentData.image
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.image)
            : null;

        const cta = componentData.cta
            ? strapi
                  .service('api::content.field-render')
                  .getCtas(componentData.cta)
            : null;

        const connectWithUsData = componentData.minicard.map(
            (data): ConnectWithUsData => {
                const imageData = strapi
                    .service('api::content.field-render')
                    .getImage(data.iconImage);

                return {
                    title: data.title,
                    description: data.description,
                    iconImage: imageData,
                };
            }
        );

        return {
            title: titleData,
            image: image,
            cta: cta,
            minicard: connectWithUsData,
            officeTitle: componentData.officeTitle,
            officeSubTitle: componentData.officeSubTitle,
            officeAddress: componentData.officeAddress,
            officeWorkHour: componentData.officeWorkHour,
        };
    },
};
