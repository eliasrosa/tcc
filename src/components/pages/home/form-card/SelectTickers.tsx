'use client'

import { MultiSelectBox, MultiSelectBoxItem } from '@tremor/react'
import { MagnifyingGlass } from '@phosphor-icons/react'

import { getFundsStorage } from '@/storage/funds'

type SelectTickersProps = {
  onValueChange: (value: string[]) => void
}

export function SelectTickers(props: SelectTickersProps) {
  return (
    <div>
      <MultiSelectBox
        placeholder="Selecione os fundos imobiliários"
        onValueChange={props.onValueChange}
        icon={MagnifyingGlass}
      >
        {getFundsStorage().map((f) => {
          return (
            <MultiSelectBoxItem
              key={f.ticker}
              value={f.ticker}
              text={`${f.ticker} - ${f.name}`}
            />
          )
        })}
      </MultiSelectBox>
    </div>
  )
}
