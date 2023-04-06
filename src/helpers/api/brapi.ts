import { Result, ResultQuotes } from '@/@types/QuotesTypes'

export const brAPI = async (ticket: string): Promise<Result> => {
  const response = await fetch(
    `https://brapi.dev/api/quote/${ticket}?range=max&interval=1m&fundamental=true&dividends=true`,
    {
      next: {
        revalidate: 5,
      },
    },
  )

  const quotes: ResultQuotes = await response.json()

  if (!quotes || !quotes.results[0]) {
    throw new Error('Nenhum resultado foi encontrado!')
  }

  return quotes.results[0]
}
