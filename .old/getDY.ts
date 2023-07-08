import { DividendsData } from '@/@types/QuotesTypes'
import { round } from 'lodash'

export const getDY = (data: DividendsData, value: number): number => {
  const total = data.cashDividends
    .filter((dividend) => dividend.label === 'RENDIMENTO')
    .reduce((acc, dividend) => acc + dividend.rate, 0)

  return round((total / value) * 100, 2)
}
