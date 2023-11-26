import { Ticker } from '@/@types/TickersTypes'
import { config } from '@/config'
import { portfoliosInitialState } from './portfoliosInitialState'

const portfolioId = portfoliosInitialState[0].id

export const tickersInitialState: Ticker[] = [
  { ...config.defaults.ticker, portfolioId, ticker: 'XPLG11' },
  { ...config.defaults.ticker, portfolioId, ticker: 'XPML11' },
  { ...config.defaults.ticker, portfolioId, ticker: 'PVBI11' },
]
