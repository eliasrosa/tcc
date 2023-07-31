'use client'

import { Card } from '@tremor/react'

import { useTickers } from '@/hooks/useTickers'
import { TableTickers } from '@/components/TableTickers'
import { InfoHeader } from './InfoHeader'

type Props = {
  portfolioId: string
  portfolioName: string
}

export function InfoTable({ portfolioId, portfolioName }: Props) {
  const { listByPortfolioId } = useTickers()
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
