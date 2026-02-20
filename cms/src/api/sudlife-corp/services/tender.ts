import {
    Title,
    TenderResponse,
    TENDER_STATUS,
} from '../../../../types/custom/common-type';

/**
 * tender
 */
interface ComponentResponse {
    title: Title;
    tabs: Array<string>;
    tableHeader: Array<string>;
    status: Array<string>;
    tenders: TenderResponse[];
}

interface ComponentRequest {
    __component: string;
    id: number;
    title: Title;
}

export default {
    renderComponent: async (
        component: ComponentRequest,
        id: number,
        params: object
    ): Promise<ComponentResponse> => {
        const componentData = await strapi.query('corp-dynamic.c45').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
            },
        });

        const status = [...TENDER_STATUS];
        status.pop();

        const titleData = componentData.title
            ? strapi
                  .service('api::content.field-render')
                  .getTitle(componentData.title)
            : null;

        const tenders = await strapi
            .service('api::content.tender')
            .getTenders();

        const tableHeader = [
            'RFP No',
            'Status',
            'Tender / RFP',
            'Issued Date',
            'Submission Date',
            'Download',
        ];

        const tabs = ['Tenders', 'Archived'];

        return {
            title: titleData,
            tabs,
            tableHeader,
            status,
            tenders,
        };
    },
};
