import { ReactNode, Suspense } from 'react'
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
    <html lang="pt-BR" className="bg-gray-50">
      <body>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="grow p-4">
            <Suspense fallback="...">{children}</Suspense>
          </div>
        </div>
      </body>
    </html>
  )
}
