import { toCurrency } from '@/helpers/currency'
import { SimulatorResult } from '@/helpers/simulatorCalculate'
import { AreaChart } from '@tremor/react'

interface Props {
  results: SimulatorResult[]
}

export function Chart({ results = [] }: Props) {
  if (!results.length) {
    return null
  }

  const data = results.map((result) => ({
    Mês: result.month,
    'Total Acumulado': result.totalAccumulated,
    'Total Investido': result.totalInvested,
  }))

  return (
    <AreaChart
      data={data}
      index="Mês"
      categories={['Total Investido', 'Total Acumulado']}
      valueFormatter={toCurrency}
      yAxisWidth={105}
      startEndOnly={true}
      autoMinValue={true}
      curveType="natural"
      colors={['blue', 'green']}
    />
  )
}
