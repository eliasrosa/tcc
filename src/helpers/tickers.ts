import { Ticker, TickerLoaded } from "@/@types/TickersTypes"
import { brAPI } from "./brapi"

export const getTicker = async (ticker: Ticker): Promise<TickerLoaded> => {
  // const brResultAPI = await brAPI(ticker.ticker)

  console.log('getTicker: ' + ticker.ticker)
  
  return {
    ...ticker,
    price: 10.71,
    pvp: 1.06,
    dy: 12.32,
    lastDividend: 0.12,
    isError: false,
    messageError: ''
  }
}