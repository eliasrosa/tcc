import { Ticker } from "@/@types/TickersTypes";
import { useResults } from "./useResults";
import { set } from "lodash";

type HistoryType = 'priceHistory' | 'dividendHistory'

export const useChart = (tickers: Ticker[]) => {
  const { getTickerResult } = useResults()

  const tickersVisibled = tickers.filter((ticker) => {
    const { isError } = getTickerResult(ticker.ticker)
    return !isError && !ticker.isHidden
  })

  return {
    getCategories: () => tickersVisibled.map((ticker) => ticker.ticker),

    getHistory: (type: HistoryType) => {
      const dataTemp: any = []

      tickers.forEach((ticker) => {
        const result = getTickerResult(ticker.ticker)

        result[type].forEach((history) => {
          set(dataTemp, [history.date, ticker.ticker], history.value)
        })
      })
    
      return Object.keys(dataTemp).map((date) => {
        return { date, ...dataTemp[date] }
      }) 
    }
  }
}
