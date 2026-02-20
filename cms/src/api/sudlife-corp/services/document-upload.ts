/**
 * document-upload service
 */
import { MediaImage, Title } from '../../../../types/custom/common-type';

interface DocumentUploadResponse {
    title: Title;
    clainType: ClaimTypeData;
}

interface DocumentUploadRequest {
    __component: string;
    id: number;
    title: Title;
}

interface ClaimTypeData {
    title: string;
    documentList: DocumentListData;
}

interface DocumentListData {
    documentName: string;
    document: string;
    info: string;
}

export default {
    renderComponent: async (
        component: DocumentUploadRequest,
        id: number,
        params: object
    ): Promise<DocumentUploadResponse> => {
        const componentData = await strapi.query('corp-dynamic.c23').findOne({
            where: { id: component.id },
            populate: {
                clainType: {
                    populate: {
                        title: {
                            populate: true,
                        },
                        documentList: {
                            populate: {
                                documentName: {
                                    populate: true,
                                },
                                document: {
                                    populate: true,
                                },
                            },
                        },
                    },
                },
                titleTags: { populate: true },
            },
        });
        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.titleTags);

        const claimInfoData = componentData.clainType.map(
            (data): ClaimTypeData => {
                const claimInfoData = data.documentList.map(
                    (data): DocumentListData => {
                        const filePath = strapi
                            .service('api::content.field-render')
                            .getPdfPath(data.document);

                        return {
                            documentName: data.documentName,
                            document: filePath,
                            info: data.info,
                        };
                    }
                );
                return {
                    title: data.title,
                    documentList: claimInfoData,
                };
            }
        );

        return {
            title: titleData,
            clainType: claimInfoData,
        };
    },
};
