import { Ticker } from '@/@types/TickersTypes'
import { findIndex, uniqWith } from 'lodash'
import { config } from '@/config'

export const tickersActions = {
  insert: (state: Ticker[], { tickersList, portfoliosList }: any): Ticker[] => {
    const newTickers: Ticker[] = []
    portfoliosList.forEach((portfolioId: string) => {
      tickersList.forEach((ticker: string) => {
        newTickers.push({ ...config.defaults.ticker, ticker, portfolioId })
      })
    })

    const tickersFiltred = uniqWith([...state, ...newTickers], (a, b) => {
      return a.ticker === b.ticker && a.portfolioId === b.portfolioId
    })

    return [...tickersFiltred]
  },

  remove: (state: Ticker[], { ticker, portfolioId }: any): Ticker[] => {
    const tickers = state.filter(
      (i) => i.ticker !== ticker || i.portfolioId !== portfolioId,
    )
    return [...tickers]
  },

  update: (state: Ticker[], payload: any): Ticker[] => {
    const tickers = state.map((i) => {
      if (
        i.ticker === payload.ticker &&
        i.portfolioId === payload.portfolioId
      ) {
        return payload
      }

      return i
    })

    return [...tickers]
  },
}
