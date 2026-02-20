import { Title, ImageData } from '../../../../types/custom/common-type';

/**
 * video-with-pointers service
 */
interface ComponentResponse {
    title: Title;
    pointers: PointerData[];
    navigationId: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

interface PointerData {
    thumbnail: ImageData;
    video: ImageData;
    benefits: BenefitData[];
}

interface BenefitData {
    icon: ImageData;
    benefit: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c114').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                pointers: {
                    populate: {
                        videoThumbnail: { populate: true },
                        video: { populate: true },
                        benefits: {
                            populate: {
                                icon: { populate: true },
                                benefit: { populate: true },
                            },
                        },
                    },
                },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const pointers = componentData.pointers.map((data): PointerData => {
            const thumbnail = data.videoThumbnail
                ? strapi
                      .service('api::content.field-render')
                      .getImage(data.videoThumbnail)
                : null;

            const video = data.video
                ? strapi
                      .service('api::content.field-render')
                      .getImage(data.video)
                : null;

            const benefits = data.benefits.map((item): BenefitData => {
                const icon = item.icon
                    ? strapi
                          .service('api::content.field-render')
                          .getImage(item.icon)
                    : null;

                return {
                    icon,
                    benefit: item.benefit,
                };
            });

            return {
                thumbnail,
                video,
                benefits,
            };
        });

        return {
            title: titleData,
            pointers,
            navigationId: componentData.navigationId,
        };
    },
};
