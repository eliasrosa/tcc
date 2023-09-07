import { Table } from './Table'
import { TickersCard } from '../tickers-card'
import { Title } from '@/components/common/Title'

export function TickersTable() {
  return (
    <TickersCard>
      <Title>Minha Carteira</Title>
      <Table />
    </TickersCard>
  )
}
