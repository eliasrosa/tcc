'use client'

import { TableCell, TableRow } from '@tremor/react'
import { Ticker } from '@/@types/TickersTypes'
import { BtnRemove } from './BtnRemove'
import { useResult } from '@/hooks/useResults'
import { BtnVisibility } from './BtnVisibility'
import { toCurrency } from '@/helpers/currency'

type Props = {
  ticker: Ticker,
}

export function Row({ ticker }: Props) {
  const { dy, isError, isLoading, lastDividend, price } = useResult(ticker.ticker)

  if (isError || isLoading) {
    return (
      <TableRow>
        <TableCell className='text-center text-red-500'>{ticker.ticker}</TableCell>
        <TableCell className='text-center'>-</TableCell>
        <TableCell className='text-center'>-</TableCell>
        <TableCell className='text-center'>-</TableCell>
        <TableCell className='text-center'>-</TableCell>
        <TableCell className='text-center'>
          <BtnVisibility ticker={ticker} isDisabled={true} />
          <BtnRemove ticker={ticker} />
        </TableCell>
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

      <TableCell className='text-center'>
        <BtnVisibility ticker={ticker} />
        <BtnRemove ticker={ticker} />
      </TableCell>
    </TableRow>
  )
}
