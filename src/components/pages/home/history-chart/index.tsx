'use client'

import { usePortfolioFetch } from '@/hooks/usePortfolioFetch'
import { usePortfolios } from '@/hooks/usePortfolios'
import { Card } from '../../../common/Card'
import { TickerData } from '@/@types/TickersTypes'
import { Chart } from './Chart'
import {
  getLastDays,
  getLastMonths,
  mergeArrayOfObjects,
} from '@/helpers/utils'

type Report = 'pricesHistory' | 'dividendsHistory'

interface Props {
  report: Report
  metric: string
  subtitle: string
  title: string
}
const convertData = (
  dateList: string[],
  tickers: TickerData[],
  report: Report,
  metric: string,
) => {
  const data = dateList.map((date) => {
    const rowData = tickers.map((ticker) => {
      const reportData = ticker[report]
      const result = reportData.find((history) => {
        return history.date === date
      })

      const value = result ? result[metric] : 0
      return { date, [ticker.ticker]: value }
    })

    return mergeArrayOfObjects(rowData)
  })

  return data.reverse()
}

const getCategories = (tickers: TickerData[]) => {
  return tickers.map((ticker) => {
    return ticker.ticker
  })
}

export function HistoryCard({ report, title, subtitle, metric }: Props) {
  const { tickers } = usePortfolios()

  const dateList =
    report === 'dividendsHistory' ? getLastMonths(12) : getLastDays(20)

  const {
    error,
    isLoading,
    data: tickersData,
  } = usePortfolioFetch(tickers.filter((t) => !t.isHidden))

  if (isLoading || !tickersData) {
    return (
      <Card title={title} subtitle={subtitle}>
        Carregando...
      </Card>
    )
  }

  if (error) {
    return (
      <Card title={title} subtitle={subtitle}>
        Erro...
      </Card>
    )
  }

  const data = convertData(dateList, tickersData, report, metric)
  const categories = getCategories(tickersData)

  return (
    <Card title={title} subtitle={subtitle}>
      <Chart data={data} categories={categories} />
    </Card>
  )
}
