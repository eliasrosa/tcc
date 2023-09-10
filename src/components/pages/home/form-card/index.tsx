'use client'

import { Button } from '@tremor/react'
import { useState } from 'react'
import { SelectTickers } from './SelectTickers'
import { useTickers } from '@/hooks/useTickers'
import { portfoliosInitialState } from '@/storage/portfoliosInitialState'
import { Card } from '@/components/common/Card'

export function FormCard() {
  const { addTickers } = useTickers()

  const [tickersSelected, setTickersSelected] = useState<string[]>([])

  const onTickersSelected = (value: string[]) => setTickersSelected(value)

  const onSubmit = () => {
    addTickers(tickersSelected, [portfoliosInitialState[0].id])
  }

  return (
    <Card title="Fundos Imobiliários">
      <div className="space-y-4 mt-4">
        <SelectTickers onValueChange={onTickersSelected} />
        <Button onClick={onSubmit}>Adicionar</Button>
      </div>
    </Card>
  )
}
