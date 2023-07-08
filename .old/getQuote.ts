import { brAPI } from './api/brapi'
import { investidor10 } from './api/investidor10'

export const getQuote = async (ticket: string) => {
  const result = await brAPI(ticket)
  const company = await investidor10(ticket)

  return { ...result, ...company }
}
