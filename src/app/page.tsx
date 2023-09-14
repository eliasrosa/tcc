import { FormCard } from '@/components/pages/home/form-card'
import { HistoryCard } from '@/components/pages/home/history-chart'
import { SuggestionsCard } from '@/components/pages/home/suggestions-card'
import { TickersTable } from '@/components/pages/home/tickers-table'

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
          <FormCard />
          <SuggestionsCard />
        </div>
        <div className="flex flex-col gap-4">
          <TickersTable />
          <HistoryCard
            report="dividendsHistory"
            title="Histórico de dividendos"
            subtitle="Últimos 12 meses"
            metric="amount"
          />
          <HistoryCard
            report="pricesHistory"
            title="Histórico de valorização (Valor médio do dia)"
            subtitle="Últimos 20 dias"
            metric="avg"
          />
          <HistoryCard
            report="pricesHistory"
            title="Histórico de valorização (Valor máximo do dia)"
            subtitle="Últimos 20 dias"
            metric="max"
          />
          <HistoryCard
            report="pricesHistory"
            title="Histórico de valorização (Valor mínimo do dia)"
            subtitle="Últimos 20 dias"
            metric="min"
          />
        </div>
      </div>
    </>
  )
}
