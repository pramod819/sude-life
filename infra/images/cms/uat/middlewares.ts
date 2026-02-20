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
            'd3ibxsf93y74un.cloudfront.net',
            'sudlife-web-uat-media.s3.ap-south-1.amazonaws.com',
            'uat.sudlife.in',
            'uatapi.sudlife.in',
            'uatcms.sudlife.in',
            'market-assets.strapi.io',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'd3ibxsf93y74un.cloudfront.net',
            'sudlife-web-uat-media.s3.ap-south-1.amazonaws.com',
            'uat.sudlife.in',
            'uatapi.sudlife.in',
            'uatcms.sudlife.in',
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
