'use client'

import { useContext } from 'react'
import { Title } from '@tremor/react'

import { WalletsContext } from '@/context/WalletsProvider'
import { WalletsContextType } from '@/@types/WalletsTypes'
import { TableTickers } from './TableTickers'

export function Table() {
  const { listWallets } = useContext(WalletsContext) as WalletsContextType

  return (
    <section>
      <Title className="border-b border-b-gray-500">Minhas Carteiras</Title>

      {listWallets().map((g) => {
        return (
          <div key={g.id} className="mt-8">
            <TableTickers walletId={g.id} walletName={g.name} />
          </div>
        )
      })}
    </section>
  )
}
