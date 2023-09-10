import { FormCard } from '@/components/pages/home/form-card'
import { HistoryCard } from '@/components/pages/home/history-chart'
import { StocksCards } from '@/components/pages/home/stocks-cards'
import { SuggestionsCard } from '@/components/pages/home/suggestions-card'
import { TickersTable } from '@/components/pages/home/tickers-table'

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <FormCard />
          <SuggestionsCard />
          <StocksCards />
        </div>
        <div className="flex flex-col gap-4">
          <TickersTable />
          <HistoryCard
            report="dailyPriceHistory"
            title="Histórico de dividendos"
            subtitle="Últimos 12 meses"
          />
          <HistoryCard
            report="monthlyPriceHistory"
            title="Histórico de valorização"
            subtitle="Últimos 12 meses"
          />
          <HistoryCard
            report="dailyPriceHistory"
            title="Histórico de valorização"
            subtitle="Últimos 20 dias"
          />
        </div>
      </div>
    </>
  )
}
