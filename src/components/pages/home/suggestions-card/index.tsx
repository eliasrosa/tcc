'use client'

import { Button, Card, ListItem, List } from '@tremor/react'
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(onReload, [])

  const addTicker = (ticker: string) => {
    addTickers([ticker], [portfolioId])

    const newSuggestions = suggestions.filter((s) => s.ticker !== ticker)

    if (newSuggestions.length) {
      return setSuggestions(newSuggestions)
    }

    onReload()
  }

  return (
    <Card>
      <Title className="justify-between flex-row">
        Talvez te interesse!
        <Button className="" size="xs" onClick={onReload} variant="secondary">
          <ArrowsClockwise />
        </Button>
      </Title>
      <List>
        {suggestions.map((suggestion) => (
          <ListItem key={suggestion.ticker}>
            <span>{suggestion.ticker}</span>
            <span></span>
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
