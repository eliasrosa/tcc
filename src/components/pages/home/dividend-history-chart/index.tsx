'use client'

import { usePortfolioFetch } from '@/hooks/usePortfolioFetch'
import { usePortfolios } from '@/hooks/usePortfolios'
import { Card } from './Card'

export function DividendHistoryCard() {
  const { tickers } = usePortfolios()
  const { data, error, isLoading } = usePortfolioFetch(tickers)

  if (isLoading || !data) {
    return <Card>Carregando...</Card>
  }

  if (error) {
    return <Card>Erro...</Card>
  }

  return <Card>ok</Card>
}
