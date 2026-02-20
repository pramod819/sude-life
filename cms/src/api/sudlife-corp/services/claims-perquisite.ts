import {
    MediaImage,
    Cta,
    LabelPack,
} from '../../../../types/custom/common-type';

/**
 * claims-perquisite service
 */
interface ComponentResponse {
    tabList: TabListData[];
    leftText: string;
    rightText: string;
    getDirection: Cta;
    scheduleCall: Cta;
    labelPack: LabelPack[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface TabListData {
    tabText: string;
    header: string;
    tableContent: TableContentData[];
    formDownload: FormDownloadData[];
    faqList: FaqListData[];
    backgroundImage: MediaImage;
}

interface FormDownloadData {
    formName: string;
    formUpload: string;
}
interface FaqListData {
    question: string;
    answer: string;
}

interface TableContentData {
    tableHeader: string;
    columnHeader1: string;
    columnHeader2: string;
    columnHeader3: string;
    columnHeader4: string;
    columnHeader5: string;
    columnHeader6: string;
    columnHeader7: string;
    rows: RowData[];
    disclaimerText: string;
}

interface RowData {
    columnData1: string;
    columnData2: string;
    columnData3: string;
    columnData4: string;
    columnData5: string;
    columnData6: string;
    columnData7: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c97').findOne({
            where: { id: component.id },
            populate: {
                leftText: { populate: true },
                rightText: { populate: true },
                getDirection: { populate: true },
                scheduleCall: { populate: true },
                labelPack: { populate: true },
                tabList: {
                    populate: {
                        tabText: { populate: true },
                        header: { populate: true },
                        backgroundImage: { populate: true },
                        tableContent: {
                            populate: {
                                tableHeader: { populate: true },
                                columnHeader1: { populate: true },
                                columnHeader2: { populate: true },
                                columnHeader3: { populate: true },
                                columnHeader4: { populate: true },
                                columnHeader5: { populate: true },
                                columnHeader6: { populate: true },
                                columnHeader7: { populate: true },
                                rows: {
                                    populate: {
                                        columnData1: { populate: true },
                                        columnData2: { populate: true },
                                        columnData3: { populate: true },
                                        columnData4: { populate: true },
                                        columnData5: { populate: true },
                                        columnData6: { populate: true },
                                        columnData7: { populate: true },
                                    },
                                },
                                disclaimerText: { populate: true },
                            },
                        },
                        formDownload: {
                            populate: {
                                formName: { populate: true },
                                formUpload: { populate: true },
                            },
                        },
                        faqList: {
                            populate: {
                                question: { populate: true },
                                answer: { populate: true },
                            },
                        },
                    },
                },
            },
        });

        const getDirection = componentData.getDirection
            ? strapi
                  .service('api::content.field-render')
                  .getCta(componentData.getDirection)
            : null;

        const scheduleCall = componentData.scheduleCall
            ? strapi
                  .service('api::content.field-render')
                  .getCta(componentData.scheduleCall)
            : null;

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        const tabList = componentData.tabList.map((dataTab): TabListData => {
            const backgroundImage = dataTab.backgroundImage
                ? strapi
                      .service('api::content.field-render')
                      .getMediaImage(dataTab.backgroundImage)
                : null;
            const tableContent = dataTab.tableContent.map(
                (data1): TableContentData => {
                    const rowData = data1.rows.map((data2): RowData => {
                        return {
                            columnData1: data2.columnData1,
                            columnData2: data2.columnData2,
                            columnData3: data2.columnData3,
                            columnData4: data2.columnData4,
                            columnData5: data2.columnData5,
                            columnData6: data2.columnData6,
                            columnData7: data2.columnData7,
                        };
                    });
                    return {
                        tableHeader: data1.tableHeader,
                        columnHeader1: data1.columnHeader1,
                        columnHeader2: data1.columnHeader2,
                        columnHeader3: data1.columnHeader3,
                        columnHeader4: data1.columnHeader4,
                        columnHeader5: data1.columnHeader5,
                        columnHeader6: data1.columnHeader6,
                        columnHeader7: data1.columnHeader7,
                        rows: rowData,
                        disclaimerText: data1.disclaimerText,
                    };
                }
            );
            const formDownloadList = dataTab.formDownload.map(
                (data): FormDownloadData => {
                    const filePath = strapi
                        .service('api::content.field-render')
                        .getPdfPath(data.formUpload);
                    return {
                        formName: data.formName,
                        formUpload: filePath,
                    };
                }
            );

            const faqListList = dataTab.faqList.map((data): FaqListData => {
                return {
                    question: data.question,
                    answer: data.answer,
                };
            });

            return {
                tabText: dataTab.tabText,
                header: dataTab.header,
                tableContent: tableContent,
                formDownload: formDownloadList,
                faqList: faqListList,
                backgroundImage,
            };
        });

        return {
            tabList,
            leftText: componentData.leftText,
            rightText: componentData.rightText,
            getDirection,
            scheduleCall,
            labelPack,
        };
    },
};
