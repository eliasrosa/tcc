import { Ticker } from "@/@types/TickersTypes"
import { useData } from "./useData"

export const useTickers = () => {
  const { data, dispatch } = useData()

  return {
    addTickers: (tickersList: string[], portfoliosList: string[]) => {
      dispatch({
        type: 'TICKERS_INSERT', payload: {
          tickersList, portfoliosList
        }
      })
    },

    removeTicker: ({ ticker, portfolioId }: Ticker) => {
      dispatch({
        type: 'TICKERS_REMOVE', payload: {
          ticker, portfolioId
        }
      })
    },

    setVisibility: ({ ticker, portfolioId, isHidden }: Ticker) => {
      dispatch({
        type: 'TICKERS_SET_VISIBILITY', payload: {
          ticker, 
          portfolioId, 
          isHidden: !isHidden
        }
      })
    },

    listByPortfolioId: (id: string) => {
      return data.tickers.filter((t) => t.portfolioId === id)
    }
  }
}