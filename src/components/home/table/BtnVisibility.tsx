'use client'

import { useTickers } from '@/hooks/useTickers'
import { Button, Icon } from '@tremor/react'
import { Ticker } from '@/@types/TickersTypes'
import { Eye, EyeClosed } from '@phosphor-icons/react'

type Props = {
  ticker: Ticker
  isDisabled?: boolean
}

export function BtnVisibility({ ticker, isDisabled = false }: Props) {
  const { setVisibility } = useTickers()
  const icon = isDisabled || ticker.isHidden ? EyeClosed : Eye

  return (
    <Button
      size="sm"
      variant="light"
      disabled={isDisabled}
      className="outline-none"
      onClick={() => setVisibility(ticker)}
    >
      <Icon icon={icon} />
    </Button>
  )
}
