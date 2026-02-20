import { Title } from '../../../../types/custom/common-type';

/**
 * assorted-table service
 */
interface ComponentResponse {
    title: Title;
    collapseTable: boolean;
    assortedTable: [];
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
        const componentData = await strapi.query('corp-dynamic.c67').findOne({
            where: { id: component.id },
            populate: {
                title: { populate: true },
                table: {
                    populate: {
                        header: { populate: true },
                        table: {
                            populate: {
                                column: {
                                    populate: {
                                        row: { populate: true },
                                        table: { populate: true },
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
            .getTitle(componentData.title);

        const table = await strapi
            .service('api::content.assorted-table')
            .formatTable(componentData.table);

        return {
            title: titleData,
            collapseTable: componentData.collapseTable ?? 'true',
            assortedTable: table,
        };
    },
};
