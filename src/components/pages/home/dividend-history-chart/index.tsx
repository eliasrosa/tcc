/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useEffect, useState } from 'react'
import { TickerData, TickerResult } from '@/@types/TickersTypes'
import { usePortfolios } from '@/hooks/usePortfolios'
import { TickersCard } from '../tickers-card'
import { Title } from '@/components/common/Title'
import { TickerFetchAPI } from '@/helpers/TickerFetchAPI'
import { useTicker } from '@/hooks/useTicker'
import { useSWRConfig } from 'swr'
import { log } from 'console'

const getCacheKey = (ticker: string) => {
  return `/ticker/${ticker}`
}

export function DividendHistoryCard() {
  const { tickers } = usePortfolios()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [results, setResults] = useState<TickerResult[]>([])

  const { cache } = useSWRConfig()

  useEffect(() => {
    // const tickersCache = tickers.filter((ticker) => {
    //   if (cache.get(getCacheKey(ticker.ticker))) {
    //     return false
    //   }
    //   console.log('xxxx', ticker)
    //   return true
    // })
    // Promise.allSettled()
    //   (results) => {
    //     // const dataFiltred = results.filter(
    //     //   ({ status }) => status === 'fulfilled',
    //     // ) as PromiseFulfilledResult<TickerData>[]
    //     // const data = dataFiltred.map(({ value }) => value)
    //     // setResults()
    //   },
    console.log('tickers', tickers)
  }, [tickers])

  return (
    <TickersCard>
      <Title>
        Histórico de dividendos
        <span className="text-gray-500 text-sm">Últimos 12 meses</span>
      </Title>
    </TickersCard>
  )
}
