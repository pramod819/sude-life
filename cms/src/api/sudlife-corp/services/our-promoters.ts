import { Title, ImageData, Cta } from '../../../../types/custom/common-type';

/**
 * our-component service
 */
interface ComponentResponse {
    title: Title;
    promoters: PromotersData;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface PromotersData {
    title: string;
    description: string;
    logo: ImageData;
    cta: Cta;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c39').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                promoters: { populate: true },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const promoters = componentData.promoters.map((data): PromotersData => {
            const logo = strapi
                .service('api::content.field-render')
                .getImage(data.logo);

            const cta = strapi
                .service('api::content.field-render')
                .getCta(data.cta);

            return {
                title: data.title,
                description: data.description,
                logo,
                cta,
            };
        });

        return {
            title: titleData,
            promoters,
        };
    },
};
