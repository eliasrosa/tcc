'use client'

import { Title } from "@tremor/react"
import { InfoHeaderButtons } from "./InfoHeaderButtons"

type Props = {
  portfolioId: string
  portfolioName: string
}

export function InfoHeader({ portfolioId, portfolioName }: Props) {
  return (
    <div className="flex justify-between">
      <Title className='pl-3 border-solid border-l-4 border-blue-500'>{portfolioName}</Title>
      <InfoHeaderButtons portfolioId={portfolioId} />
    </div>
  )
}