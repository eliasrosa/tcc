'use client'

import { Ticker, TickerLoaded } from "@/@types/TickersTypes"
import { brAPI } from "./brapi"
import { DividendsData, Result } from "@/@types/QuotesTypes"
import { round } from "lodash"
import { investidor10API } from "./investidor10"

export const tickerResultDefault = {
  price: 0,
  pvp: 0,
  dy: 0,
  lastDividend: 0,
  isError: true,
  messageError: null,
}

const getPrice = (data: Result): number => {
  return round(data.regularMarketPrice, 2)
}

const getPVP = (data: Result): number => {

  // valuePatrimonial: number,
  // // totalCotas: number,
  // if (totalCotas === 0) {
  //   throw new Error('Não foi possível calcular o PVP!')
  // }

  // console.log(valuePatrimonial, regularMarketPrice)

  // return round(regularMarketPrice / (valuePatrimonial / totalCotas), 2)

    return 1
}

const getDY = (data: Result): number => {
  const total = data.dividendsData.cashDividends
    .filter((dividend) => dividend.label === 'RENDIMENTO')
    .reduce((acc, dividend) => acc + dividend.rate, 0)

  return round((total / data.regularMarketPrice) * 100, 2)
}

const getLastDividend = (data: Result): number => {
  const dividends = data.dividendsData.cashDividends.filter(
    (dividend) => dividend.label === 'RENDIMENTO',
  )

  return round(dividends[0].rate, 2)
}


export const getTicker = async (ticker: Ticker): Promise<TickerLoaded> => {
  console.log('getTicker: ' + ticker.ticker)

  const brResultAPI = await brAPI(ticker.ticker)
  const company = await investidor10API(ticker.ticker)

  if (brResultAPI === false) {
    return { ...ticker, ...tickerResultDefault }
  }

  return {
    ...ticker,
    price: getPrice(brResultAPI),
    pvp: getPVP(brResultAPI),
    dy: getDY(brResultAPI),
    lastDividend: getLastDividend(brResultAPI),
    isError: false,
    messageError: null
  }
}