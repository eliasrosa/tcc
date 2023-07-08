import { ReactNode } from 'react'

export function Main({ children }: { children: ReactNode }) {
  return <div className="p-4">{children}</div>
}
