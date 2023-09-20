import { ReactNode } from 'react'

import { SwrProvider } from './SwrProvider'
import { ModalProvider } from './ModalProvider'
import { DataProvider } from '@/providers/DataProvider'
import { SidebarProvider } from '@/providers/SidebarProvider'
import { PortfolioProvider } from '@/providers/PortfolioProvider'

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <SwrProvider>
      <ModalProvider>
        <SidebarProvider>
          <DataProvider>
            <PortfolioProvider>{children}</PortfolioProvider>
          </DataProvider>
        </SidebarProvider>
      </ModalProvider>
    </SwrProvider>
  )
}
