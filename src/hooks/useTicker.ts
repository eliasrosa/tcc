'use client'

import useSWR from 'swr'
import { TickerFetchAPI } from '@/helpers/TickerFetchAPI'
import { TickerData } from '@/@types/TickersTypes'

export const useTicker = (ticker: string) => {
  const data = useSWR<TickerData, Error>(`/ticker/${ticker}`, () =>
    new TickerFetchAPI(ticker).fetch(),
  )

  return data
}
