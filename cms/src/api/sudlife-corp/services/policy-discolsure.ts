import { Title, LabelPack } from '../../../../types/custom/common-type';

/**
 * policy-discolsure service
 */
interface ComponentResponse {
    titleTags: Title;
    subTitle: string;
    labelPack: LabelPack[];
    policiesAndDisclosure: PolicyDiscolsureData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface PolicyDiscolsureData {
    tabText: string;
    documentList: DocumentListData[];
}

interface DocumentListData {
    documentName: string;
    document: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c84').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                subTitle: { populate: true },
                labelPack: { populate: true },
                policiesAndDisclosure: {
                    populate: {
                        tabText: { populate: true },
                        documentList: {
                            populate: {
                                documentName: { populate: true },
                                document: { populate: true },
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

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        const policiesAndDisclosure = componentData.policiesAndDisclosure.map(
            (dataPolicyDiscolsures): PolicyDiscolsureData => {
                const documentList = dataPolicyDiscolsures.documentList.map(
                    (data): DocumentListData => {
                        const filePath = strapi
                            .service('api::content.field-render')
                            .getPdfPath(data.document);

                        return {
                            documentName: data.documentName,
                            document: filePath,
                        };
                    }
                );

                return {
                    tabText: dataPolicyDiscolsures.tabText,
                    documentList,
                };
            }
        );

        return {
            titleTags: titleData,
            subTitle: componentData.subTitle,
            policiesAndDisclosure,
            labelPack,
        };
    },
};
