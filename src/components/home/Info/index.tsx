'use client'

import { useContext } from 'react'
import { Title } from '@tremor/react'

import { PortfoliosContext } from '@/context/PortfoliosProvider'
import { PortfoliosContextType } from '@/@types/PortfoliosTypes'
import { TableTickers } from './TableTickers'

export function Table() {
  const { listPortfolios } = useContext(PortfoliosContext) as PortfoliosContextType

  return (
    <section className="mt-8">
      <Title className="border-b border-b-gray-500">Minhas Carteiras</Title>

      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {listPortfolios().map((g) => (
          <TableTickers key={g.id} portfolioId={g.id} portfolioName={g.name} />
        ))}
      </div>
    </section>
  )
}
