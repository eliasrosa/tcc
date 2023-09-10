'use client'

import { ReactNode } from 'react'
import { SWRConfig } from 'swr'

export function SwrProvider({ children }: { children: ReactNode }) {
  const provider = () => new Map()

  return (
    <SWRConfig
      value={{
        provider,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        errorRetryCount: 0,
        // onErrorRetry() {},
      }}
    >
      {children}
    </SWRConfig>
  )
}
