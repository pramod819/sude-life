import { Title, ImageData } from '../../../../types/custom/common-type';

/**
 * logo-component service
 */
interface ComponentResponse {
    title: Title;
    logos: LogosData;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface LogosData {
    logo: ImageData;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c38').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                logos: { populate: true },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const logos = componentData.logos.map((data): LogosData => {
            const logo = strapi
                .service('api::content.field-render')
                .getImage(data.logo);

            return {
                logo,
            };
        });

        return {
            title: titleData,
            logos,
        };
    },
};
