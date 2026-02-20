import { Title } from '../../../../types/custom/common-type';
import { MediaImage } from '../../../../types/custom/common-type';
/**
 * faq service
 */
interface FaqResponse {
    title: Title;
    faq: FaqData;
    backgroundImage: MediaImage;
}

interface FaqRequest {
    __component: string;
    id: number;
    title: Title;
}

interface FaqData {
    question: string;
    answer: string;
    category: string;
}

export default {
    renderComponent: async (
        component: FaqRequest,
        id: number,
        params: object
    ): Promise<FaqResponse> => {
        const componentData = await strapi.query('corp-dynamic.c12').findOne({
            where: { id: component.id },
            populate: {
                faq: { populate: true },
                titleTags: { populate: true },
                backgroundImage: { populate: true },
            },
        });
        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.titleTags);
        const imageData = strapi
            .service('api::content.field-render')
            .getMediaImage(componentData.backgroundImage);
        const faqInfo = componentData.faq.map((data): FaqData => {
            return {
                question: data.question,
                answer: data.answer,
                category: data.category,
            };
        });

        return {
            title: titleData,
            backgroundImage: imageData,
            faq: faqInfo,
        };
    },
};
