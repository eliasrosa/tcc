export interface HistoricalDataPrice {
  date: number
  open?: number
  high?: number
  low?: number
  close: number
  volume?: number
  adjustedClose: number
}

export interface CashDividend {
  assetIssued: string
  paymentDate: string
  rate: number
  relatedTo: string
  approvedOn: string
  isinCode: string
  label: string
  lastDatePrior: string
  remarks: string
}

export interface StockDividend {
  assetIssued: string
  factor: number
  approvedOn: string
  isinCode: string
  label: string
  lastDatePrior: string
  remarks: string
}

export interface Subscription {
  assetIssued: string
  percentage: number
  priceUnit: number
  tradingPeriod: string
  subscriptionDate: string
  approvedOn: string
  isinCode: string
  label: string
  lastDatePrior: string
  remarks: string
}

export interface DividendsData {
  cashDividends: CashDividend[]
  stockDividends: StockDividend[]
  subscriptions: Subscription[]
}

export interface Result {
  symbol: string
  shortName: string
  longName: string
  currency: string
  regularMarketPrice: number
  regularMarketDayHigh: number
  regularMarketDayLow: number
  regularMarketDayRange: string
  regularMarketChange: number
  regularMarketChangePercent: number
  regularMarketTime: string
  marketCap: number
  regularMarketVolume: number
  regularMarketPreviousClose: number
  regularMarketOpen: number
  averageDailyVolume10Day: number
  averageDailyVolume3Month: number
  fiftyTwoWeekLowChange: number
  fiftyTwoWeekRange: string
  fiftyTwoWeekHighChange: number
  fiftyTwoWeekHighChangePercent: number
  fiftyTwoWeekLow: number
  fiftyTwoWeekHigh: number
  twoHundredDayAverage: number
  twoHundredDayAverageChange: number
  twoHundredDayAverageChangePercent: number
  validRanges: string[]
  historicalDataPrice: HistoricalDataPrice[]
  priceEarnings: any
  earningsPerShare: any
  logourl: string
  dividendsData: DividendsData
}

export interface ResultQuotes {
  results: Result[]
  requestedAt: string
}
