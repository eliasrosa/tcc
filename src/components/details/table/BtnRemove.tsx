'use client'

import { useTickers } from '@/hooks/useTickers'
import { Button, Icon } from '@tremor/react'
import { Ticker } from '@/@types/TickersTypes'
import { Trash } from '@phosphor-icons/react'

type Props = {
  ticker: Ticker,
}

export function BtnRemove({ ticker }: Props) {
  const { removeTicker } = useTickers()
  
  return (
    <Button size='sm' variant='light' className='outline-none' onClick={() => removeTicker(ticker)}>
      <Icon icon={Trash} className='text-red-500' />
    </Button>
  )
}
