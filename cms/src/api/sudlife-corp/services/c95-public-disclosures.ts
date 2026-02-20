/**
 * [C93] - Cards with icon & text service
 */
import { ImageData } from '../../../../types/custom/common-type';
import { Title } from '../../../../types/custom/common-type';

interface CardWithIconResponse {
    title: Title;
    cardDetails: string[];
}

interface CardWithIconRequest {
    __component: string;
    id: number;
    title: Title;
}

interface CardWithIconData {
    title: string;
    financial_year: string[];
    uncliamed: string[];
    governance: string[];
}

const getCollection = async (item) => {
    const result = await strapi
        .service('api::content.public-disclosures-view')
        .getPublicdisclosures({ type: item.type });
};

export default {
    renderComponent: async (
        component: CardWithIconRequest,
        id: number,
        params: object
    ): Promise<CardWithIconResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.c95-public-disclosures')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    tabs: {
                        populate: {
                            financial_year: { populate: true },
                            uncliamed: {
                                populate: {
                                    title: { populate: true },
                                    disclaimer: { populate: true },
                                    list: { populate: true },
                                    documents: { populate: true },
                                },
                            },
                            title: { populate: true },
                            governance: {
                                populate: {
                                    title: { populate: true },
                                    documents: { populate: true },
                                },
                            },
                        },
                    },
                },
            });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const results = await Promise.all(
            componentData.tabs.map(async (data) => {
                const uncliamed = data.uncliamed ? await data.uncliamed : null;

                const governance = data.governance
                    ? await strapi
                          .service('api::content.public-disclosures-view')
                          .getGovernanceData(data.governance)
                    : null;

                let financialYear = data.financial_year
                    ? data.financial_year
                    : null;
                if (financialYear != null) {
                    const fy = await strapi
                        .service('api::content.public-disclosures-view')
                        .getPublicdisclosures({ type: financialYear.type });
                    financialYear = fy;
                }
                return {
                    title: data.title,
                    financial_year: financialYear,
                    uncliamed,
                    governance,
                };
            })
        );

        return {
            title: titleData,
            cardDetails: results,
        };
    },
};
