import { Title, ImageData } from '../../../../types/custom/common-type';

/**
 * key-reasons service
 */
interface ComponentResponse {
    title: Title;
    keyReasons: KeyReasonsData;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface KeyReasonsData {
    icon: ImageData;
    description: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c30').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                keyReasons: { populate: true },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const keyReasons = componentData.keyReasons.map(
            (data): KeyReasonsData => {
                const icon = strapi
                    .service('api::content.field-render')
                    .getImage(data.icon);

                return {
                    icon,
                    description: data.description,
                };
            }
        );

        return {
            title: titleData,
            keyReasons,
        };
    },
};
