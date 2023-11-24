'use client'

import { TableCell, TableRow } from '@tremor/react'
import { SimulatorResult } from '@/helpers/simulatorCalculate'
import { toCurrency } from '@/helpers/currency'
import { round } from 'lodash'

interface Props {
  result: SimulatorResult
}

export function Row({ result }: Props) {
  return (
    <TableRow className="hover:bg-blue-200">
      <TableCell className="text-center">{result.mes}</TableCell>
      <TableCell className="text-center">
        {round(result.interest, 2)}%
      </TableCell>
      <TableCell className="text-center">
        {toCurrency(result.totalInvested)}
      </TableCell>
      <TableCell className="text-center">
        {toCurrency(result.totalInterest)}
      </TableCell>
      <TableCell className="text-center">
        {toCurrency(result.totalAccumulated)}
      </TableCell>
    </TableRow>
  )
}
