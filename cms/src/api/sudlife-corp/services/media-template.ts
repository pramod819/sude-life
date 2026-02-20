import {
    ImageData,
    MediaImage,
    MediaType,
} from '../../../../types/custom/common-type';

/**
 * media-template service
 */
interface ComponentResponse {
    title: string;
    tabs: string;
}

interface TabResult {
    title: string;
    medias: MediaType[];
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
    ): Promise<ComponentResponse[]> => {
        const componentData = await strapi.query('corp-dynamic.c60').findOne({
            where: { id: component.id },
            populate: {
                tabs: { populate: true },
            },
        });

        const result: ComponentResponse[] = [];

        for (const tab of componentData.tabs) {
            const tags: string = await strapi
                .service('api::sudlife-corp.media-template')
                .getTagData(tab.tags);

            result.push({
                title: tab.title.toString(),
                tabs: tags,
            });
        }

        return result;
    },
    getTagData: async (data) => {
        const result: TabResult[] = [];

        for (const tag of data) {
            const media: MediaType[] = await strapi
                .service('api::content.media')
                .getMediaByTags(tag.name);

            result.push({
                title: tag.name,
                medias: media,
            });
        }

        return result;
    },
};
