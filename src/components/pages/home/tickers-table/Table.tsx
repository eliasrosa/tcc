'use client'

import {
  Table as TremorTable,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react'

import { usePortfolios } from '@/hooks/usePortfolios'
import { Row } from './Row'

export function Table() {
  const { tickers } = usePortfolios()

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
