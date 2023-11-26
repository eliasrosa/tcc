import { useContext } from 'react'

import { SidebarContextType } from '@/@types/ContextTypes'
import { SidebarContext } from '@/providers/SidebarProvider'

export const useSidebar = () => {
  const context = useContext(SidebarContext) as SidebarContextType

  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }

  return context
}
