import { Title, ImageData } from '../../../../types/custom/common-type';

/**
 * about-sud-life service
 */
interface ComponentResponse {
    titleTags: Title;
    subTitle: string;
    contactUsList: ItemData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface ItemData {
    designation: string;
    logo: ImageData;
    name: string;
    address: string;
    email: string;
    contactNumber: string;
    website: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c88').findOne({
            where: { id: component.id },
            populate: {
                titleTags: { populate: true },
                subTitle: { populate: true },
                contactUsList: { populate: true },
            },
        });

        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const contactUsList = componentData.contactUsList.map(
            (data): ItemData => {
                const logo: ImageData = data.logo
                    ? strapi
                          .service('api::content.field-render')
                          .getImage(data.logo)
                    : null;

                return {
                    designation: data.designation,
                    name: data.name,
                    logo,
                    address: data.address,
                    email: data.email,
                    website: data.website,
                    contactNumber: data.contactNumber,
                };
            }
        );

        return {
            titleTags: titleData,
            subTitle: componentData.subTitle,
            contactUsList,
        };
    },
};
