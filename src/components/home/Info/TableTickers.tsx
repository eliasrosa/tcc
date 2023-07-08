'use client'

import { TickersContextType } from '@/@types/TickersTypes'
import { TickersContext } from '@/context/TickersProvider'
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from '@tremor/react'
import { useContext } from 'react'

type Props = {
  walletId: string
  walletName: string
}

export function TableTickers(props: Props) {
  const { listByWalletId } = useContext(TickersContext) as TickersContextType

  return (
    <Card>
      <Title>{props.walletName}</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Papel</TableHeaderCell>
            <TableHeaderCell>Valor Atual</TableHeaderCell>
            <TableHeaderCell>PV/P</TableHeaderCell>
            <TableHeaderCell>Dividend Yield</TableHeaderCell>
            <TableHeaderCell>Últ. Rendimento</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listByWalletId(props.walletId).map((t) => (
            <TableRow key={t.ticker}>
              <TableCell>{t.ticker}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
