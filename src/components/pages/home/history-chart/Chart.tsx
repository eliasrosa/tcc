import { toCurrency } from '@/helpers/currency'
import { AreaChart, LineChart } from '@tremor/react'

interface Props {
  data: any[]
  categories: string[]
}

export function Chart({ data = [], categories = [] }: Props) {
  if (!data.length || !categories.length) {
    return null
  }

  return (
    <LineChart
      data={data}
      index="date"
      categories={categories}
      valueFormatter={toCurrency}
      yAxisWidth={85}
      colors={[
        'red',
        'blue',
        'green',
        'violet',
        'rose',
        'yellow',
        'lime',
        'purple',
        'orange',
        'cyan',
        'stone',
        'emerald',
        'pink',
        'sky',
        'indigo',
        'fuchsia',
        'gray',
        'slate',
        'amber',
        'neutral',
        'teal',
        'zinc',
      ]}
    />
  )
}
