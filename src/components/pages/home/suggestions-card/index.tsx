'use client'

import { Button, ListItem, List, Card } from '@tremor/react'
import { useEffect, useState } from 'react'
import { Suggestion } from '@/@types/SuggestionsTypes'
import { usePortfolios } from '@/hooks/usePortfolios'
import { ArrowsClockwise } from '@phosphor-icons/react'
import { useTickers } from '@/hooks/useTickers'
import { Title } from '@/components/common/Title'

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(onReload, [])

  return (
    <Card>
      <Title className="justify-between">
        <span>Talvez te interesse</span>
        <Button
          size="xs"
          onClick={onReload}
          variant="secondary"
          className="text-gray-500 text-sm"
        >
          <ArrowsClockwise />
        </Button>
      </Title>
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
