import { Ticker } from "./TickersTypes"

export interface Result{
  ticker: string
  dy: number
  pvp: number
  price: number
  requestedAt: number
  lastDividend: number
  isError: boolean
  isLoading: boolean
}

export interface ResultsContextType {
  results: Result[]
  get: (ticker: string) => Result
  load: (tickers: Ticker[]) => Promise<void>
}
