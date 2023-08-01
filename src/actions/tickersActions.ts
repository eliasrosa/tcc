import { Ticker } from "@/@types/TickersTypes"
import { DataType } from "@/@types/DataTypes"
import { findIndex, uniqWith } from 'lodash'

const defaultValues: Ticker = {
  ticker: '',
  portfolioId: '',
  quantity: 0,
  isHidden: false,
}

export const tickersActions = {
  insert: (state: DataType, { tickersList, portfoliosList }: any): DataType => {
    const { tickers } = state

    const newTickers: Ticker[] = []
    portfoliosList.forEach((portfolioId: string) => {
      tickersList.forEach((ticker: string) => {
        newTickers.push({ ...defaultValues, ticker, portfolioId })
      })
    })

    const tickersFiltred = uniqWith([...tickers, ...newTickers], (a, b) => {
      return a.ticker === b.ticker && a.portfolioId === b.portfolioId
    })

    return { ...state, tickers: tickersFiltred }
  },

  remove: (state: DataType, { ticker, portfolioId }: any): DataType => {
    const { tickers } = state

    const index = findIndex(tickers, { ticker, portfolioId })
    tickers.splice(index, 1)

    return { ...state, tickers }
  },

  setVisibility: (state: DataType, { ticker, portfolioId, isHidden }: any): DataType => {
    const { tickers } = state

    const newTickers = tickers.map((t) => {
      if (t.ticker === ticker && t.portfolioId === portfolioId) {
        return { ...t, isHidden }
      }

      return t
    })

    return { ...state, tickers: newTickers }
  }
}
