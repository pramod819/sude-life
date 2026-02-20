const collectionsToIndex = ['corp-page', 'learning-module', 'blog'];

export default ({ strapi }) => {
    strapi.db.lifecycles.subscribe({
        async afterCreate(event: any): Promise<any> {
            const { model, result } = event;
            const index = model.uid.split('.').pop();
            if (collectionsToIndex.indexOf(index) !== -1) {
                try {
                    await strapi
                        .service('api::search.utils')
                        .indexDocument(index, result);
                } catch (e) {
                    console.log(e);
                }
            }
        },
        async afterDelete(event: any): Promise<any> {
            const { model, result } = event;
            const index = model.uid.split('.').pop();
            if (collectionsToIndex.indexOf(index) !== -1) {
                try {
                    await strapi
                        .service('api::search.utils')
                        .deleteDocument(index, result.documentId);
                } catch (e) {
                    console.log(e);
                }
            }
        },
    });
};
