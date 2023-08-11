'use client'

import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { portfoliosInitialState } from '@/storage/portfoliosInitialState'
import { tickersInitialState } from '@/storage/tickersInitialState'
import { portfoliosReducer } from '@/reducers/portfoliosReducer'
import { tickersReducer } from '@/reducers/tickersReducer'
import { DataContextType } from '@/@types/ContextTypes'

export const DataContext = createContext<DataContextType>({} as DataContextType)

export function DataProvider({ children }: { children: ReactNode }) {
  const [tickers, dispatchTickers] = useReducer(
    tickersReducer,
    tickersInitialState,
  )
  const [portfolios, dispatchPortfolios] = useReducer(
    portfoliosReducer,
    portfoliosInitialState,
  )

  useEffect(() => {
    // dispatch({ type: 'LOAD' });
  }, [])

  return (
    <DataContext.Provider
      value={{
        tickers,
        dispatchTickers,
        portfolios,
        dispatchPortfolios,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
