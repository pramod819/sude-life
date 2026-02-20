import {
    Title,
    BlogResponse,
    LabelPack,
} from '../../../../types/custom/common-type';

/**
 * Fund Nav filter service
 */
interface ComponentResponse {
    title: Title;
    fundNames: string[];
    fundNavDetails: string[];
    labelPack: LabelPack[];
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

const getNav = async (id, type) => {
    const maxNavRecord = await strapi.db
        .query('api::fund-nav.fund-nav')
        .findMany({
            where: {
                fund: id,
            },
            orderBy: { nav: type },
            limit: 1,
        });

    const NAV = maxNavRecord.length > 0 ? maxNavRecord[0].nav : null;
    const date = maxNavRecord.length > 0 ? maxNavRecord[0].date : null;
    return { nav: NAV, date: date };
};

const getLatestDate = async (type, order1) => {
    const maxNavRecord = await strapi.db
        .query('api::fund-nav.fund-nav')
        .findMany({
            where: {
                fund: {
                    type: type,
                },
            },
            orderBy: { date: order1 },
            limit: 1,
        });

    const date = maxNavRecord.length > 0 ? maxNavRecord[0].date : null;
    return date;
};

const getFilePath = async (data) => {
    const filePath = strapi
        .service('api::content.field-render')
        .getPdfPath(data.pdf);

    return {
        file_path: filePath,
    };
};

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.c105-fund-nav')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    type: { populate: true },
                    displayCategory: { populate: true },
                    labelPack: { populate: true },
                },
            });

        const fundName = [];

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        if (componentData.displayCategory) {
            const fundCategories = await strapi
                .query('api::fund.fund')
                .findMany({
                    where: {
                        type: componentData.type,
                    },
                    populate: {
                        icon: true,
                    },
                });

            for (const fund of fundCategories) {
                fundName.push({
                    id: fund.id,
                    name: fund.display_name,
                });
            }
        }
        const today = await getLatestDate(componentData.type, 'desc');

        const fundNavDetails = await strapi
            .query('api::fund-nav.fund-nav')
            .findMany({
                where: {
                    date: today,
                    fund: {
                        type: componentData.type,
                    },
                },
                populate: {
                    title: {
                        populate: true,
                    },
                    nav: {
                        populate: true,
                    },
                    date: {
                        populate: true,
                    },
                    fund: {
                        populate: {
                            id: {
                                populate: true,
                            },
                            display_name: {
                                populate: true,
                            },
                            code: {
                                populate: true,
                            },
                            pdf: {
                                populate: true,
                            },
                            type: {
                                populate: true,
                            },
                            nav_products: {
                                select: ['id', 'title'],
                            },
                        },
                        select: [
                            'id',
                            'display_name',
                            'code',
                            'type',
                            'fund_sud',
                            'fund_db',
                            'SFIN',
                            'color',
                        ],
                    },
                },
            });

        const updatedFunds = await Promise.all(
            fundNavDetails.map(async (item) => ({
                ...item,
                fund: {
                    ...item.fund,
                    minimum: await getNav(item.fund.id, 'asc'), // Awaiting inside async map function
                    maximum: await getNav(item.fund.id, 'desc'),
                    pdf: await getFilePath(item.fund),
                },
            }))
        );

        const labelPack = await strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);
        return {
            title: titleData,
            fundNames: fundName,
            fundNavDetails: updatedFunds,
            labelPack,
        };
    },
};
