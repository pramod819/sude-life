/**
 * card-with-icon service
 */
import { MediaImage } from '../../../../types/custom/common-type';
import { ImageData } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';
import { Cta } from '../../../../types/custom/common-type';

interface CardWithIconResponse {
    title: Title;
    subTitle: string;
    show4inarow: boolean;
    backgroundImage: MediaImage;
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
        const componentData = await strapi.query('corp-dynamic.c57').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                backgroundImage: { populate: true },
                Show_4: { populate: true },
                subTitle: { populate: true },
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
            .getTitle(componentData.titleTags);

        const imageData = componentData.backgroundImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.backgroundImage)
            : null;
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
            backgroundImage: imageData,
            subTitle: componentData.subTitle,
            show4inarow: componentData.Show_4,
            cardDetails: cardData,
        };
    },
};
