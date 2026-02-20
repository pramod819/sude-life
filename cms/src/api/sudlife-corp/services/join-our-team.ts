import {
    Title,
    MediaImage,
    LabelPack,
} from '../../../../types/custom/common-type';

/**
 * join-our-team service
 */
interface ComponentResponse {
    title: Title;
    subTitle: string;
    bgImage: MediaImage;
    departments: string[];
    labelPack: LabelPack[];
    redirectUrl: string;
    navigationId: string;
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
            .query('corp-dynamic.join-our-team')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    bgImage: { populate: true },
                    labelPack: { populate: true },
                },
            });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const bgImage = componentData.bgImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgImage)
            : null;

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        const departments = [
            'Direct Channel',
            'Bancassurance_UBI',
            'Agency Branch Sales',
            'Bancassurance_BOI',
            'Credit Life',
            'Bancassurance_UBI 1',
            'Internship',
            'Marketing',
            'IT',
        ];

        return {
            title: titleData,
            subTitle: componentData.subTitle,
            bgImage,
            departments,
            labelPack,
            redirectUrl: componentData.redirectUrl ?? '',
            navigationId: componentData.navigationId,
        };
    },
};
