'use client'

import { Button } from '@tremor/react'
import { Logo } from '../common/Logo'
import { List } from '@phosphor-icons/react'
import { useSidebar } from '@/hooks/useSidebar'

export function HeaderMobile() {
  const { toggleSidebar } = useSidebar()

  return (
    <div className="bg-blue-500 lg:hidden">
      <Button
        onClick={toggleSidebar}
        data-testid="sidebar-button-overlay"
        variant="light"
        className="m-2"
      >
        <List className="text-xl text-white" />
      </Button>
      <Logo />
    </div>
  )
}
