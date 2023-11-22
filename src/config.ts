const getConfigAPI = () => {
  if (!process.env.NEXT_PUBLIC_API_KEY) {
    throw new Error('NEXT_PUBLIC_API_KEY not found')
  }

  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error('NEXT_PUBLIC_API_URL not found')
  }

  return {
    key: process.env.NEXT_PUBLIC_API_KEY,
    url: process.env.NEXT_PUBLIC_API_URL,
    cache: process.env.NEXT_PUBLIC_API_CACHE as RequestCache,
    revalidate: parseInt(process.env.NEXT_PUBLIC_API_REVALIDATE || '3600'),
  }
}

export const config = {
  app: {
    metadata: {
      title: {
        default: 'MY FIIS',
        template: '%s | My FIIs',
      },
    },
  },

  api: getConfigAPI(),

  defaults: {
    ticker: {
      quantity: 1,
      isHidden: false,
    },
  },

  suggestions: {
    limit: 5,
  },

  charts: {
    colors: ['blue', 'green', 'red', 'yellow'],
  },
}
