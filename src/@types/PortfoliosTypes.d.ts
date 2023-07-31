export interface Portfolio {
  id: string
  name: string
}

export interface PortfolioResponse {
  status: 'success' | 'error'
  message: string
}

export interface PortfoliosContextType {
  portfolios: Portfolio[]
  getPortfolio: (id: string) => Portfolio
  listPortfolios: () => Portfolio[]
  insertPortfolio: (portfolio: Omit<Portfolio, 'id'>) => PortfolioResponse
  deletePortfolio: (id: string) => PortfolioResponse
  updatePortfolio: (id: string, portfolio: Portfolio) => PortfolioResponse
}
