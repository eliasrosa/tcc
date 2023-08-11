'use client'

import { Card } from '@tremor/react'

import { useTickers } from '@/hooks/useTickers'
import { Table } from '@/components/home/table'
import { Header } from './Header'

type Props = {
  portfolioId: string
  portfolioName: string
}

export function Cards({ portfolioId, portfolioName }: Props) {
  const { listByPortfolioId } = useTickers()
  const tickers = listByPortfolioId(portfolioId)

  if (!tickers.length) {
    return (
      <Card>
        <Header portfolioId={portfolioId} portfolioName={portfolioName} />
        <p className='text-sm text-gray-500 mt-2'>Sem ativos nesta carteira</p>
      </Card>
    )
  }

  return (
    <Card className='p-4'>
      <Header portfolioId={portfolioId} portfolioName={portfolioName} />
      <Table tickers={tickers} />
    </Card>
  )
}
