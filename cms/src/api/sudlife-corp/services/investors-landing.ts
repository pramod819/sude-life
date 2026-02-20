import {
    Title,
    LabelPack,
    InvestorCategoryResponse,
} from '../../../../types/custom/common-type';

/**
 * investors-landing service
 */
interface ComponentResponse {
    titleTags: Title;
    subTitle: string;
    labelPack: LabelPack[];
    investorCategory: InvestorCategoryResponse[];
    documentYear: string[];
    quarter: string[];
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c66').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                labelPack: { populate: true },
            },
        });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.titleTags);

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        const investorCategory = await strapi
            .service('api::content.investors-landing')
            .getInvestorCategory();

        const documentYear = await strapi
            .service('api::content.investors-landing')
            .getDocumnetYear();

        const quarter = ['quarter1', 'quarter2', 'quarter3', 'quarter4'];

        return {
            titleTags: titleData,
            subTitle: componentData.subTitle,
            labelPack,
            investorCategory,
            documentYear,
            quarter,
        };
    },
};
