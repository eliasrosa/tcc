'use client'

import { Title as TitleReact } from '@tremor/react'
import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <TitleReact className="mb-4 border-b border-b-gray-500 flex justify-between">
      {children}
    </TitleReact>
  )
}
