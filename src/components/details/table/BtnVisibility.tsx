'use client'

import { useTickers } from '@/hooks/useTickers'
import { Button, Icon } from '@tremor/react'
import { Ticker } from '@/@types/TickersTypes'
import { Eye, EyeSlash, Trash } from '@phosphor-icons/react'

type Props = {
  ticker: Ticker,
  isDisabled?: boolean,
}

export function BtnVisibility({ ticker, isDisabled = false}: Props) {
  const { setVisibility } = useTickers()

  const icon = isDisabled || ticker.isHidden ? EyeSlash : Eye

  return (
    <Button disabled={isDisabled} size='sm' variant='light' className='outline-none' onClick={() => setVisibility(ticker)}>
      <Icon icon={icon} className='' />
    </Button>
  )
}
