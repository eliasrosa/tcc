'use client'

import { ReactNode } from 'react'
import { Card } from '@tremor/react'
import { usePortfolios } from '@/hooks/usePortfolios'

export function TickersCard({ children }: { children: ReactNode }) {
  const { tickers } = usePortfolios()

  if (!tickers.length) {
    return (
      <Card>
        <p className="text-sm text-gray-500 mt-2">Sem ativos nesta carteira</p>
      </Card>
    )
  }

  return <Card className="p-4">{children}</Card>
}
