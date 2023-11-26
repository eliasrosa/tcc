import { Metric as MetricTremor, Text } from '@tremor/react'
import React from 'react'

interface Props {
  testid: string
  title: string
  metric: string
}

export function Metric({ title, metric, testid }: Props) {
  return (
    <div data-testid={`simulator-total-${testid}`}>
      <Text>{title}</Text>
      <MetricTremor className="text-md">{metric}</MetricTremor>
    </div>
  )
}
