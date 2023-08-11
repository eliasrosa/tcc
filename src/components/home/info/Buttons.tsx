'use client'

import { PencilSimple, ChartLineUp } from '@phosphor-icons/react'
import { Icon } from "@tremor/react"
import Link from "next/link"

type Props = {
  portfolioId: string
}

export function Buttons({ portfolioId }: Props) {
  return (
    <div className="flex justify-between">
      <Link href="#" title="Editar">
        <Icon className="text-gray-500 hover:text-blue-500" icon={PencilSimple} size="sm"  />
      </Link>

      {/* <Link href={`/portfolios/${portfolioId}/details`} title="Analisar">
        <Icon className="text-gray-500 hover:text-blue-500" icon={ChartLineUp} size="sm"  />
      </Link> */}
    </div>
  )
}
