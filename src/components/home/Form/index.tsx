'use client'

import { TickersContextType } from '@/@types/TickersTypes'
import { TickersContext } from '@/context/TickersProvider'
import { Button, Title } from '@tremor/react'
import { useContext, useState } from 'react'
import { SelectTickers } from './SelectTickers'
import { SelectWallets } from './SelectWallets'

export function Form() {
  const { addTickers } = useContext(TickersContext) as TickersContextType

  const [walletSelected, setWalletSelected] = useState<string[]>([])
  const [tickersSelected, setTickersSelected] = useState<string[]>([])

  const onTickersSelected = (value: any) => setTickersSelected(value)
  const onWalletsSelected = (value: any) => setWalletSelected(value)

  const onSubmit = () => {
    if (!walletSelected.length || !tickersSelected.length) {
      console.error('Wallet selection')
      return
    }

    addTickers(tickersSelected, walletSelected)
  }

  return (
    <section>
      <Title className="border-b border-b-gray-500">
        Análise de Fundos Imobiliários
      </Title>

      <SelectTickers onValueChange={onTickersSelected} />

      <SelectWallets onValueChange={onWalletsSelected} />

      <Button onClick={onSubmit}>
        Adicionar
      </Button>
    </section>
  )
}
