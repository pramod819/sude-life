export default {
    routes: [
        {
            method: 'POST',
            path: '/search/index',
            handler: 'search.indexCorpPage',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/search/index/delete',
            handler: 'search.deleteIndexCorpPage',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/search',
            handler: 'search.query',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/autocomplete',
            handler: 'search.autocomplete',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
