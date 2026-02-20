import {
    Cta,
    AgentResponse,
    MediaImage,
    Title,
    LabelPack,
} from '../../../../types/custom/common-type';

/**
 * become-agent service
 */

interface BecomeAgentResponse {
    title: Title;
    subtitle: string;
    bgImage: MediaImage;
    cta: Cta;
    feature: FeatureData;
    agents: AgentResponse[];
    labelPack: LabelPack[];
    hideAgent: boolean;
}

interface BecomeAgentRequest {
    __component: string;
    id: number;
    title: Title;
    subtitle: string;
}

interface FeatureData {
    text: string;
}

interface FormDataRequest {
    id: number;
    name: string;
    mobile: string;
}

interface FormData {
    name: string;
    mobile: string;
}

export default {
    renderComponent: async (
        component: BecomeAgentRequest,
        id: number,
        params: object
    ): Promise<BecomeAgentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c17').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                feature: {
                    populate: {
                        text: { populate: true },
                    },
                },
                image: { populate: true },
                cta: { populate: true },
                agents: { populate: true },
                labelPack: { populate: true },
            },
        });
        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const bgImage: MediaImage = componentData.image
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.image)
            : null;

        const cta = componentData.cta
            ? strapi
                  .service('api::content.field-render')
                  .getCta(componentData.cta)
            : null;

        const featureData = componentData.feature.map((data): FeatureData => {
            return {
                text: data.text,
            };
        });

        const agents = strapi
            .service('api::content.agent')
            .getAgents(componentData.agents);

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelPack);

        return {
            title: titleData,
            subtitle: component.subtitle,
            bgImage,
            cta,
            feature: featureData,
            agents,
            labelPack,
            hideAgent: componentData.hideAgent,
        };
    },
};
