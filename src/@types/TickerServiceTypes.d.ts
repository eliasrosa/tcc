export interface DividendsHistory {
  amount: number
  isinCode: string
  paymentAt: number
  monthPaymentAt: string
}

export interface ResultsPriceHistory {
  [key: string]: Record<string, Record<string, number>>
}

export interface PriceHistory {
  timestamp: number
  date: string
  avg: number
  min: number
  max: number
}
