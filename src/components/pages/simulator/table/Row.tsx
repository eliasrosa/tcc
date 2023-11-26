'use client'

import { TableCell, TableRow } from '@tremor/react'
import { SimulatorResult } from '@/helpers/simulatorCalculate'
import { toCurrency } from '@/helpers/currency'

interface Props {
  result: SimulatorResult
}

export function Row({ result }: Props) {
  return (
    <TableRow className="hover:bg-blue-200">
      <TableCell className="text-center">{result.month}</TableCell>
      <TableCell className="text-center">
        {toCurrency(result.valueReceived)}
      </TableCell>
      <TableCell className="text-center">
        {toCurrency(result.totalInvested)}
      </TableCell>
      <TableCell className="text-center">
        {toCurrency(result.totalReceived)}
      </TableCell>
      <TableCell className="text-center">
        {toCurrency(result.totalAccumulated)}
      </TableCell>
    </TableRow>
  )
}
