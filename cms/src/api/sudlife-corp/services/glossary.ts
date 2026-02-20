import {
    Title,
    MediaImage,
    PlanCategoryRequest,
    GlossaryResponse,
} from '../../../../types/custom/common-type';

/**
 * glossary
 */
interface ComponentResponse {
    title: Title;
    description: string;
    planId: string;
    bgImage: MediaImage;
    glossaries: GlossaryResponse[] | Array<''>;
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
    bgImage: MediaImage;
    plan: PlanCategoryRequest;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c29').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                bgImage: { populate: true },
                plan: { populate: true },
            },
        });

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const description = componentData.description
            ? strapi
                  .service('api::content.field-render')
                  .getDescriptionText(componentData.description)
            : null;

        const planId = componentData.plan?.id;

        const bgImage: MediaImage = componentData.bgImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.bgImage)
            : null;

        const glossaries = componentData.plan
            ? await strapi
                  .service('api::content.glossary')
                  .getGlossariesByPlanId(componentData.plan.id)
            : [];

        return {
            title: titleData,
            description,
            planId,
            bgImage,
            glossaries,
        };
    },
};
