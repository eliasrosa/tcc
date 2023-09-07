import { StockResult } from '@/@types/StocksTypes'
import { config } from '@/config'

export const fetchStocks = async (): Promise<StockResult> => {
  const { key, url } = config.api

  const response = await fetch(`${url}/finance?key=${key}&format=json-cors`, {
    method: 'GET',
    cache: 'force-cache',
    next: {
      revalidate: 3600,
    },
  })

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  const { results } = await response.json()

  if (!results) {
    throw new Error('No results found')
  }

  return results.stocks as StockResult
}
