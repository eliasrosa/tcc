/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useEffect, useState } from 'react'
import { TickerData, TickerResult } from '@/@types/TickersTypes'
import { usePortfolios } from '@/hooks/usePortfolios'
import { TickersCard } from '../tickers-card'
import { Title } from '@/components/common/Title'
import { TickerFetchAPI } from '@/helpers/TickerFetchAPI'

export function DividendHistoryCard() {
  const { tickers } = usePortfolios()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [results, setResults] = useState<TickerResult[]>([])

  useEffect(() => {
    Promise.allSettled(
      tickers.map((ticker) => new TickerFetchAPI(ticker).fetch()),
    ).then((results) => {
      const dataFiltred = results.filter(
        ({ status }) => status === 'fulfilled',
      ) as PromiseFulfilledResult<TickerData>[]

      const data = dataFiltred.map(({ value }) => value)

      // setResults()
    })
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
