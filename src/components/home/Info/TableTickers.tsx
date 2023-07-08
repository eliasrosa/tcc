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
import { RowTicker } from './RowTicker'

type Props = {
  walletId: string
  walletName: string
}

export function TableTickers({ walletId, walletName }: Props) {
  const { listByWalletId } = useContext(TickersContext) as TickersContextType
  
  return (
    <Card>
      <Title className='pl-2 border-solid border-l-4 border-blue-500'>{walletName}</Title>
      <Table className="mt-2">
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
          {listByWalletId(walletId).map((t) => (
             // @ts-expect-error Server Component
            <RowTicker key={t.ticker} ticker={t} />
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
