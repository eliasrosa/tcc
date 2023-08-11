import { Ticker } from "@/@types/TickersTypes"
import { useData } from "./useData"

export const useTickers = () => {
  const { tickers, dispatchTickers } = useData()

  return {
    addTickers: (tickersList: string[], portfoliosList: string[]) => {
      dispatchTickers({
        type: 'INSERT',
        payload: { tickersList, portfoliosList }
      })
    },

    removeTicker: (ticker: Ticker) => {
      dispatchTickers({ type: 'REMOVE', payload: ticker })
    },

    setVisibility: (ticker: Ticker) => {
      dispatchTickers({ type: 'SET_VISIBILITY', payload: ticker })
    },

    listByPortfolioId: (id: string) => {
      return tickers.filter((t) => t.portfolioId === id)
    }
  }
}