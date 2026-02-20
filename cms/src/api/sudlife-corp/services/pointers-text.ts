import { Title } from '../../../../types/custom/common-type';

/**
 * pointers-text service
 */
interface ComponentResponse {
    title: Title;
    subTitle: string;
    texts: string[];
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
        const componentData = await strapi.query('corp-dynamic.c72').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                subTitle: { populate: true },
                texts: { populate: true },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const texts = componentData.texts.map((data): string => {
            return data.text;
        });

        return {
            title: titleData,
            subTitle: componentData.subTitle,
            texts,
        };
    },
};
