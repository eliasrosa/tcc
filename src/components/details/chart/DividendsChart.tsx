import { Ticker } from "@/@types/TickersTypes"
import { toCurrency } from "@/helpers/currency"
import { useResult } from "@/hooks/useResults"
import { LineChart } from "@tremor/react"
import { set } from "lodash"

type Props = {
  tickers: Ticker[]
}

export const DividendsChart = ({ tickers }: Props) => {
  const dataTemp: any = []
  const categories = tickers.map((ticker) => ticker.ticker)

  tickers.forEach((ticker) => {
    const result = useResult(ticker.ticker)

    result.dividendHistory.forEach((history) => {
      set(dataTemp, [history.date, ticker.ticker], history.value)
    })
  })

  const data = Object.keys(dataTemp).map((date) => {
    return { date, ...dataTemp[date] }
  })

  return (
    <div>
      <LineChart
        className="mt-6"
        data={data}
        index="date"
        categories={categories}
        colors={['blue', 'green', 'red', 'yellow', 'purple', 'orange', "indigo", "orange"]}
        valueFormatter={toCurrency}
        yAxisWidth={80}
      />
    </div>
  )
}