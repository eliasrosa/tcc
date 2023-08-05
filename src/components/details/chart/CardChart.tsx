import { Ticker } from "@/@types/TickersTypes"
import { PageTitle } from "@/components/PageTitle"
import { toCurrency } from "@/helpers/currency"
import { useChart } from "@/hooks/useChart"
import { AreaChart, AreaChartProps, BarChart, Card, LineChart } from "@tremor/react"
import { useState } from "react"

type ChartType = 'area' | 'line' | 'bar'
type HistoryType = 'priceHistory' | 'dividendHistory'

type Props = {
  tickers: Ticker[]
  title: string
  history: HistoryType
}

export const CardChart = ({ tickers, title, history }: Props) => {
  const [chart, setChart] = useState<ChartType>('area')
  const { getCategories, getHistory } = useChart(tickers)

  console.log(11111, getHistory(history))

  const chartOptions: AreaChartProps = {
    data: getHistory(history),
    categories: getCategories(),
    index: 'date',
    yAxisWidth: 80,
    className: 'mt-6',
    valueFormatter: toCurrency,
    colors: [
      'blue', 'green', 'red', 'yellow',
      'purple', 'orange', "indigo", "orange"
    ],
  }

  return (
    <>
      <PageTitle>{title}</PageTitle>
      <Card className="p-2 mb-8">
        {chart === 'area' && (<AreaChart {...chartOptions} />)}
        {chart === 'line' && (<LineChart {...chartOptions} />)}
        {chart === 'bar' && (<BarChart {...chartOptions} />)}
      </Card>
    </>

  )
}