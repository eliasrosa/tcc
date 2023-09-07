import { useContext } from 'react'
import { find, findIndex, sampleSize } from 'lodash'
import { useData } from './useData'

import { PortfolioContext } from '@/providers/PortfolioProvider'
import { PortfolioContextType } from '@/@types/ContextTypes'
import { getFundsStorage } from '@/storage/funds'
import { Suggestion } from '@/@types/SuggestionsTypes'
import { config } from '@/config'

export const usePortfolios = () => {
  const { portfolios } = useData()
  const portfolio = useContext(PortfolioContext) as PortfolioContextType

  if (!portfolio) {
    throw new Error('useData must be used within a DataProvider')
  }

  const { tickers, portfolioId } = portfolio

  return {
    portfolioId,
    tickers,
    listPortfolios: () => {
      return portfolios.sort((a, b) => a.name.localeCompare(b.name))
    },
    getPortfolio: (id: string) => {
      const index = findIndex(portfolios, (portfolio) => portfolio.id === id)

      if (index === -1) {
        throw new Error(`Portfolio not found (${id})`)
      }

      return portfolios[index]
    },
    getSuggestions: (): Suggestion[] => {
      const funds = getFundsStorage()

      const fundsFiltered = funds.filter(({ ticker }) => {
        return typeof find(tickers, { ticker }) === 'undefined'
      })

      return sampleSize(fundsFiltered, config.suggestions.limit)
    },
  }
}
