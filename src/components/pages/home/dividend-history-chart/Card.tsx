import { ReactNode } from 'react'
import { TickersCard } from '../tickers-card'
import { Title } from '@/components/common/Title'

export function Card({ children }: { children: ReactNode }) {
  return (
    <TickersCard>
      <Title>
        Histórico de dividendos
        <span className="text-gray-500 text-sm">Últimos 12 meses</span>
      </Title>
      {children}
    </TickersCard>
  )
}
