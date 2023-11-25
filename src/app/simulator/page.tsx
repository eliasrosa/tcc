'use client'
import { Button } from '@tremor/react'
import { useRef, useState } from 'react'
import { Card } from '@/components/common/Card'
import {
  SimulatorResult,
  simulatorCalculate,
} from '@/helpers/simulatorCalculate'
import { Table } from '@/components/pages/simulator/table'
import { Chart } from '@/components/pages/simulator/chart'
import { toCurrency } from '@/helpers/currency'
import { Metric } from '@/components/pages/simulator/metric'
import { Input } from '@/components/pages/simulator/input'

export default function Simulator() {
  const initialAmountRef = useRef<HTMLInputElement>(null)
  const investmentAmountRef = useRef<HTMLInputElement>(null)
  const periodInMonthsRef = useRef<HTMLInputElement>(null)
  const taxePerYearRef = useRef<HTMLInputElement>(null)

  const [results, setResults] = useState<SimulatorResult[]>([])
  const [totalInvested, setTotalInvested] = useState('R$ 0,00')
  const [totalReceived, setTotalReceived] = useState('R$ 0,00')
  const [totalAccumulated, setTotalAccumulated] = useState('R$ 0,00')

  const onSubmit = () => {
    const params = {
      initialAmount: Number(initialAmountRef.current?.value) || 0,
      investmentAmount: Number(investmentAmountRef.current?.value) || 0,
      periodInMonths: Number(periodInMonthsRef.current?.value) || 0,
      taxePerYear: Number(taxePerYearRef.current?.value) || 0,
    }

    const simulatorResults = simulatorCalculate(params)
    const lastResult = simulatorResults[params.periodInMonths]

    setTotalInvested(toCurrency(lastResult.totalInvested))
    setTotalReceived(toCurrency(lastResult.totalReceived))
    setTotalAccumulated(toCurrency(lastResult.totalAccumulated))

    setResults(simulatorResults)
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <Card title="Simulador de juros compostos">
          <div className="mt-4 mb-4 gap-4  grid grid-cols-1 items-start md:grid-cols-4">
            <Input
              testid="initial"
              title="Valor inicial"
              defaultValue="5000.00"
              ref={initialAmountRef}
            />
            <Input
              testid="investment"
              title="Valor mensal"
              defaultValue="350.00"
              ref={investmentAmountRef}
            />
            <Input
              testid="taxes"
              title="Taxa de juros mensal"
              defaultValue="8.00"
              ref={taxePerYearRef}
            />
            <Input
              testid="months"
              title="Período (meses)"
              defaultValue="360"
              ref={periodInMonthsRef}
            />

            <Button data-testid="simulator-submit" onClick={onSubmit}>
              Simular
            </Button>

            <Metric
              title="Total Investido"
              metric={totalInvested}
              testid="invested"
            />
            <Metric
              title="Total Juros"
              metric={totalReceived}
              testid="received"
            />
            <Metric
              title="Total Acumulado"
              metric={totalAccumulated}
              testid="accumulated"
            />
          </div>
        </Card>

        <Card title="Gráfico da simulação">
          <Chart results={results} />
        </Card>

        <Card title="Resultado da simulação">
          <Table results={results} />
        </Card>
      </div>
    </>
  )
}
