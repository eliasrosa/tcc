export const config = {
  app: {
    metadata: {
      title: {
        default: 'MY FIIS',
        template: '%s | My FIIs',
      },
    },
  },

  api: {},

  defaults: {
    ticker: {
      quantity: 1,
      isHidden: false,
    },
  },

  charts: {
    colors: ['blue', 'green', 'red', 'yellow'],
  },
}
