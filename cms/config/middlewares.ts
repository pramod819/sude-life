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
            'sudlife.backend.local',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'sudlife.backend.local',
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
