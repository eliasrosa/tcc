'use client'

import { Button, Title } from '@tremor/react'
import { useState } from 'react'
import { SelectTickers } from './SelectTickers'
import { SelectPortfolios } from './SelectPortfolios'
import { useTickers } from '@/hooks/useTickers'

export function Form() {
  const { addTickers } = useTickers()

  const [portfolioSelected, setPortfolioSelected] = useState<string[]>([])
  const [tickersSelected, setTickersSelected] = useState<string[]>([])

  const onTickersSelected = (value: string[]) => setTickersSelected(value)
  const onPortfoliosSelected = (value: string[]) => setPortfolioSelected(value)

  const onSubmit = () => {
    if (!portfolioSelected.length || !tickersSelected.length) {
      return console.error('Portfolio selection')
    }

    addTickers(tickersSelected, portfolioSelected)
  }

  return (
    <section>
      <Title className="border-b border-b-gray-500 mb-4">
        Análise de Fundos Imobiliários
      </Title>

      <div className="space-y-4">
        <SelectTickers onValueChange={onTickersSelected} />
        <SelectPortfolios onValueChange={onPortfoliosSelected} />

        <Button onClick={onSubmit}>Adicionar</Button>
      </div>
    </section>
  )
}
