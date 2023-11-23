'use client'

import { Calculator, Wallet } from '@phosphor-icons/react'
import { SidebarMenuItem } from './SidebarMenuItem'
import { Logo } from '../common/Logo'
import { useSidebar } from '@/hooks/useSidebar'
import { cn } from '@/helpers/cn'

export function Sidebar() {
  const { isOpen } = useSidebar()

  return (
    <aside
      data-testid="sidebar"
      className={cn(
        'sidebar bg-blue-500 transition-all duration-200 ease-in fixed top-0 bottom-0 z-30 -left-64 p-2 overflow-y-auto',
        'lg:left-0 lg:relative',
        isOpen && 'left-0',
      )}
    >
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
        </ul>
      </div>
    </aside>
  )
}
