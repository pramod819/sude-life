export default {
    routes: [
        {
            method: 'GET',
            path: '/content/page/corp',
            handler: 'sudlife-corp.getPageAction',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/content/sitemap/sitemap.xml',
            handler: 'sudlife-corp.getSitemap',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/content/chat',
            handler: 'sudlife-corp.chatContent',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/content/blog/saveLike',
            handler: 'sudlife-corp.saveLike',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/content/blog/saveView',
            handler: 'sudlife-corp.saveView',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/content/product/save_rating',
            handler: 'sudlife-corp.saveRating',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/content/investor_document',
            handler: 'sudlife-corp.getInvestorDocument',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/content/blog/get_all',
            handler: 'sudlife-corp.getBlogByFilter',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/content/investor_factsheet',
            handler: 'sudlife-corp.getInvestorFactsheet',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/content/fund/get_all',
            handler: 'sudlife-corp.getFundByFilter',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/content/fund/details',
            handler: 'sudlife-corp.getFundDetails',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/content/fund/performance',
            handler: 'sudlife-corp.getFundNavValue',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
