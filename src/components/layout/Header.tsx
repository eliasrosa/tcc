'use client'

import { config } from '@/config'
import { List, Gear } from '@phosphor-icons/react'

export function Header() {
  return (
    <header className="bg-blue-500 shadow p-3">
      <nav className="leading-8 flex justify-between">
        <List className="text-white" size={32} />
        <h1 className="text-white text-2xl">
          {config.app.metadata.title.default}
        </h1>
        <Gear className="text-white" size={32} />
      </nav>
    </header>
  )
}
