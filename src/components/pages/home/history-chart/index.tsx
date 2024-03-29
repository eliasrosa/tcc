'use client'

import { usePortfolioFetch } from '@/hooks/usePortfolioFetch'
import { usePortfolios } from '@/hooks/usePortfolios'
import { Card } from '../../../common/Card'
import { TickerData } from '@/@types/TickersTypes'
import { Chart } from './Chart'
import { getLastDays } from '@/helpers/getLastDays'
import { getLastMonths } from '@/helpers/getLastMonths'
import { mergeArrayOfObjects } from '@/helpers/mergeArrayOfObjects'

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

  return data.reverse().filter((row) => {
    return Object.values(row).every((value) => {
      if (String(value).includes('/')) {
        return true
      }

      return value !== 0
    })
  })
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
        <p className="text-gray-500 text-sm text-center mt-6">Carregando...</p>
      </Card>
    )
  }

  if (error) {
    return (
      <Card title={title} subtitle={subtitle}>
        <p className="text-gray-500 text-sm text-center mt-6">
          Ocorreu um erro ao carregar os dados!
        </p>
      </Card>
    )
  }

  if (tickersData.length === 0) {
    return (
      <Card title={title} subtitle={subtitle}>
        <p className="text-gray-500 text-sm text-center mt-6">
          Adicione os ativos na carteira para visualizar
        </p>
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
