export const config = {
  app: {
    metadata: {
      title: {
        default: 'MY FIIS',
        template: '%s | My FIIs',
      },
    },
  },

  apis: {
    brapi: {
      host: 'https://brapi.dev/',
    },
  },

  cache: {
    time: 1000 * 60 * 15, // 15 minutes
  },
}
