'use client'

import { Title } from "@tremor/react"
import { Buttons } from "./Buttons"

type Props = {
  portfolioId: string
  portfolioName: string
}

export function Header({ portfolioId, portfolioName }: Props) {
  return (
    <div className="flex justify-between">
      <Title className='pl-3 border-solid border-l-4 border-blue-500'>{portfolioName}</Title>
      <Buttons portfolioId={portfolioId} />
    </div>
  )
}