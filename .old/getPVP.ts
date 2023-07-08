import { round } from 'lodash'

export const getPVP = (
  valuePatrimonial: number,
  totalCotas: number,
  regularMarketPrice: number,
) => {
  if (totalCotas === 0) {
    throw new Error('Não foi possível calcular o PVP!')
  }

  console.log(valuePatrimonial, regularMarketPrice)

  return round(regularMarketPrice / (valuePatrimonial / totalCotas), 2)
}
