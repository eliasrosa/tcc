'use client'

import useSWR from 'swr'
import { Ticker, TickerData } from '@/@types/TickersTypes'

export const usePortfolioFetch = (tickers: Ticker[]) => {
  const symbols = tickers.map((ticker) => ticker.ticker).join(',')

  const data = useSWR<TickerData[], Error>(`/api/tickers/${symbols}`, () => {
    return fetch(`/api/tickers?tickers=${symbols}`).then((res) => res.json())
  })

  return data
}
