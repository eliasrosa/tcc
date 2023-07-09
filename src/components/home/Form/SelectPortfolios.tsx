'use client'

import { MultiSelectBox, MultiSelectBoxItem } from '@tremor/react'
import { Folders } from '@phosphor-icons/react'

import { getPortfoliosStorage } from '@/storage/portfolios'

type SelectPortfoliosProps = {
  onValueChange: (value: string[]) => void
}

export function SelectPortfolios(props: SelectPortfoliosProps) {
  return (
    <div>
      <MultiSelectBox
        placeholder="Selecione as carteiras..."
        icon={Folders}
        className="w-4/5 md:w-96"
        onValueChange={props.onValueChange}
      >
        {getPortfoliosStorage().map((g) => {
          return <MultiSelectBoxItem key={g.id} value={g.id} text={g.name} />
        })}
      </MultiSelectBox>
    </div>
  )
}
