'use client'

import { DividendsData } from '@/@types/QuotesTypes'
import { Card, Title, BarChart } from '@tremor/react'
import moment from 'moment'

const dataFormatter = (number: number) =>
  `R$ ${Intl.NumberFormat('pt-BR').format(number).toString()}`

const getHistoryDividendsData = (data: DividendsData) => {
  return data.cashDividends
    .filter((dividend) => dividend.label === 'RENDIMENTO')
    .map((dividend) => {
      return {
        ...dividend,
        paymentDate: moment(dividend.paymentDate).format('MM/YYYY'),
      }
    })
    .reverse()
}

interface Props {
  data: DividendsData
}

export function HistoryChart(props: Props) {
  const data = getHistoryDividendsData(props.data)

  return (
    <Card className="mt-6">
      <Title>Dividendos pagos últimos 12 meses</Title>
      <BarChart
        className="mt-6"
        data={data}
        index="paymentDate"
        categories={['rate']}
        colors={['blue']}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  )
}
