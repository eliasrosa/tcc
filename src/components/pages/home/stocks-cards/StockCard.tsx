import { cn } from '@/helpers/utils'
import { Card, Text, BadgeDelta, Metric, CardProps } from '@tremor/react'

interface Props extends CardProps {
  title: string
  points: number
  percentage: number
}

export function StockCard({ title, points, percentage, className }: Props) {
  const type = percentage > 0 ? 'increase' : 'decrease'
  const color = percentage > 0 ? 'green' : 'red'

  return (
    <Card decoration="top" decorationColor={color} className={cn(className)}>
      <div className="flex justify-between">
        <Text>{title}</Text>
        <BadgeDelta deltaType={type} size="xs">
          {percentage}%
        </BadgeDelta>
      </div>
      <Metric>{points}</Metric>
    </Card>
  )
}
