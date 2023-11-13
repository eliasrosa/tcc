import moment from 'moment'
import { min, max, mean, round, last } from 'lodash'

import { config } from '@/config'
import { TickerData } from '@/@types/TickersTypes'
import {
  DividendsHistory,
  ResultsPriceHistory,
  PriceHistory,
} from '@/@types/TickerServiceTypes'

type Params = Record<string, string>

export class TickerService {
  private ticker: string
  private apiKey: string
  private apiBaseUrl: string

  private fetchConfig: RequestInit

  constructor(ticker: string) {
    const { revalidate, cache, key, url } = config.api

    this.ticker = ticker
    this.apiKey = key
    this.apiBaseUrl = url

    this.fetchConfig = {
      method: 'GET',
      cache,
      next: {
        revalidate,
      },
    }
  }

  private getURL(endpoint: string, params: Params): string {
    const queryString = new URLSearchParams({
      ...params,
      key: this.apiKey,
      format: 'json-cors',
    })

    const url = new URL(this.apiBaseUrl)

    url.pathname = endpoint
    url.search = queryString.toString()

    return url.toString()
  }

  public async fetch(): Promise<TickerData> {
    const { price, pvp } = await this.fetchTicker(this.ticker)
    const pricesHistory = await this.fetchPricesHistory(this.ticker)
    const dividendsHistory = await this.fetchDividendsHistory(this.ticker)

    const { dividend12, dy12, lastDividend } = this.getDividendsByHistory(
      dividendsHistory,
      price,
    )

    return {
      pvp,
      dy12,
      price,
      dividend12,
      lastDividend,
      dividendsHistory,
      pricesHistory,
      ticker: this.ticker,
    }
  }

  private async fetchTicker(symbol: string) {
    const url = this.getURL('finance/stock_price', { symbol })

    const response = await fetch(url, this.fetchConfig)

    const data = await response.json()
    const result = data.results[symbol] || {
      financials: { price_to_book_ratio: 0 },
      price: 0,
    }

    return {
      price: round(Number(result.price || 0), 2),
      pvp: round(result.financials?.price_to_book_ratio || 0, 2),
    }
  }

  private async fetchDividendsHistory(symbol: string) {
    const url = this.getURL('finance/stock_dividends', { symbol })

    const response = await fetch(url, this.fetchConfig)

    const data = await response.json()
    const dividends = data.results[symbol]

    if (dividends.error) {
      throw new Error(dividends.message)
    }

    dividends
      .filter((result: any) => {
        const tickerCode = `BR${symbol.substring(0, 4)}CTF`
        return (
          result.label === 'Rendimento' && result.isin_code.includes(tickerCode)
        )
      })
      .map((result: any) => {
        const timestamp = new Date(
          result.payment_date + ' 00:00:00 GMT-0300',
        ).getTime()

        const date = moment(timestamp).format('MMM/YY')
        const amount = round(Number(result.amount), 2)

        return { timestamp, amount, date }
      })

    return dividends.splice(0, 12)
  }

  private async fetchPricesHistory(symbol: string) {
    const url = this.getURL('finance/historical/stocks', {
      days_ago: '20',
      symbol,
    })

    const response = await fetch(url, this.fetchConfig)
    const data = await response.json()

    return this.getPricesHistory(data.results)
  }

  private getPricesHistory(prices: ResultsPriceHistory): PriceHistory[] {
    const history: PriceHistory[] = []

    for (const day in prices) {
      const pricesDaily = Object.values(prices[day][this.ticker])
      const timestamp = new Date(`${day} 00:00:00 GMT-0300`).getTime()

      history.push({
        timestamp,
        avg: round(mean(pricesDaily) || 0, 2),
        min: round(min(pricesDaily) || 0, 2),
        max: round(max(pricesDaily) || 0, 2),
        date: moment(timestamp).format('DD/MMM'),
      })
    }

    return history
  }

  private getDividendsByHistory(
    dividendsHistory: DividendsHistory[],
    price: number,
  ) {
    const lastDividend = last(dividendsHistory)?.amount || 0

    const dividend12 = dividendsHistory.reduce((acc, dividend) => {
      return acc + dividend.amount
    }, 0)

    const dy12 = round((dividend12 / price) * 100, 2)

    return {
      dy12,
      dividend12,
      lastDividend,
    }
  }
}
