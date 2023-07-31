import { Result } from "@/@types/ResultsTypes";
import { config } from "@/config";

const validateRequestAt = (timestamp : number): boolean => {
  return timestamp + config.cache.time  > new Date().getTime()
}

export const getResultByCache = (ticker: string, results: Result[]): Result | false => {
  const index = results.findIndex((result) => result.ticker === ticker)

  if (index === -1 || !validateRequestAt(results[index].requestedAt)) {
    return false
  }

  return results[index]
}

