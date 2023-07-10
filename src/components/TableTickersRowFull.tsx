'use client'

import { Ticker, TickersContextType } from '@/@types/TickersTypes'
import { TickersContext } from '@/context/TickersProvider'
import { TableCell, Button, Icon } from '@tremor/react'
import { Trash } from '@phosphor-icons/react'
import { useContext } from 'react'

type Props = {
  ticker: Ticker,
}

export function TableTickersRowFull({ ticker }: Props) {

  const { removeTicker } = useContext(TickersContext) as TickersContextType

  const handleRemoveTicker = (t: Ticker) => {
    console.log('remove ticker...', t);
    removeTicker(t)
  }

  
  return (
    <TableCell className='text-center'>
      <Button size='xs' variant='light' className='outline-none' onClick={() => handleRemoveTicker(ticker)}>
        <Icon size='xs' icon={Trash} className='text-red-500' />
      </Button>
    </TableCell>
  )
}
