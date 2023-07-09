'use client'

import { TickersContextType } from '@/@types/TickersTypes'
import { TickersContext } from '@/context/TickersProvider'
import { Button, Title } from '@tremor/react'
import { useContext, useState } from 'react'
import { SelectTickers } from './SelectTickers'
import { SelectPortfolios } from './SelectPortfolios'

export function Form() {
  const { addTickers } = useContext(TickersContext) as TickersContextType

  const [portfolioSelected, setPortfolioSelected] = useState<string[]>([])
  const [tickersSelected, setTickersSelected] = useState<string[]>([])

  const onTickersSelected = (value: any) => setTickersSelected(value)
  const onPortfoliosSelected = (value: any) => setPortfolioSelected(value)

  const onSubmit = () => {
    console.log('onSubmit...');

    if (!portfolioSelected.length || !tickersSelected.length) {
      console.error('Portfolio selection')
      // return
    }

    addTickers(tickersSelected, portfolioSelected)
  }

  return (
    <section>
      <Title className="border-b border-b-gray-500 mb-4">
        Análise de Fundos Imobiliários
      </Title>

      <div className='space-y-4'>
        <SelectTickers onValueChange={onTickersSelected} />
        <SelectPortfolios onValueChange={onPortfoliosSelected} />

        <Button onClick={onSubmit}>
          Adicionar
        </Button>
      </div>
    </section>
  )
}
