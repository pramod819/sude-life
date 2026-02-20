export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", "ws:", "wss:", 'http:', 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dxwkpt4djlxwl.cloudfront.net',
            'sudlife-web-prd-media.s3.ap-south-1.amazonaws.com',
            'prd.sudlife.in',
            'sudlife.in',
            'prdapi.sudlife.in',
            'prdcms.sudlife.in',
            'market-assets.strapi.io',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dxwkpt4djlxwl.cloudfront.net',
            'sudlife-web-prd-media.s3.ap-south-1.amazonaws.com',
            'prd.sudlife.in',
            'sudlife.in',
            'prdapi.sudlife.in',
            'prdcms.sudlife.in',
            'market-assets.strapi.io',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  {
    name: 'strapi::public',
    config: {
      maxAge: 120000
    },
  }
];
