'use client'

import { MultiSelectBox, MultiSelectBoxItem } from '@tremor/react'
import { Folders } from '@phosphor-icons/react'

import { getWalletsStorage } from '@/storage/wallets'

type SelectWalletsProps = {
  onValueChange: (value: string[]) => void
}

export function SelectWallets(props: SelectWalletsProps) {
  return (
    <div>
      <MultiSelectBox
        placeholder="Selecione as carteiras..."
        icon={Folders}
        className="w-4/5 md:w-96"
        onValueChange={props.onValueChange}
      >
        {getWalletsStorage().map((g) => {
          return <MultiSelectBoxItem key={g.id} value={g.id} text={g.name} />
        })}
      </MultiSelectBox>
    </div>
  )
}
