'use client'

import { TickersContextType } from '@/@types/TickersTypes'
import { TickersContext } from '@/context/TickersProvider'
import {
  Card,
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react'
import { useContext } from 'react'
import { RowTicker } from './RowTicker'
import { InfoHeader } from './InfoHeader'

type Props = {
  portfolioId: string
  portfolioName: string
}

export function TableTickers({ portfolioId, portfolioName }: Props) {
  const { listByPortfolioId } = useContext(TickersContext) as TickersContextType
  const tickers = listByPortfolioId(portfolioId)

  if (!tickers.length) {
    return (
      <Card>
        <InfoHeader portfolioId={portfolioId} portfolioName={portfolioName} />
        <p className='text-sm text-gray-500 mt-2'>Sem ativos nesta carteira</p>
      </Card>
    )
  }

  return (
    <Card className='p-4'>
      <InfoHeader portfolioId={portfolioId} portfolioName={portfolioName} />
      <Table className="mt-2">
        <TableHead>
          <TableRow className='text-center'>
            <TableHeaderCell className='text-center'>Papel</TableHeaderCell>
            <TableHeaderCell className='text-center'>Valor Atual</TableHeaderCell>
            <TableHeaderCell className='text-center'>PV/P</TableHeaderCell>
            <TableHeaderCell className='text-center'>Dividend Yield</TableHeaderCell>
            <TableHeaderCell className='text-center'>Últ. Rendimento</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickers.map((t) => (
            <RowTicker key={t.ticker} ticker={t} />
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
