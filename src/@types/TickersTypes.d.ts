export interface TickerData{
  price: number
  pvp: number
  dy: number
  lastDividend: number
}

export interface Ticker {
  portfolioId: string
  isHidden: boolean
  quantity: number
  ticker: string
}

export interface TickerActionResponse {
  status: 'success' | 'error'
  message: string
}

export interface TickersContextType {
  tickers: Ticker[]
  addTickers: (tickers: string[], portfolios: string[]) => Promise<TickerActionResponse>
  removeTicker: (ticker: Ticker) => TickerActionResponse
  updateTicker: (ticker: Ticker) => TickerActionResponse
  listByPortfolioId: (id: string) => Ticker[]
}
