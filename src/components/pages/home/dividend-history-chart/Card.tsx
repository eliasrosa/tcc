import { ReactNode } from 'react'
import { TickersCard } from '../tickers-card'
import { Title } from '@/components/common/Title'
import { Text } from '@tremor/react'

export function Card({ children }: { children: ReactNode }) {
  return (
    <TickersCard>
      <Title>
        Histórico de dividendos
        <Text>Últimos 12 meses</Text>
      </Title>
      {children}
    </TickersCard>
  )
}
