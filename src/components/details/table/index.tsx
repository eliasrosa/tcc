import { Ticker } from '@/@types/TickersTypes'
import {
  Table as TableReact,
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
    <TableReact>
      <TableHead>
        <TableRow>
          <TableHeaderCell className='text-center'>Papel</TableHeaderCell>
          <TableHeaderCell className='text-center'>Valor Atual</TableHeaderCell>
          <TableHeaderCell className='text-center'>PV/P</TableHeaderCell>
          <TableHeaderCell className='text-center'>Dividend Yield</TableHeaderCell>
          <TableHeaderCell className='text-center'>Últ. Rendimento</TableHeaderCell>
          <TableHeaderCell className='text-center'></TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tickers.map((t) => (
          <Row key={t.ticker} ticker={t} />
        ))}
      </TableBody>
    </TableReact>
  )
}
