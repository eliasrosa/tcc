export interface Ticker {
  ticker: string
  portfolioId: string
  quantity: number
}

export interface TickerActionResponse {
  status: 'success' | 'error'
  message: string
}

interface TickerLoaded  extends Ticker{
  price: number
  pvp: number
  dy: number
  lastDividend: number
  isError: boolean
  messageError: string | null
}

export interface TickersContextType {
  tickers: Ticker[]
  addTickers: (tickers: string[], portfolios: string[]) => TickerActionResponse
  removeTicker: (ticker: Ticker) => TickerActionResponse
  listByPortfolioId: (id: string) => Ticker[]
}
