export interface Ticker {
  ticker: string
  walletId: string
  quantity: number
}

export interface AddTickerResponse {
  status: 'success' | 'error'
  message: string
}

interface TickerLoaded  extends Ticker{
  price: number
  pvp: number
  dy: number
  lastDividend: number
  isError: boolean
  messageError: string
}

export interface TickersContextType {
  tickers: Ticker[]
  addTickers: (tickers: string[], wallets: string[]) => AddTickerResponse
  listByWalletId: (id: string) => Ticker[]
}
