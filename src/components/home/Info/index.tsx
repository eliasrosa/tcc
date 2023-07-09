'use client'

import { useContext } from 'react'
import { Title } from '@tremor/react'

import { WalletsContext } from '@/context/WalletsProvider'
import { WalletsContextType } from '@/@types/WalletsTypes'
import { TableTickers } from './TableTickers'

export function Table() {
  const { listWallets } = useContext(WalletsContext) as WalletsContextType

  return (
    <section className="mt-8">
      <Title className="border-b border-b-gray-500">Minhas Carteiras</Title>

      <div className="pt-4 md:grid md:grid-cols-2 gap-4">
        {listWallets().map((g) => (
          <TableTickers key={g.id} walletId={g.id} walletName={g.name} />
        ))}
      </div>
    </section>
  )
}
