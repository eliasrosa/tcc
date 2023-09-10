import { TickerService } from '@/services/TickerService'
import { NextResponse } from 'next/server'

type ParamsType = {
  params: {
    ticker: string
  }
}

export const GET = async (request: Request, { params }: ParamsType) => {
  const data = await new TickerService(params.ticker).fetch()
  return NextResponse.json(data)
}
