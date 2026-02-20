import { Title, ImageData } from '../../../../types/custom/common-type';

/**
 * image-text-with-pointers service
 */
interface ComponentResponse {
    title: Title;
    type: string;
    image: string;
    points: PointsData;
    description: string;
    descriptionWithPoints: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface PointsData {
    title: string;
    description: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c46').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                type: { populate: true },
                image: { populate: true },
                points: { populate: true },
                description: { populate: true },
                descriptionWithPoints: { populate: true },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const image = strapi
            .service('api::content.field-render')
            .getImage(componentData.image);

        const points = componentData.points.map((data): PointsData => {
            return {
                title: data.title,
                description: data.shortDescription,
            };
        });

        return {
            title: titleData,
            type: componentData.type,
            image,
            points,
            description: componentData.description,
            descriptionWithPoints: componentData.descriptionWithPoints,
        };
    },
};
