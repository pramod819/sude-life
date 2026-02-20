export default () => ({
  'record-locking': {
    enabled: false,
    config: {
      transports: ['websocket'],
    },
  },
  "sudlife-custom-plugin": {
    enabled: true,
    resolve: "./src/plugins/sudlife-custom-plugin",
  },
  'webp-converter': {
    enabled: true,
    config: {
      // mimeTypes that converts to WebP. Default is ['image/png', 'image/jpeg', 'image/jpg']
      mimeTypes: ['image/png', 'image/jpeg', 'image/jpg'],
      options: {
        // WebP options: https://sharp.pixelplumbing.com/api-output#webp
      },
    },
  },
});
