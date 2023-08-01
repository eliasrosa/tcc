import { Ticker } from "@/@types/TickersTypes"
import { useResult } from "@/hooks/useResults"
import { AreaChart, LineChart } from "@tremor/react"
import { set } from "lodash"

type Props = {
  tickers: Ticker[]
}

const dataFormatter = (number: number) =>
  `R$ ${Intl.NumberFormat('pt-BR').format(number).toString()}`

export const PriceChart = ({ tickers }: Props) => {
  const dataTemp: any = []
  const categories = tickers.map((ticker) => ticker.ticker)

  tickers.forEach((ticker) => {
    const result = useResult(ticker.ticker)

    result.priceHistory.forEach((history) => {
      set(dataTemp, [history.date, ticker.ticker], history.value)
    })
  })

  const data = Object.keys(dataTemp).map((date) => {
    return { date, ...dataTemp[date] }
  })

  console.log(data);
  
  return (
    <div>
      <AreaChart
        className="mt-6"
        data={data}
        index="date"
        categories={categories}
        colors={['blue', 'green', 'red', 'yellow', 'purple', 'orange', "indigo", "orange"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
      />
    </div>
  )
}