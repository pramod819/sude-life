/**
 * text-with-icon service
 */
import {
    MediaImage,
    Title,
    ImageData,
} from '../../../../types/custom/common-type';

interface TextWithIconResponse {
    title: Title;
    backgroundColor: string;
    backgroundImage: MediaImage;
    disclaimerText: string;
    iconWithText: IconWithTextData;
}

interface TextWithIconRequest {
    __component: string;
    id: number;
    title: Title;
}

interface IconWithTextData {
    title: string;
    description: string;
    icon: ImageData;
}

export default {
    renderComponent: async (
        component: TextWithIconRequest,
        id: number,
        params: object
    ): Promise<TextWithIconResponse> => {
        const componentData = await strapi.query('corp-dynamic.c26').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                backgroundImage: { populate: true },
                iconList: { populate: true },
            },
        });
        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.titleTags);

        const bgImage: MediaImage = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.backgroundImage);

        const iconWithTextInfo = componentData.iconList.map(
            (data): IconWithTextData => {
                const imageData = strapi
                    .service('api::content.field-render')
                    .getImage(data.icon);
                return {
                    title: data.title,
                    description: data.description,
                    icon: imageData,
                };
            }
        );

        return {
            title: titleData,
            backgroundColor: componentData.backgroundColor,
            disclaimerText: componentData.disclaimerText,
            backgroundImage: bgImage,
            iconWithText: iconWithTextInfo,
        };
    },
};
