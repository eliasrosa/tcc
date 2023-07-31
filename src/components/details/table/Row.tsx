'use client'

import { TableCell, TableRow } from '@tremor/react'
import { Ticker } from '@/@types/TickersTypes'
import { Remove } from './Remove'
import { useResult } from '@/hooks/useResults'
import { Visibility } from './Visibility'

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
          <Visibility ticker={ticker} isDisabled={true} />
          <Remove ticker={ticker} />
        </TableCell>
      </TableRow>
    )
  }

  return (
    <TableRow>
      <TableCell className='text-center'>{ticker.ticker}</TableCell>
      <TableCell className='text-center'>{price}</TableCell>
      <TableCell className='text-center'>-</TableCell>
      <TableCell className='text-center'>{dy}</TableCell>
      <TableCell className='text-center'>{lastDividend}</TableCell>

      <TableCell className='text-center'>
        <Visibility ticker={ticker} />
        <Remove ticker={ticker} />
      </TableCell>
    </TableRow>
  )
}
