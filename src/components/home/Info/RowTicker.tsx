'use client'

import { Ticker, TickerLoaded } from '@/@types/TickersTypes'
import { getTicker, tickerResultDefault } from '@/helpers/tickers'
import {
  TableCell,
  TableRow,
} from '@tremor/react'
import { useEffect, useState } from 'react'

type Props = {
  ticker: Ticker,
}

export function RowTicker({ ticker }: Props) {
  const [data, setData] = useState<TickerLoaded>({...ticker, ...tickerResultDefault })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTicker(ticker)
      .then(data => {
        setData(data)
        setLoading(false)
      }
    )
  }, [])

  if (loading) {
    return (
      <TableRow>
        <TableCell colSpan={5} className='text-center'>Carrgando ...</TableCell>
      </TableRow>
    )
  }

  if (data.isError) {
    return (
      <TableRow>
        <TableCell className='text-center text-red-500'>{data.ticker}</TableCell>
        <TableCell className='text-center'>-</TableCell>
        <TableCell className='text-center'>-</TableCell>
        <TableCell className='text-center'>-</TableCell>
        <TableCell className='text-center'>-</TableCell>
      </TableRow>
    )
  }

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
