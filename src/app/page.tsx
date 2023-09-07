import { DividendHistoryCard } from '@/components/pages/home/dividend-history-chart'
import { FormCard } from '@/components/pages/home/form-card'
import { PriceHistoryCard } from '@/components/pages/home/price-history-card'
import { StocksCards } from '@/components/pages/home/stocks-cards'
import { SuggestionsCard } from '@/components/pages/home/suggestions-card'
import { TickersTable } from '@/components/pages/home/tickers-table'

// grid-cols-3
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
          <DividendHistoryCard />
          <PriceHistoryCard />
        </div>
      </div>
    </>
  )
}
