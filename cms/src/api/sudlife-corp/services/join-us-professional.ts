import {
    Title,
    MediaImage,
    LabelPack,
    Cta,
} from '../../../../types/custom/common-type';

/**
 * join-us-professional service
 */
interface ComponentResponse {
    title: Title;
    labelPack: LabelPack[];
    formList: FormListData;
    navigationId: string;
}

interface FormListData {
    title: Title;
    bulletPointList: string[];
    bgColor: string;
    image: MediaImage;
    subTitle: string;
    cta: Cta;
    formType: string;
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
        const componentData = await strapi
            .query('corp-dynamic.join-us-professional')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    labelPack: { populate: true },
                    formList: {
                        populate: {
                            title: { populate: true },
                            bulletPointList: { populate: true },
                            image: { populate: true },
                            subTitle: { populate: true },
                            cta: { populate: true },
                            bgColor: { populate: true },
                            formType: { populate: true },
                        },
                    },
                },
            });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        const formList = componentData.formList.map((data): FormListData => {
            const cta = data.cta
                ? strapi.service('api::content.field-render').getCta(data.cta)
                : null;

            const bulletPointList = data.bulletPointList.map(
                (data1): string => {
                    return data1.text;
                }
            );

            const image = data.image
                ? strapi
                      .service('api::content.field-render')
                      .getMediaImage(data.image)
                : null;

            return {
                cta,
                bulletPointList,
                image,
                title: data.title,
                subTitle: data.subTitle,
                bgColor: data.bgColor,
                formType: data.formType,
            };
        });

        return {
            title: titleData,
            formList,
            labelPack,
            navigationId: componentData.navigationId,
        };
    },
};
