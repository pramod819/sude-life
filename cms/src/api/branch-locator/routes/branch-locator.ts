export default {
    routes: [
        {
            method: 'GET',
            path: '/content/branch/get_localities',
            handler: 'branch-locator.getLocalities',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/content/branch/get_by_locality',
            handler: 'branch-locator.getByLocality',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
