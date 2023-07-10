'use client'

import { ReactNode, createContext, useEffect, useState } from 'react'
import {
  TickerActionResponse,
  Ticker,
  TickersContextType,
} from '@/@types/TickersTypes'
import { uniqWith } from 'lodash'

export const TickersContext = createContext<TickersContextType | null>(null)

export function TickersProvider({ children }: { children: ReactNode }) {
  const [tickers, setTickers] = useState<Ticker[]>([])

  useEffect(() => {
    console.log('loading tickers...', tickers);

    if (!tickers.length) {
      const localTickers = localStorage.getItem('tickers') || false

      if (localTickers) {
        setTickers(JSON.parse(localTickers))
      }
    }

  }, [])

  useEffect(() => {
    console.log('saving tickers...', tickers);

    const data = JSON.stringify(tickers)
    window.localStorage.setItem('tickers', data)

  }, [tickers])

  const listByPortfolioId = (id: string) => {
    return tickers.filter((t) => t.portfolioId === id)
  }

  const addTickers = (tickersList: string[], portfoliosList: string[]): TickerActionResponse => {
    const newTickers: Ticker[] = []

    portfoliosList.forEach((portfolioId) => {
      tickersList.forEach((ticker) => {
        newTickers.push({ ticker, portfolioId, quantity: 0 })
      })
    })

    const tickersFiltred = uniqWith([...tickers, ...newTickers], (a, b) => {
      return a.ticker === b.ticker && a.portfolioId === b.portfolioId
    })

    setTickers(tickersFiltred)

    return {
      status: 'success',
      message: `Ticker '${tickers}' adicionado com sucesso!`,
    }
  }

  const removeTicker = (ticker: Ticker): TickerActionResponse => {
    const newTickers = tickers.filter((t) => {
      return !(t.ticker === ticker.ticker && t.portfolioId === ticker.portfolioId)
    })

    setTickers(newTickers)

    return {
      status: 'success',
      message: `Ticker '${ticker.ticker}' removido com sucesso!`,
    }
  }

  return (
    <TickersContext.Provider value={{ tickers, addTickers, listByPortfolioId, removeTicker }}>
      {children}
    </TickersContext.Provider>
  )
}
