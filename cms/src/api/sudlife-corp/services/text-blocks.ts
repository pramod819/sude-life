import { Title } from '../../../../types/custom/common-type';

/**
 * text-blocks service
 */
interface ComponentResponse {
    title: Title;
    textBlockTitle: string;
    importantPoints: string;
    importantPointHeading: string;
    textBlocks: TextBlockData;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface TextBlockData {
    title: string;
    description: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c48').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                blockTitle: { populate: true },
                textBlocks: { populate: true },
                importantPoints: { populate: true },
                importantPointHeading: { populate: true },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const textBlocks = componentData.textBlocks.map(
            (data): TextBlockData => {
                return {
                    title: data.title,
                    description: data.description,
                };
            }
        );

        return {
            title: titleData,
            textBlockTitle: componentData.blockTitle,
            importantPoints: componentData.importantPoints,
            importantPointHeading: componentData.importantPointHeading,
            textBlocks,
        };
    },
};
