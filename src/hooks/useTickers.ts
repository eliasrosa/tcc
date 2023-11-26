import { Ticker } from '@/@types/TickersTypes'
import { useData } from './useData'
import { toast } from 'react-toastify'

export const useTickers = () => {
  const { tickers, dispatchTickers } = useData()

  return {
    addTickers: (tickersList: string[], portfoliosList: string[]) => {
      if (!tickersList.length) {
        toast(`Nenhum ativo selecionado!`, { type: 'error' })
        return
      }

      if (tickersList.length === 1) {
        toast(`${tickersList[0]} adicionado com sucesso!`, { type: 'success' })
      } else {
        toast(`${tickersList.length} ativos adicionados com sucesso!`, {
          type: 'success',
        })
      }

      dispatchTickers({
        type: 'INSERT',
        payload: { tickersList, portfoliosList },
      })
    },

    removeTicker: (ticker: Ticker) => {
      toast(`${ticker.ticker} removido com sucesso!`, { type: 'success' })
      dispatchTickers({ type: 'REMOVE', payload: ticker })
    },

    setVisibility: (ticker: Ticker) => {
      dispatchTickers({ type: 'SET_VISIBILITY', payload: ticker })
    },

    listByPortfolioId: (id: string) => {
      return tickers.filter((t) => t.portfolioId === id)
    },
  }
}
