'use client'

import { Ticker } from '@/@types/TickersTypes'
import {
  Table as TremorTable,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react'

import { Row } from './Row'

type Props = {
  tickers: Ticker[]
}

export function Table({ tickers }: Props) {
  return (
    <TremorTable>
      <TableHead>
        <TableRow>
          <TableHeaderCell className="text-center"></TableHeaderCell>
          <TableHeaderCell className="text-center">Papel</TableHeaderCell>
          <TableHeaderCell className="text-center">Valor Atual</TableHeaderCell>
          <TableHeaderCell className="text-center">PV/P</TableHeaderCell>
          <TableHeaderCell className="text-center">DY</TableHeaderCell>
          <TableHeaderCell className="text-center">Últ. Rend.</TableHeaderCell>
          <TableHeaderCell className="text-center">
            Rend. Últ. 12M
          </TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tickers.map((t) => (
          <Row key={t.ticker} ticker={t} />
        ))}
      </TableBody>
    </TremorTable>
  )
}
