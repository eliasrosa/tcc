'use client'

import { ReactNode, createContext, useState } from 'react'
import {
  AddTickerResponse,
  Ticker,
  TickersContextType,
} from '@/@types/TickersTypes'
import { uniqWith } from 'lodash'
import { getLocalStorage, setLocalStorage } from '@/helpers/localStorage'

export const TickersContext = createContext<TickersContextType | null>(null)

export function TickersProvider({ children }: { children: ReactNode }) {
  const [tickers, setTickers] = useState<Ticker[]>(
    getLocalStorage('tickers', []),
  )

  const listByWalletId = (id: string) => {
    return tickers.filter((t) => t.walletId === id)
  }

  const addTickers = (
    tickersList: string[],
    walletsList: string[],
  ): AddTickerResponse => {
    const newTickers: Ticker[] = []

    walletsList.forEach((walletId) => {
      tickersList.forEach((ticker) => {
        newTickers.push({ ticker, walletId, quantity: 0 })
      })
    })

    const tickersFiltred = uniqWith([...tickers, ...newTickers], (a, b) => {
      return a.ticker === b.ticker && a.walletId === b.walletId
    })

    setLocalStorage('tickers', tickersFiltred)
    setTickers(tickersFiltred)

    return {
      status: 'success',
      message: `Ticker '${tickers}' adicionado com sucesso!`,
    }
  }

  return (
    <TickersContext.Provider value={{ tickers, addTickers, listByWalletId }}>
      {children}
    </TickersContext.Provider>
  )
}
