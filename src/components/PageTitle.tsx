'use client'

import { Title } from "@tremor/react"
import { ReactNode } from "react"

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <Title className="mb-4 border-b border-b-gray-500 flex justify-between">
      {children}
    </Title>
  )
}
