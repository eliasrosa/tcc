import { Ticker } from "./TickersTypes"

export interface DividendHistory {
  date: string
  value: number
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
  dividendHistory: DividendHistory[]
}

export interface ResultsContextType {
  results: Result[]
  get: (ticker: string) => Result
  load: (tickers: Ticker[]) => Promise<void>
}
