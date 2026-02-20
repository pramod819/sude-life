/**
 * downloads service
 */
import { Title } from '../../../../types/custom/common-type';

interface ComponentResponse {
    title: Title;
    subTitle: string;
    documents: Documents[];
    btnOneLabel: string;
    btnTwoLabel: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface Documents {
    title: string;
    document: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c98').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                subTitle: { populate: true },
                documents: {
                    populate: {
                        documentTitle: { populate: true },
                        document: { populate: true },
                    },
                },
                btnOneLabel: { populate: true },
                btnTwoLabel: { populate: true },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const documents = componentData.documents
            ? componentData.documents.map((data): Documents => {
                  const document = data.document
                      ? strapi
                            .service('api::content.field-render')
                            .getPdfPath(data.document)
                      : '';

                  return {
                      title: data.documentTitle ?? '',
                      document,
                  };
              })
            : [];

        return {
            title: titleData,
            subTitle: componentData.subTitle ?? '',
            documents,
            btnOneLabel: componentData.btnOneLabel,
            btnTwoLabel: componentData.btnTwoLabel,
        };
    },
};
