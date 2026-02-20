import {
    Title,
    ImageData,
    MediaImage,
} from '../../../../types/custom/common-type';

/**
 * employee-speak service
 */
interface ComponentResponse {
    title: Title;
    description: string;
    employeeList: EmployeeListData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface EmployeeListData {
    videoTitle: string;
    video: ImageData;
    name: string;
    image: ImageData;
    location: string;
    thumbnail: MediaImage;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c116').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                employeeList: {
                    populate: {
                        image: { populate: true },
                        video: { populate: true },
                        thumbnail: { populate: true },
                    },
                },
            },
        });
        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const employeeList = componentData.employeeList.map(
            (data): EmployeeListData => {
                const video = data.video
                    ? strapi
                          .service('api::content.field-render')
                          .getImage(data.video)
                    : null;

                const thumbnail = data.thumbnail
                    ? strapi
                          .service('api::content.field-render')
                          .getMediaImage(data.thumbnail)
                    : null;

                const image = data.image
                    ? strapi
                          .service('api::content.field-render')
                          .getImage(data.image)
                    : null;

                return {
                    videoTitle: data.videoTitle,
                    video,
                    thumbnail,
                    location: data.location,
                    name: data.name,
                    image,
                };
            }
        );

        return {
            title: titleData,
            description: componentData.description,
            employeeList,
        };
    },
};
