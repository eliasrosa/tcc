export interface Stock {
  name: string
  location: string
  variation: number
  price: number
}

export interface StockResult {
  [keyof: string]: Stock
}
