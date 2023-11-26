export interface Ticker {
  ticker: string
  portfolioId: string
  quantity: number
  isHidden: boolean
}

export interface TickerData {
  ticker: string
  dy12: number
  pvp: number
  price: number
  dividend12: number
  lastDividend: number
  pricesHistory: any[]
  dividendsHistory: any[]
}

export interface TickerResult extends Ticker {
  data: TickerData
}
