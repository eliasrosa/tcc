import { ReactNode } from 'react'

import { DataProvider } from '@/providers/DataProvider'
import { SidebarProvider } from '@/providers/SidebarProvider'
import { PortfolioProvider } from '@/providers/PortfolioProvider'

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <DataProvider>
          <PortfolioProvider>{children}</PortfolioProvider>
        </DataProvider>
      </SidebarProvider>
    </>
  )
}
