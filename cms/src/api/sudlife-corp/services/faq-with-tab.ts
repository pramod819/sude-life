import { Title, MediaImage } from '../../../../types/custom/common-type';

/**
 * faq-with-tab service
 */
interface ComponentResponse {
    titleTags: Title;
    backgroundImage: MediaImage;
    tabList: TabListData[];
    navigationId: string;
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface TabListData {
    tabText: string;
    faqList: FaqListData[];
}

interface FaqListData {
    question: string;
    answer: string;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi
            .query('corp-dynamic.c12-faq')
            .findOne({
                where: { id: component.id },
                populate: {
                    titleTags: { populate: true },
                    backgroundImage: { populate: true },
                    tabList: {
                        populate: {
                            tabText: { populate: true },
                            faqList: {
                                populate: {
                                    question: { populate: true },
                                    answer: { populate: true },
                                },
                            },
                        },
                    },
                },
            });

        const titleData = componentData.titleTags
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.titleTags)
            : null;

        const backgroundImage = componentData.backgroundImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.backgroundImage)
            : null;

        const tabListInfo = componentData.tabList.map(
            (tabData): TabListData => {
                const faqListInfo = tabData.faqList.map((data): FaqListData => {
                    return {
                        question: data.question,
                        answer: data.answer,
                    };
                });

                return {
                    tabText: tabData.tabText,
                    faqList: faqListInfo,
                };
            }
        );

        return {
            titleTags: titleData,
            backgroundImage,
            tabList: tabListInfo,
            navigationId: componentData.navigationId,
        };
    },
};
