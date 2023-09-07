'use client'

import { Calculator, Question, Wallet } from '@phosphor-icons/react'
import { SidebarMenuItem } from './SidebarMenu'
import { Logo } from '../common/Logo'

export function Sidebar() {
  return (
    <aside className="sidebar bg-blue-500 transition-all duration-150 ease-in fixed top-0 bottom-0 z-50 -left-64 p-2 overflow-y-auto lg:left-0 lg:relative">
      <div className="flex items-center justify-center h-16">
        <Logo />
      </div>

      <div className="sidebar-content px-4 py-6">
        <ul className="flex flex-col w-full">
          <SidebarMenuItem label="Minha Carteira" icon={Wallet} href="/" />
          <SidebarMenuItem
            label="Calculadora"
            icon={Calculator}
            href="/simulation"
          />
          <SidebarMenuItem label="Ajuda" icon={Question} href="/help" />
        </ul>
      </div>
    </aside>
  )
}
