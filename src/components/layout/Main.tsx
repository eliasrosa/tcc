'use client'

import { cn } from '@/helpers/utils'
import { useSidebar } from '@/hooks/useSidebar'
import { ReactNode } from 'react'

export function Main({ children }: { children: ReactNode }) {
  const { isOpen, toggleSidebar } = useSidebar()

  return (
    <>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className={cn(
            'fixed cursor-pointer top-0 left-0 w-screen h-screen bg-gray-900 z-40 opacity-75',
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
