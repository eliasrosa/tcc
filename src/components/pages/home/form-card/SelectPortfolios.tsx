'use client'

import { MultiSelectBox, MultiSelectBoxItem } from '@tremor/react'
import { usePortfolios } from '@/hooks/usePortfolios'
import { Folders } from '@phosphor-icons/react'

type SelectPortfoliosProps = {
  onValueChange: (value: string[]) => void
}

export function SelectPortfolios(props: SelectPortfoliosProps) {
  const { listPortfolios } = usePortfolios()

  return (
    <div>
      <MultiSelectBox
        icon={Folders}
        className="w-4/5 md:w-96"
        onValueChange={props.onValueChange}
        placeholder="Selecione as carteiras..."
      >
        {listPortfolios().map((g) => {
          return <MultiSelectBoxItem key={g.id} value={g.id} text={g.name} />
        })}
      </MultiSelectBox>
    </div>
  )
}
