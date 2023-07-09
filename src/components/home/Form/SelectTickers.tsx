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
        icon={MagnifyingGlass}
        className="w-4/5 md:w-96"
        onValueChange={props.onValueChange}
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
