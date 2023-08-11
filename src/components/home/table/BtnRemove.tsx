'use client'

import { useTickers } from '@/hooks/useTickers'
import { Button, Icon } from '@tremor/react'
import { Ticker } from '@/@types/TickersTypes'
import { Trash } from '@phosphor-icons/react'

type Props = {
  ticker: Ticker
  isDisabled?: boolean
}

export function BtnRemove({ ticker, isDisabled = false }: Props) {
  const { removeTicker } = useTickers()

  return (
    <Button
      disabled={isDisabled}
      size="sm"
      variant="light"
      className="outline-none"
      onClick={() => removeTicker(ticker)}
    >
      <Icon icon={Trash} className="text-red-500" />
    </Button>
  )
}
