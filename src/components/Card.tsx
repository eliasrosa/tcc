import { Card as CardComponent, Metric, Text } from '@tremor/react'

interface Props {
  title: string
  type: 'percent' | 'currency' | 'number'
  value: number
}

export function Card({ title, type, value }: Props) {
  let valueText = ''

  switch (type) {
    case 'currency':
      valueText = `R$ ${value}`
      break

    case 'percent':
      valueText = `${value}%`
      break

    case 'number':
      valueText = `${value}`
      break
  }

  return (
    <CardComponent className="">
      <Text>{title}</Text>
      <Metric>{valueText}</Metric>
    </CardComponent>
  )
}
