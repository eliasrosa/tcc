import { ReactNode, Suspense } from 'react'
// import { ToastContainer } from 'react-toastify'
import { Inter } from 'next/font/google'

import { config } from '@/config'
import { Header } from '@/components/layout/Header'
import { Main } from '@/components/layout/Main'
import { TickersProvider } from '@/context/TickersProvider'
import { PortfoliosProvider } from '@/context/PortfoliosProvider'

// import 'react-toastify/dist/ReactToastify.css'
import '../styles/output.css'

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
        <PortfoliosProvider>
          <TickersProvider>
            <Header />
            <Main>
              <Suspense fallback="...">{children}</Suspense>
            </Main>
          </TickersProvider>
        </PortfoliosProvider>
        {/* <ToastContainer /> */}
      </body>
    </html>
  )
}
