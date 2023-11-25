'use client'

import { cn } from '@/helpers/cn'
import { useSidebar } from '@/hooks/useSidebar'
import { ReactNode } from 'react'

export function Main({ children }: { children: ReactNode }) {
  const { isOpen, closeSidebar } = useSidebar()

  return (
    <>
      {isOpen && (
        <div
          data-testid="sidebar-button-overlay"
          onClick={closeSidebar}
          className={cn(
            'fixed cursor-pointer top-0 left-0 w-screen h-screen bg-gray-900 z-20 opacity-75',
          )}
        />
      )}
      <main className="main transition-all duration-150 ease-in">
        <div className="main-content flex flex-col flex-grow p-4">
          {children}
        </div>
      </main>
    </>
  )
}
