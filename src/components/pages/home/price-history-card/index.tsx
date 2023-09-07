'use client'

import { TickersCard } from '../tickers-card'
import { Title } from '@/components/common/Title'

export function PriceHistoryCard() {
  // const { tickers } = usePortfolios()

  return (
    <TickersCard>
      <Title>
        <span>Histórico de valorização</span>
        <span className="text-gray-500 text-sm">Últimos 20 dias</span>
      </Title>
    </TickersCard>
  )
}
