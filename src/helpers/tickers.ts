import { Ticker } from "@/@types/TickersTypes"
import { brAPI } from "./brapi"

interface TickerLoaded  extends Ticker{
  currency: string
  price: number
  pvp: number
  dy: number
  lastDividend: number
}

export const getTicker = async (ticker: Ticker): Promise<TickerLoaded> => {
  // const result = await brAPI(ticker.ticker)
  console.log('getTicker: ' + ticker.ticker);
  
  return {
    ...ticker,
    currency: "BRL",
    price: 10.71,
    pvp: 1.06,
    dy: 12.32,
    lastDividend: 0.12,
  }
}