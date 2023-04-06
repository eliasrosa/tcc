import { DividendsData } from '@/@types/QuotesTypes'
import { round } from 'lodash'

export const getLastDY = (data: DividendsData): number => {
  const dividends = data.cashDividends.filter(
    (dividend) => dividend.label === 'RENDIMENTO',
  )

  return round(dividends[0].rate, 2)
}
