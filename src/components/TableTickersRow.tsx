'use client'

import { Ticker } from '@/@types/TickersTypes'
import { toCurrency } from '@/helpers/currency'
import { useResult } from '@/hooks/useResults'
import { TableCell, TableRow } from '@tremor/react'

type Props = {
  ticker: Ticker,
}

export function TableTickersRow({ ticker }: Props) {
  const { dy, isError, isLoading, lastDividend, price } = useResult(ticker.ticker)

  if (isError || isLoading) {
    return (
      <TableRow>
        <TableCell className='text-center text-red-500'>{ticker.ticker}</TableCell>
        <TableCell className='text-center'>-</TableCell>
        <TableCell className='text-center'>-</TableCell>
        <TableCell className='text-center'>-</TableCell>
        <TableCell className='text-center'>-</TableCell>
      </TableRow>
    )
  }

  return (
    <TableRow>
      <TableCell className='text-center'>{ticker.ticker}</TableCell>
      <TableCell className='text-center'>{toCurrency(price)}</TableCell>
      <TableCell className='text-center'>-</TableCell>
      <TableCell className='text-center'>{toCurrency(dy)}</TableCell>
      <TableCell className='text-center'>{toCurrency(lastDividend)}</TableCell>
    </TableRow>
  )
}
