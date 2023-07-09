'use client'

import { Button } from "@tremor/react"
import { PencilSimple, ChartLineUp } from '@phosphor-icons/react'
import Link from "next/link"

type Props = {
  portfolioId: string
}

export function InfoHeaderButtons({ portfolioId }: Props) {
  return (
    <div className="space-x-1">
      <Button className="text-gray-500 outline-none" icon={PencilSimple} variant="light" size="sm" title="Editar" />

      <Link href={`/portfolios/${portfolioId}/details`}>
        <Button className="text-gray-500 outline-none" icon={ChartLineUp} variant="light" size="sm" title="Analisar" />
      </Link>
    </div>
  )
}
