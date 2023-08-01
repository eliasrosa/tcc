'use client'

import { usePortfolios } from '@/hooks/usePortfolios'
import { Cards } from './Cards'
import { Title } from '@tremor/react'

export function Info() {
  const { listPortfolios } = usePortfolios()

  return (
    <section className="mt-8">
      <Title className="border-b border-b-gray-500">Minhas Carteiras</Title>

      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {listPortfolios().map((g) => (
          <Cards key={g.id} portfolioId={g.id} portfolioName={g.name} />
        ))}
      </div>
    </section>
  )
}
