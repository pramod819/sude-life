import { Title, LabelPack } from '../../../../types/custom/common-type';

/**
 * investors-factsheet service
 */
interface ComponentResponse {
    title: Title;
    subTitle: string;
    labelPack: LabelPack[];
    year: string[];
    month: string[];
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
        const componentData = await strapi.query('corp-dynamic.c112').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                labelPack: { populate: true },
            },
        });

        const title = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        const year = await strapi
            .service('api::content.investors-factsheet')
            .getDocumnetYear();

        const month = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        return {
            title,
            subTitle: componentData.subTitle,
            labelPack,
            year,
            month,
        };
    },
};
