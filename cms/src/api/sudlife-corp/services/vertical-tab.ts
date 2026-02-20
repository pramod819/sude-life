import { Title } from '../../../../types/custom/common-type';
import { ImageData } from '../../../../types/custom/common-type';

/**
 * vertical-tab service
 */

interface VerticalTabResponse {
    title: Title;
    description: string;
    tabs: TabData;
    bottomText: string;
}

interface VerticalTabRequest {
    __component: string;
    id: number;
    title: Title;
    description: string;
    tabs: TabData;
}

interface TabData {
    title: string;
    description: string;
    image: ImageData;
    isImage: boolean;
}

export default {
    renderComponent: async (
        component: VerticalTabRequest,
        id: number,
        params: object
    ): Promise<VerticalTabResponse> => {
        const componentData = await strapi.query('corp-dynamic.c19').findOne({
            where: { id: component.id },
            populate: {
                tabs: {
                    populate: {
                        title: {
                            populate: true,
                        },
                        description: {
                            populate: true,
                        },
                        image: {
                            populate: true,
                        },
                        isImage: {
                            populate: true,
                        },
                    },
                },
                title: { populate: true },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const tabData = componentData.tabs.map((data): TabData => {
            const imageData = data.image
                ? strapi
                      .service('api::content.field-render')
                      .getImage(data.image)
                : null;

            return {
                title: data.title,
                description: data.description,
                image: imageData,
                isImage: data.isImage,
            };
        });

        return {
            title: titleData,
            description: component.description,
            tabs: tabData,
            bottomText: componentData.bottomText,
        };
    },
};
