'use client'

import { Button, Card } from '@tremor/react'
import { useState } from 'react'
import { SelectTickers } from './SelectTickers'
import { useTickers } from '@/hooks/useTickers'
import { portfoliosInitialState } from '@/storage/portfoliosInitialState'
import { Title } from '@/components/common/Title'

export function FormCard() {
  const { addTickers } = useTickers()

  const [tickersSelected, setTickersSelected] = useState<string[]>([])

  const onTickersSelected = (value: string[]) => setTickersSelected(value)

  const onSubmit = () => {
    addTickers(tickersSelected, [portfoliosInitialState[0].id])
  }

  return (
    <Card>
      <Title className="mb-4">Análise de Fundos Imobiliários</Title>

      <div className="space-y-4">
        <SelectTickers onValueChange={onTickersSelected} />
        <Button onClick={onSubmit}>Adicionar</Button>
      </div>
    </Card>
  )
}
