import { ReactNode } from 'react'
import Sidebar from './sidebar'
import { Header } from '@/components/layout/header'

import '../styles/output.css'

export const metadata = {
  title: {
    default: 'TCC',
    template: '%s | TCC',
  },
  description: 'UNICESUMAR - BACHARELADO EM ENGENHARIA DE SOFTWAR',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="container">
          <Header />
          <Sidebar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}
