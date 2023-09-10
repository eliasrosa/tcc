import { TickerData } from '@/@types/TickersTypes'
import { config } from '@/config'
import { round } from 'lodash'
import moment from 'moment'

type Params = Record<string, string>

interface DividendHistory {
  amount: number
  isinCode: string
  paymentAt: number
  monthPaymentAt: string
}

interface ResultsPriceHistory {
  [key: string]: Record<string, Record<string, number>>
}

interface DailyPriceHistory {
  date: number
  avg: number
  min: number
  max: number
}

interface PriceHistory {
  date: number
  price: number
}

export class TickerFetchAPI {
  private ticker: string
  private api_key: string
  private api_base_url: string

  constructor(ticker: string) {
    this.ticker = ticker
    this.api_key = config.api.key
    this.api_base_url = config.api.url
  }

  private getURL(endpoint: string, params: Params): string {
    const queryString = new URLSearchParams({
      ...params,
      key: this.api_key,
      format: 'json-cors',
    })

    const url = new URL(this.api_base_url)

    url.pathname = endpoint
    url.search = queryString.toString()

    return url.toString()
  }

  public async fetch(): Promise<TickerData> {
    const { price, pvp } = await this.fetchData(this.ticker)
    const { dividendHistory } = await this.fetchDividends(this.ticker)
    const { dailyPriceHistory, monthlyPriceHistory } = await this.fetchPrices(
      this.ticker,
    )
    const { dividend12, dy12, lastDividend } = this.getDividends(
      dividendHistory,
      price,
    )

    return {
      pvp,
      dy12,
      price,
      dividend12,
      lastDividend,
      dailyPriceHistory,
      dividendHistory: [],
      monthlyPriceHistory,
      ticker: this.ticker,
    }
  }

  private async fetchData(symbol: string) {
    const url = this.getURL('finance/stock_price', { symbol })

    const response = await fetch(url, {
      method: 'GET',
      cache: 'force-cache',
    })

    const data = await response.json()
    const result = data.results[symbol]

    return {
      price: Number(result.price),
      pvp: round(result.financials.price_to_book_ratio, 2),
    }
  }

  private async fetchDividends(symbol: string) {
    const url = this.getURL('finance/stock_dividends', { symbol })

    const response = await fetch(url, {
      method: 'GET',
      cache: 'force-cache',
      next: {
        revalidate: 3600,
      },
    })

    const data = await response.json()
    const dividends = data.results[symbol]
      .filter((result: any) => {
        const tickerCode = `BR${symbol.substring(0, 4)}CTF`
        return (
          result.label === 'Rendimento' && result.isin_code.includes(tickerCode)
        )
      })
      .map((result: any) => {
        const paymentAt = new Date(
          result.payment_date + ' 00:00:00 GMT-0300',
        ).getTime()
        const isinCode = result.isin_code
        const amount = Number(result.amount)
        const monthPaymentAt = moment(paymentAt)
          .startOf('month')
          .format('YYYY-MM-DD')

        return {
          amount,
          isinCode,
          paymentAt,
          monthPaymentAt,
        }
      })

    return {
      dividendHistory: dividends.splice(0, 12).reverse(),
    }
  }

  private async fetchPrices(symbol: string) {
    const url = this.getURL('finance/historical/stocks', {
      symbol,
      days_ago: '20',
    })

    const response = await fetch(url, {
      method: 'GET',
      cache: 'force-cache',
    })

    const data = await response.json()
    const monthlyPriceHistory = this.getPriceHistory(data.results)
    const dailyPriceHistory = this.getDailyPriceHistory(data.results)

    return {
      monthlyPriceHistory,
      dailyPriceHistory,
    }
  }

  private getPriceHistory(prices: ResultsPriceHistory): PriceHistory[] {
    const history: PriceHistory[] = []

    for (const day in prices) {
      const date = new Date(`${day} 00:00:00 GMT-0300`).getTime()

      const priceAverage = Object.values(prices[day][this.ticker]).reduce(
        (acc, price) => {
          return acc + price
        },
        0,
      )

      history.push({ date, price: round(priceAverage, 2) })
    }

    return history
  }

  private getDailyPriceHistory(
    prices: ResultsPriceHistory,
  ): DailyPriceHistory[] {
    const history: DailyPriceHistory[] = []

    for (const day in prices) {
      Object.keys(prices[day][this.ticker]).map((hour) => {
        const date = new Date(`${day} ${hour}:00 GMT-0300`).getTime()
        const price = prices[day][this.ticker][hour]

        history.push({
          date,
          avg: round(price, 2),
          max: 0,
          min: 0,
        })

        return hour
      })
    }

    return history
  }

  private getDividends(dividendHistory: DividendHistory[], price: number) {
    const lastDividend = dividendHistory[dividendHistory.length - 1].amount

    const dividend12 = dividendHistory.reduce((acc, dividend) => {
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
