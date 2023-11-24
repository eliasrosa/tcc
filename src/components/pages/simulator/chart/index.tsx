import { toCurrency } from '@/helpers/currency'
import { SimulatorResult } from '@/helpers/simulatorCalculate'
import { LineChart } from '@tremor/react'

interface Props {
  results: SimulatorResult[]
}

export function Chart({ results = [] }: Props) {
  if (!results.length) {
    return null
  }

  const data = results.map((result) => ({
    Mês: result.mes,
    'Total Acumulado': result.totalAccumulated,
    'Total Investido': result.totalInvested,
  }))

  return (
    <LineChart
      data={data}
      index="Mês"
      categories={['Total Investido', 'Total Acumulado']}
      valueFormatter={toCurrency}
      yAxisWidth={105}
      colors={['blue', 'green']}
    />
  )
}
