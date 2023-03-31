import { ReactNode } from 'react'
import Sidebar from './sidebar'

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
        <h1>POC</h1>
        <Sidebar />
        <div>{children}</div>
      </body>
    </html>
  )
}
