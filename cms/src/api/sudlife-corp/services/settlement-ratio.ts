/**
 * [C128] - Settlement Ratio service
 */
import { Title } from '../../../../types/custom/common-type';

interface SettlementResponse {
    title: Title;
    description: string;
    fyRatios: FYRatio;
}

interface SettlementRequest {
    __component: string;
    id: number;
    title: Title;
}

interface FYRatio {
    fy: string;
    value: string;
}

export default {
    renderComponent: async (
        component: SettlementRequest,
        id: number,
        params: object
    ): Promise<SettlementResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.c128-settlement-ratio')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    description: { populate: true },
                    years: {
                        populate: {
                            FY: { populate: true },
                            value: { populate: true },
                        },
                    },
                },
            });
        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const fYears = componentData.years.map((data): FYRatio => {
            return {
                fy: data.FY,
                value: data.value,
            };
        });

        return {
            title: titleData,
            description: componentData.description,
            fyRatios: fYears,
        };
    },
};
