import { Title, ImageData } from '../../../../types/custom/common-type';

/**
 * plan-features service
 */
interface ComponentResponse {
    title: Title;
    subtitle: string;
    backgroundColour: string;
    feature: FeaturesCardData;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
    subtitle: string;
}

interface FeaturesCardData {
    firstColumn: FeaturesItemResponse;
    secondColumn: FeaturesItemResponse;
}

interface FeaturesItemRequest {
    id: number;
    title: string;
    description: string;
    icon: ImageData;
    bulletPoints: BulletPointsResponse[];
}

interface FeaturesItemResponse {
    title: string;
    description: string;
    icon: ImageData;
    bulletPoints: string[];
}

interface BulletPointsResponse {
    id: number;
    bulletPoint: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c27').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                bgColour: { populate: true },
                feature: {
                    populate: {
                        firstColumn: { populate: true },
                        secondColumn: { populate: true },
                    },
                },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const feature = componentData.feature.map((data): FeaturesCardData => {
            const firstColumn = strapi
                .service('api::sudlife-corp.plan-features')
                .getItems(data.firstColumn);

            const secondColumn = strapi
                .service('api::sudlife-corp.plan-features')
                .getItems(data.secondColumn);

            return {
                firstColumn,
                secondColumn,
            };
        });

        return {
            title: titleData,
            subtitle: componentData.subtitle,
            backgroundColour: componentData.bgColour,
            feature,
        };
    },
    getItem: (data: FeaturesItemRequest): FeaturesItemResponse => {
        const icon = strapi
            .service('api::content.field-render')
            .getImage(data.icon);

        const bulletPoints = data.bulletPoints.map((point): string => {
            return point.bulletPoint;
        });

        return {
            title: data.title,
            description: data.description,
            icon,
            bulletPoints,
        };
    },
    getItems: (columnData: FeaturesItemRequest[]): FeaturesItemResponse[] => {
        return columnData.map(
            (item: FeaturesItemRequest): FeaturesItemResponse => {
                return strapi
                    .service('api::sudlife-corp.plan-features')
                    .getItem(item);
            }
        );
    },
};
