/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { ReactNode, createContext, useEffect, useState } from 'react'
import { PortfolioContextType } from '@/@types/ContextTypes'
import { Ticker } from '@/@types/TickersTypes'
import { useTickers } from '@/hooks/useTickers'
import { useData } from '@/hooks/useData'
import { portfoliosInitialState } from '@/storage/portfoliosInitialState'

export const PortfolioContext = createContext<PortfolioContextType>(
  {} as PortfolioContextType,
)

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const { tickers } = useData()
  const { listByPortfolioId } = useTickers()
  const [portfolioTickers, setPortfolioTickers] = useState<Ticker[]>([])

  const portfolioId = portfoliosInitialState[0].id

  useEffect(() => {
    const tickers = listByPortfolioId(portfolioId)
    setPortfolioTickers(tickers)
  }, [tickers])

  return (
    <PortfolioContext.Provider
      value={{
        portfolioId,
        tickers: portfolioTickers,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}
