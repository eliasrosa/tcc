import { Result, ResultQuotes } from '@/@types/QuotesTypes'

export const brAPI = async (ticket: string): Promise<Result | false> => {
  try {
    const response = await fetch(
      `https://brapi.dev/api/quote/${ticket}?range=1y&interval=1mo&fundamental=true&dividends=true`,
      {
        cache: 'force-cache',
        next: {
          revalidate: 300
        }
      }
    )

    const quotes: ResultQuotes = await response.json()

    if (!quotes || !quotes.results[0]) {
      throw new Error('Nenhum resultado foi encontrado!')
    }

    return quotes.results[0]
  } catch (error) {
    return false;
  }
}
