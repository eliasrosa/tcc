'use client'

import { brAPI } from "./brapi"
import { DividendsData, Result as Response } from "@/@types/QuotesTypes"
import { History, Result } from "@/@types/ResultsTypes"
import { round, sortBy, uniqBy } from "lodash"
import { Ticker } from "@/@types/TickersTypes"
import { getResultByCache } from "./results"
import moment from "moment"

const getPrice = (data: Response): number => {
  return round(data.regularMarketPrice, 2)
}

const getPVP = (data: Response): number => {

  // valuePatrimonial: number,
  // // totalCotas: number,
  // if (totalCotas === 0) {
  //   throw new Error('Não foi possível calcular o PVP!')
  // }

  // console.log(valuePatrimonial, regularMarketPrice)

  // return round(regularMarketPrice / (valuePatrimonial / totalCotas), 2)

  return 0
}

const getDY = (data: Response): number => {
  const total = data.dividendsData.cashDividends
    .filter((dividend) => dividend.label === 'RENDIMENTO')
    .reduce((acc, dividend) => acc + dividend.rate, 0)

  return round((total / data.regularMarketPrice) * 100, 2)
}

const getLastDividend = (data: Response): number => {
  const dividends = data.dividendsData.cashDividends.filter(
    (dividend) => dividend.label === 'RENDIMENTO',
  )

  return round(dividends[0].rate, 2)
}

export const getDividendHistory = (ticker: string, data: DividendsData): History[] => {
  const histories = data.cashDividends
    .filter((dividend) => dividend.label === 'RENDIMENTO')
    .map((dividend) => {
      const date = moment(dividend.paymentDate)
      return {
        ticker,
        timestamp: date.unix(),
        date: date.format('MM/YYYY'),
        value: round(dividend.rate, 2),
      }
    })

  console.log('dividend', sortBy(histories, 'timestamp'))


  return sortBy(histories, 'timestamp')
}

export const getPriceHistory = (ticker: string, data: Response): History[] => {
  const histories = data.historicalDataPrice.map((history) => {
    const date = moment.unix(history.date)
    return {
      ticker,
      timestamp: date.unix(),
      date: date.format('MM/YYYY'),
      value: round(history.close, 2),
    }
  })

  console.log('price', sortBy(histories, 'timestamp'))

  return sortBy(histories, 'timestamp')
}

export const fetchTicker = async (ticker: string): Promise<Result> => {
  const brResultAPI = await brAPI(ticker)
  // const company = await investidor10API(ticker)

  const requestedAt = new Date().getTime()

  if (brResultAPI === false) {
    return {
      ticker,
      dy: 0,
      pvp: 0,
      price: 0,
      lastDividend: 0,
      requestedAt,
      isError: true,
      isLoading: false,
      dividendHistory: [],
      priceHistory: [],
    }
  }

  return {
    ticker,
    dy: getDY(brResultAPI),
    pvp: getPVP(brResultAPI),
    price: getPrice(brResultAPI),
    lastDividend: getLastDividend(brResultAPI),
    requestedAt,
    isError: false,
    isLoading: false,
    dividendHistory: getDividendHistory(ticker, brResultAPI.dividendsData),
    priceHistory: getPriceHistory(ticker, brResultAPI),
  }
}

export const getAllResults = async (tickers: Ticker[], results: Result[]): Promise<Result[]> => {
  const newResults: Result[] = []

  const uniqueTickers = uniqBy(tickers, 'ticker')
  const tickersToFetch = await Promise.allSettled(
    uniqueTickers.map(async (ticker) => {
      const result = getResultByCache(ticker.ticker, results)

      if (result) {
        return result
      }

      return await fetchTicker(ticker.ticker)
    })
  )

  tickersToFetch.forEach((tickerToFetch) => {
    if (tickerToFetch.status === 'fulfilled') {
      newResults.push(tickerToFetch.value)
    }
  })

  return newResults
}