import {
    Title,
    MediaImage,
    LabelPack,
    SubComponent,
} from '../../../../types/custom/common-type';

/**
 * pan-update-form service
 */
interface ComponentResponse {
    tab1Title: Title;
    tab2Title: Title;
    labelPack: LabelPack[];
    infoCard: InfoCard[];
}

interface InfoCard {
    title: string;
    text: string;
    info: string;
}

interface InfoCardResponse {
    id: number;
    title: string;
    text: string;
    info: string;
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
            .query('corp-dynamic.form-grievance')
            .findOne({
                where: { id: component.id },
                populate: {
                    title: { populate: true },
                    tab2_title: { populate: true },
                    labelpack: { populate: true },
                    info_cards: { populate: true },
                },
            });

        const tab1Title = strapi
            .service('api::content.field-render')
            .getTitle(componentData.title);

        const tab2Title = strapi
            .service('api::content.field-render')
            .getTitle(componentData.tab2_title);

        const labelPack = strapi
            .service('api::content.field-render')
            .getLabelPacks(componentData.labelpack);

        const infoCard = await strapi
            .service('api::sudlife-corp.grievance-form')
            .getInfoCard(componentData.info_cards);

        return {
            tab1Title,
            tab2Title,
            labelPack,
            infoCard,
        };
    },
    getInfoCard: async (cardData: InfoCardResponse[]): Promise<InfoCard[]> => {
        console.log('Card Dar', cardData);
        const result = <InfoCard[]>[];
        for (const item of cardData) {
            const card = {
                title: item.title,
                text: item.text,
                info: item.info,
            };
            result.push(card);
        }

        return result;
    },
};
