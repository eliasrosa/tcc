export interface DividendHistory {
  amount: number
  isinCode: string
  paymentAt: number
  monthPaymentAt: string
}

export interface ResultsPriceHistory {
  [key: string]: Record<string, Record<string, number>>
}

export interface DailyPriceHistory {
  date: number
  avg: number
  min: number
  max: number
}

export interface PriceHistory {
  date: number
  price: number
}
