import {
    Title,
    MediaImage,
    ImageData,
} from '../../../../types/custom/common-type';

/**
 * claims-horizontal-tabs-icons-text service
 */
interface ComponentResponse {
    titleTags: Title;
    description: string;
    tabList: TabListData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface TabListData {
    tabText: string;
    description: string;
    iconList: IconListData[];
    tableContent: TableContentData;
}

interface IconListData {
    iconText: string;
    points: string;
    icon: ImageData;
    textPosition: string;
}

interface TableContentData {
    header: string;
    description: string;
    importantPointHeader: string;
    importantPoints: string;
    columnOneHeader: string;
    columnTwoHeader: string;
    rowData: RowData[];
}

interface RowData {
    columnOneText: string;
    columnTwoText: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c96').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                description: { populate: true },
                tabList: {
                    populate: {
                        tabText: { populate: true },
                        description: { populate: true },
                        iconList: {
                            populate: {
                                iconText: { populate: true },
                                points: { populate: true },
                                icon: { populate: true },
                                textPosition: { populate: true },
                            },
                        },
                        tableContent: {
                            populate: {
                                header: { populate: true },
                                description: { populate: true },
                                importantPoints: { populate: true },
                                importantPointHeader: { populate: true },
                                columnOneHeader: { populate: true },
                                columnTwoHeader: { populate: true },
                                rowData: {
                                    populate: {
                                        columnOneText: { populate: true },
                                        columnTwoText: { populate: true },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });

        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const tabList = componentData.tabList.map((dataTab): TabListData => {
            const iconList = dataTab.iconList.map((data): IconListData => {
                const icon = strapi
                    .service('api::content.field-render')
                    .getImage(data.icon);
                return {
                    iconText: data.iconText,
                    points: data.points,
                    icon,
                    textPosition: data.textPosition,
                };
            });
            const tableContent = dataTab.tableContent.map(
                (data1): TableContentData => {
                    const rowData = data1.rowData.map((data2): RowData => {
                        return {
                            columnOneText: data2.columnOneText,
                            columnTwoText: data2.columnTwoText,
                        };
                    });
                    return {
                        header: data1.header,
                        description: data1.description,
                        importantPoints: data1.importantPoints,
                        importantPointHeader: data1.importantPointHeader,
                        columnOneHeader: data1.columnOneHeader,
                        columnTwoHeader: data1.columnTwoHeader,
                        rowData,
                    };
                }
            );

            return {
                tabText: dataTab.tabText,
                description: dataTab.description,
                iconList,
                tableContent,
            };
        });

        return {
            titleTags: titleData,
            description: componentData.description,
            tabList,
        };
    },
};
