import { MediaImage } from '../../../../types/custom/common-type';

/**
 * learning-module-detail component service
 */
interface ComponentResponse {
    title: string;
    path: string;
    type: string;
    tag: string;
    thumbnail: MediaImage;
    details: CardsData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface CardsData {
    variation: string;
    colour: string;
    fontColour: string;
    number: string;
    numberBgColour: string;
    title: string;
    description: string;
    imagePosition: string;
    quote: string;
    image: MediaImage;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        return await strapi
            .service('api::content.learning-module')
            .getDetails(id);
    },
};
