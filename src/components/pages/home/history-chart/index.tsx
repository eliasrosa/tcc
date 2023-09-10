'use client'

import { usePortfolioFetch } from '@/hooks/usePortfolioFetch'
import { usePortfolios } from '@/hooks/usePortfolios'
import { Card } from '../../../common/Card'

interface Props {
  report: 'dailyPriceHistory' | 'monthlyPriceHistory' | 'dividendHistory'
  subtitle: string
  title: string
}

export function HistoryCard({ title, subtitle }: Props) {
  const { tickers } = usePortfolios()
  const { data, error, isLoading } = usePortfolioFetch(tickers)

  if (isLoading || !data) {
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

  return (
    <Card title={title} subtitle={subtitle}>
      ok
    </Card>
  )
}
