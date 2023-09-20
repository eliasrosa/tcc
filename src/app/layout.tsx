import { ReactNode, Suspense } from 'react'
import { Inter } from 'next/font/google'
import { ToastContainer, ToastContainerProps } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { config } from '@/config'
import { Sidebar } from '@/components/layout/Sidebar'
import { Main } from '@/components/layout/Main'
import { AppProvider } from '@/providers/AppProvider'

import '../styles/output.css'
import Loading from './loading'
import { HeaderMobile } from '@/components/layout/HeaderMobile'
import Modal from '@/components/common/Modal'

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = config.app.metadata

const toastConfig: ToastContainerProps = {
  position: 'bottom-right',
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  closeOnClick: true,
  pauseOnHover: true,
  theme: 'light',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={inter.className}
      suppressHydrationWarning={true}
    >
      <body className="bg-gray-50  text-gray-800">
        <AppProvider>
          <HeaderMobile />
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[16rem_1fr]">
            <Sidebar />
            <Main>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </Main>
          </div>
          <ToastContainer {...toastConfig} />
          <Modal />
        </AppProvider>
      </body>
    </html>
  )
}
