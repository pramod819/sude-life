import { Title, MediaImage } from '../../../../types/custom/common-type';

/**
 * faq-with-tab service
 */
interface ComponentResponse {
    titleTags: Title;
    backgroundImage: MediaImage;
    horizontalTab: HorizontalTabData[];
}

interface ComponentRequest {
    __component: string;
    id: number;
}

interface HorizontalTabData {
    tabText: string;
    verticalTab: VerticalTabData[];
}

interface VerticalTabData {
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
            .query('corp-dynamic.c12-tab')
            .findOne({
                where: { id: component.id },
                populate: {
                    titleTags: { populate: true },
                    backgroundImage: { populate: true },
                    horizontalTab: {
                        populate: {
                            tabText: { populate: true },
                            verticalTab: {
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
                    },
                },
            });

        const titleData = strapi
            .service('api::content.field-render')
            .getTitle(componentData.titleTags);

        const backgroundImage = componentData.backgroundImage
            ? strapi
                  .service('api::content.field-render')
                  .getMediaImage(componentData.backgroundImage)
            : null;

        const horizontalTabInfo = componentData.horizontalTab.map(
            (horizontalTabData): HorizontalTabData => {
                const verticalTabInfo = horizontalTabData.verticalTab.map(
                    (veriticalTabData): VerticalTabData => {
                        const faqListDataInfo = veriticalTabData.faqList.map(
                            (data): FaqListData => {
                                return {
                                    question: data.question,
                                    answer: data.answer,
                                };
                            }
                        );
                        return {
                            tabText: veriticalTabData.tabText,
                            faqList: faqListDataInfo,
                        };
                    }
                );

                return {
                    tabText: horizontalTabData.tabText,
                    verticalTab: verticalTabInfo,
                };
            }
        );

        return {
            titleTags: titleData,
            backgroundImage,
            horizontalTab: horizontalTabInfo,
        };
    },
};
