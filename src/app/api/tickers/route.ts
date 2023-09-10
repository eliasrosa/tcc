import { TickerData } from '@/@types/TickersTypes'
import { TickerFetchAPI } from '@/helpers/TickerFetchAPI'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const tickers = (searchParams.get('tickers') || '').split(',').filter(Boolean)

  const results = await Promise.allSettled(
    tickers.map((ticker) => new TickerFetchAPI(ticker).fetch()),
  )

  const dataFiltred = results.filter(
    ({ status }) => status === 'fulfilled',
  ) as PromiseFulfilledResult<TickerData>[]

  const data = dataFiltred.map(({ value }) => value)

  return NextResponse.json(data)
}
