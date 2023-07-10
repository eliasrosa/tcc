'use client'

import { Ticker, TickerLoaded, TickersContextType } from '@/@types/TickersTypes'
import { TickersContext } from '@/context/TickersProvider'
import { getTicker, tickerResultDefault } from '@/helpers/tickers'
import { Trash } from '@phosphor-icons/react'
import {
  Button,
  Icon,
  TableCell,
  TableRow,
} from '@tremor/react'
import { useContext, useEffect, useState } from 'react'
import { TableTickersRowFull } from './TableTickersRowFull'

type Props = {
  ticker: Ticker,
  showMode?: 'full'
}

export function TableTickersRow({ ticker, showMode }: Props) {

  const { removeTicker } = useContext(TickersContext) as TickersContextType

  const [data, setData] = useState<TickerLoaded>({ ...ticker, ...tickerResultDefault })
  const [loading, setLoading] = useState(true)

  const handleRemoveTicker = (ticker: Ticker) => {
    console.log('remove ticker...', ticker);
    removeTicker(ticker)
  }

  useEffect(() => {
    getTicker(ticker)
      .then(data => setData(data))
      .finally(() => setLoading(false))

  }, [])

  if (loading) {
    return (
      <TableRow>
        <TableCell colSpan={5} className='text-left md:text-center'>Carrgando ...</TableCell>
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
        {showMode === 'full' && (<TableTickersRowFull ticker={data} />)}
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

      {showMode === 'full' && (<TableTickersRowFull ticker={data} />)}
    </TableRow>
  )
}
