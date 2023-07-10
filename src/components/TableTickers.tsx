'use client'

import { Ticker } from '@/@types/TickersTypes'
import {
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react'

import { TableTickersRow } from './TableTickersRow'

type Props = {
  tickers: Ticker[]
  showMode?: 'full' 
}

export function TableTickers({ tickers, showMode }: Props) {

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell className='text-center'>Papel</TableHeaderCell>
          <TableHeaderCell className='text-center'>Valor Atual</TableHeaderCell>
          <TableHeaderCell className='text-center'>PV/P</TableHeaderCell>
          <TableHeaderCell className='text-center'>Dividend Yield</TableHeaderCell>
          <TableHeaderCell className='text-center'>Últ. Rendimento</TableHeaderCell>

          {showMode === 'full' && (
            <TableHeaderCell className='text-center'></TableHeaderCell>
          )}
          
        </TableRow>
      </TableHead>
      <TableBody>
        {tickers.map((t) => (
          <TableTickersRow key={t.ticker} ticker={t} showMode={showMode} />
        ))}
      </TableBody>
    </Table>
  )
}
