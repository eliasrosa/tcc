export interface Ticker {
  ticker: string
  portfolioId: string
  quantity: number
  isHidden: boolean
}

export interface TickerData {
  ticker: string
  dy12: number
  dividend12: number
  pvp: number
  price: number
  lastDividend: number
  dividendHistory: any[]
  dailyPriceHistory: any[]
  monthlyPriceHistory: any[]
}

export interface TickerResult extends Ticker {
  data: TickerData
}

export interface TickerFecth {
  isLoading: boolean
  isError: boolean
  data: TickerData
}
