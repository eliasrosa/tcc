'use client'

import { TickersContextType } from '@/@types/TickersTypes'
import { TickersContext } from '@/context/TickersProvider'
import { InfoHeader } from './InfoHeader'
import { Card } from '@tremor/react'
import { useContext } from 'react'
import { TableTickers } from '@/components/TableTickers'

type Props = {
  portfolioId: string
  portfolioName: string
}

export function InfoTable({ portfolioId, portfolioName }: Props) {
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
      <TableTickers tickers={tickers} />
    </Card>
  )
}
