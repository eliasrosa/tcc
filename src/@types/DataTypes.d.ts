import { Portfolio } from '@/@types/PortfoliosTypes'
import { Result } from '@/@types/ResultsTypes'
import { Ticker } from '@/@types/TickersTypes'

export type ActionsFunctionsTypes =
  'LOAD' | 'CLEAR' |
  'TICKERS_UPDATE' | 'TICKERS_INSERT' | 'TICKERS_REMOVE' | 'TICKERS_SET_VISIBILITY' |
  'PORTFOLIOS_UPDATE' | 'PORTFOLIOS_INSERT' | 'PORTFOLIOS_REMOVE'

export interface DataType {
  tickers: Ticker[]
  portfolios: Portfolio[]
}

export interface ActionsType {
  type: ActionsFunctionsTypes
  payload?: any
}

export interface DataContextType {
  data: DataType
  results: Result[]
  dispatch: React.Dispatch<ActionsType>
}
