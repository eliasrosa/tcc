import { ReactNode } from 'react'

// flex flex-col flex-grow lg:-ml-64

export function Main({ children }: { children: ReactNode }) {
  return (
    <main className="main transition-all duration-150 ease-in">
      <div className="main-content flex flex-col flex-grow p-4">{children}</div>
    </main>
  )
}
