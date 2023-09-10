'use client'

import { Button, ListItem, List } from '@tremor/react'
import { useEffect, useState } from 'react'
import { Suggestion } from '@/@types/SuggestionsTypes'
import { usePortfolios } from '@/hooks/usePortfolios'
import { ArrowsClockwise } from '@phosphor-icons/react'
import { useTickers } from '@/hooks/useTickers'
import { Card } from '@/components/common/Card'

export function SuggestionsCard() {
  const { addTickers } = useTickers()
  const { getSuggestions, portfolioId } = usePortfolios()
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])

  const onReload = () => {
    setSuggestions(getSuggestions())
  }

  const addTicker = (ticker: string) => {
    addTickers([ticker], [portfolioId])

    const newSuggestions = suggestions.filter((s) => s.ticker !== ticker)

    if (newSuggestions.length) {
      return setSuggestions(newSuggestions)
    }

    onReload()
  }

  const ReloadBottom = () => (
    <Button size="xs" onClick={onReload} variant="secondary">
      <ArrowsClockwise />
    </Button>
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(onReload, [])

  return (
    <Card title="Talvez te interesse" subtitle={<ReloadBottom />}>
      <List>
        {suggestions.map((suggestion) => (
          <ListItem key={suggestion.ticker}>
            <span>{suggestion.ticker}</span>
            <span>
              <Button
                variant="light"
                onClick={() => addTicker(suggestion.ticker)}
              >
                Adicionar
              </Button>
            </span>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}
