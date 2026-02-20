/**
 * [C91] - Columns with Icons and CTA service
 */
import { ImageData } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';
import { Cta } from '../../../../types/custom/common-type';

interface CardWithIconResponse {
    title: Title;
    description: string;
    cardDetails: CardWithIconData;
}

interface CardWithIconRequest {
    __component: string;
    id: number;
    title: Title;
}

interface CardWithIconData {
    title: string;
    description: string;
    icon: ImageData;
    cta: Cta;
}

export default {
    renderComponent: async (
        component: CardWithIconRequest,
        id: number,
        params: object
    ): Promise<CardWithIconResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.c91-columns-with-icons-and-cta')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    description: { populate: true },
                    cardWithIcon: {
                        populate: {
                            description: { populate: true },
                            icon: { populate: true },
                            title: { populate: true },
                            cta: { populate: true },
                        },
                    },
                },
            });
        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const cardData = componentData.cardWithIcon.map(
            (data): CardWithIconData => {
                const icon = strapi
                    .service('api::content.field-render')
                    .getImage(data.icon);

                const cta = strapi
                    .service('api::content.field-render')
                    .getCtas(data.cta);

                return {
                    title: data.title,
                    description: data.description,
                    icon,
                    cta,
                };
            }
        );

        return {
            title: titleData,
            description: componentData.description,
            cardDetails: cardData,
        };
    },
};
