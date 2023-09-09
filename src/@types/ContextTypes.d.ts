import { Portfolio } from '@/@types/PortfoliosTypes'
import { Ticker } from '@/@types/TickersTypes'

export interface TickerActionType {
  type: 'INSERT' | 'REMOVE' | 'SET_VISIBILITY'
  payload?: any
}

export interface PortfolioActionType {
  type: 'INSERT' | 'UPDATE' | 'REMOVE'
  payload?: any
}

export interface DataContextType {
  tickers: Ticker[]
  portfolios: Portfolio[]
  dispatchTickers: React.Dispatch<TickerActionType>
  dispatchPortfolios: React.Dispatch<PortfolioActionType>
}

export interface PortfolioContextType {
  portfolioId: string
  tickers: Ticker[]
}

export interface SidebarContextType {
  isOpen: boolean
  toggleSidebar: () => void
}
