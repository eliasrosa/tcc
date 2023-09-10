import { ReactNode } from 'react'

import { DataProvider } from '@/providers/DataProvider'
import { SidebarProvider } from '@/providers/SidebarProvider'
import { PortfolioProvider } from '@/providers/PortfolioProvider'
import { SwrProvider } from './SwrProvider'

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <SwrProvider>
      <SidebarProvider>
        <DataProvider>
          <PortfolioProvider>{children}</PortfolioProvider>
        </DataProvider>
      </SidebarProvider>
    </SwrProvider>
  )
}
