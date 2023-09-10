import { TickerFetchAPI } from '@/helpers/TickerFetchAPI'
import { NextResponse } from 'next/server'

type ParamsType = {
  params: {
    ticker: string
  }
}

export const GET = async (request: Request, { params }: ParamsType) => {
  const data = await new TickerFetchAPI(params.ticker).fetch()
  return NextResponse.json(data)
}
