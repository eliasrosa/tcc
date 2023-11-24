import {
  Table as TremorTable,
  TableBody,
  TableHead,
  TableRow,
} from '@tremor/react'

import { HeaderCell } from './HeaderCell'
import { Row } from './Row'
import { SimulatorResult } from '@/helpers/simulatorCalculate'

export interface TableProps {
  results: SimulatorResult[]
}

export function Table({ results }: TableProps) {
  return (
    <TremorTable>
      <TableHead>
        <TableRow>
          <HeaderCell title="Mês" />
          <HeaderCell title="Juros" />
          <HeaderCell title="Total Investido" />
          <HeaderCell title="Total Juros" />
          <HeaderCell title="Total Acumulado" />
        </TableRow>
      </TableHead>
      <TableBody>
        {results.map((result) => (
          <Row key={result.mes} result={result} />
        ))}
      </TableBody>
    </TremorTable>
  )
}
