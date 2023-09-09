'use client'

import { ReactNode, createContext, useState } from 'react'
import { SidebarContextType } from '@/@types/ContextTypes'

export const SidebarContext = createContext<SidebarContextType>(
  {} as SidebarContextType,
)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}
