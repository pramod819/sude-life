import { Title, TopicData } from '../../../../types/custom/common-type';

/**
 * learning-module-listing service
 */
interface ComponentResponse {
    title: Title;
    modules: ModulesData[];
}

interface ModulesData {
    module: ModuleData;
    topicList: TopicData[];
}

interface ModuleData {
    moduleNumber: number;
    title: string;
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
        const componentData = await strapi
            .query('corp-dynamic.lm-listing')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    modules: { populate: true },
                },
            });

        const title = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const modules = [];
        for (const item of componentData.modules) {
            const topicList = await strapi
                .service('api::content.learning-module')
                .getListByTags(item.id);

            const module = {
                moduleNumber: item.number ?? 0,
                title: item.name,
            };

            modules.push({
                module,
                topicList,
            });
        }

        return {
            title,
            modules,
        };
    },
};
