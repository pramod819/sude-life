import {
    Title,
    MediaImage,
    PeopleResponse,
} from '../../../../types/custom/common-type';

/**
 * meet-the-team service
 */
interface ComponentResponse {
    title: Title;
    bgImage: MediaImage;
    people: PeopleResponse[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c111').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                bgImage: { populate: true },
                people: {
                    populate: {
                        image: { populate: true },
                        designation: {
                            populate: {
                                designation: { populate: true },
                            },
                        },
                        cta: { populate: true },
                    },
                },
            },
        });

        const title = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const bgImage = componentData.bgImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgImage)
            : {};

        const people = componentData.people
            ? strapi
                  .service('api::content.people')
                  .getPeople(componentData.people)
            : null;

        return {
            title,
            bgImage,
            people,
        };
    },
};
