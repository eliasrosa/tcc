import { StockCard } from './StockCard'

export function StocksCards() {
  return (
    <div className="gap-4 hidden md:grid md:grid-cols-1">
      <StockCard title="IBOVESPA" points={115591} percentage={-1.09} />
      <StockCard title="IFIX" points={3212} percentage={0.97} />
    </div>
  )
}
