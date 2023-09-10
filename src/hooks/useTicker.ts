'use client'

import useSWR from 'swr'
import { TickerData } from '@/@types/TickersTypes'

export const useTicker = (ticker: string) => {
  const data = useSWR<TickerData, Error>(`/api/ticker/${ticker}`, () => {
    return fetch(`/api/ticker/${ticker}`).then((res) => res.json())
  })

  return data
}
