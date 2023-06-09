'use client'

import { ReactNode, createContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import {
  Portfolio,
  PortfolioResponse,
  PortfoliosContextType,
} from '@/@types/PortfoliosTypes'

import { getPortfoliosStorage } from '@/storage/portfolios'
import { findIndex } from 'lodash'

export const PortfoliosContext = createContext<PortfoliosContextType | null>(null)

export function PortfoliosProvider({ children }: { children: ReactNode }) {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])

  useEffect(() => {
    console.log('loading portfolios...', portfolios);

    if (!portfolios.length) {
      const localPortfolios = localStorage.getItem('portfolios') || false

      if (localPortfolios) {
        setPortfolios(JSON.parse(localPortfolios))
        return
      }

      setPortfolios(getPortfoliosStorage())
    }

  }, [])


  const insertPortfolio = (portfolio: Omit<Portfolio, 'id'>): PortfolioResponse => {
    const newPortfolio = { ...portfolio, id: uuid() }

    setPortfolios([...portfolios, newPortfolio])

    return { status: 'success', message: 'Grupo adicionado com sucesso' }
  }

  const listPortfolios = (): Portfolio[] => {
    console.log('listing portfolios ...', portfolios);
    return portfolios
  }

  const deletePortfolio = (id: string): PortfolioResponse => {
    return { status: 'success', message: '' }
  }

  const updatePortfolio = (id: string, portfolio: Portfolio): PortfolioResponse => {
    return { status: 'success', message: '' }
  }

  const getPortfolio = (id: string): Portfolio => {
    const index = findIndex(portfolios, (portfolio) => portfolio.id === id);

    if(index === -1) {
      throw new Error(`Portfolio not found (${id})`)
    }

    return portfolios[index]
  }

  return (
    <PortfoliosContext.Provider
      value={{
        portfolios,
        insertPortfolio,
        deletePortfolio,
        updatePortfolio,
        listPortfolios,
        getPortfolio,
      }}
    >
      {children}
    </PortfoliosContext.Provider>
  )
}
