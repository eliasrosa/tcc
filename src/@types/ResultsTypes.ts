import { Ticker } from "./TickersTypes"

export interface History {
  ticker: string
  date: string
  value: number
  timestamp: number
}

export interface Result{
  ticker: string
  dy: number
  pvp: number
  price: number
  requestedAt: number
  lastDividend: number
  isError: boolean
  isLoading: boolean
  dividendHistory: History[]
  priceHistory: History[]
}

export interface ResultsContextType {
  results: Result[]
  get: (ticker: string) => Result
  load: (tickers: Ticker[]) => Promise<void>
}
