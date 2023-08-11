  import { ReactNode, Suspense } from 'react'
import { Inter } from 'next/font/google'

import { config } from '@/config'
import { Header } from '@/components/layout/Header'
import { Main } from '@/components/layout/Main'
import { DataProvider } from '@/providers/DataProvider'

import '../styles/output.css'
import Loading from './loading'

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = config.app.metadata

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={inter.className}
      suppressHydrationWarning={true}
    >
      <body>
        <DataProvider>
          <Header />
          <Main>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </Main>
        </DataProvider>
      </body>
    </html>
  )
}
