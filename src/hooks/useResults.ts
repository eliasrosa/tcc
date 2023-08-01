import { Result } from "@/@types/ResultsTypes";
import { useData } from "./useData";

export const useResult = (ticker: string): Result => {
  const { results } = useData()

  const result = results.find((r) => r.ticker === ticker)

  if(!result) {
    return {
      ticker,
      dy: 0,
      pvp: 0,
      price: 0,
      lastDividend: 0,
      requestedAt: 0,
      isError: false,
      isLoading: true,
      dividendHistory: [],
      priceHistory: [],
    }
  }

  return result
}