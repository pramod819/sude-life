import { MediaImage } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

/**
 * card-slider service
 */

interface ComponentResponse {
    title: Title;
    backgroundImage: MediaImage;
    card: CardResponse;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface BulletPointResponse {
    title: string;
}

interface CardResponse {
    title: string;
    subTitle: string;
    image: MediaImage;
    bulletPoint: BulletPointResponse[];
    description: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c22').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                bgImage: { populate: true },
                card: {
                    populate: {
                        title: { populate: true },
                        subTitle: { populate: true },
                        image: { populate: true },
                        bulletPoint: { populate: true },
                        description: { populate: true },
                    },
                },
            },
        });

        const title = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        let backgroundImage: MediaImage;
        if (componentData.bgImage !== null) {
            backgroundImage = strapi
                .service('api::content.field-render')
                .getMediaImage(componentData.bgImage);
        }

        let card: CardResponse;
        if (componentData.card.length > 0) {
            card = componentData.card.map((data): CardResponse => {
                const image = strapi
                    .service('api::content.field-render')
                    .getMediaImage(data.image);

                const bulletPoint = strapi
                    .service('api::content.field-render')
                    .getListText(data.bulletPoint);

                return {
                    title: data.title,
                    subTitle: data.subTitle,
                    description: data.description,
                    image,
                    bulletPoint,
                };
            });
        }

        return {
            title,
            backgroundImage,
            card,
        };
    },
};
