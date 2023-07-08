'use client'

import { Ticker } from '@/@types/TickersTypes'
import { getTicker } from '@/helpers/tickers'
import {
  TableCell,
  TableRow,
} from '@tremor/react'

type Props = {
  ticker: Ticker,
}

export async function RowTicker({ ticker }: Props) {
  const data = await getTicker(ticker)

  return (
    <TableRow>
      <TableCell className='text-center'>{data.ticker}</TableCell>
      <TableCell className='text-center'>{data.price}</TableCell>
      <TableCell className='text-center'>{data.pvp}</TableCell>
      <TableCell className='text-center'>{data.dy}</TableCell>
      <TableCell className='text-center'>{data.lastDividend}</TableCell>
    </TableRow>
  )
}
