'use client'
import { Button, Text, TextInput } from '@tremor/react'
import { useRef, useState } from 'react'
import { Card } from '@/components/common/Card'
import {
  SimulatorResult,
  simulatorCalculate,
} from '@/helpers/simulatorCalculate'
import { Table } from '@/components/pages/simulator/table'
import { Chart } from '@/components/pages/simulator/chart'
import { toCurrency } from '@/helpers/currency'

export default function Simulator() {
  const initialAmountRef = useRef<HTMLInputElement>(null)
  const investmentAmountRef = useRef<HTMLInputElement>(null)
  const periodInMonthsRef = useRef<HTMLInputElement>(null)
  const taxePerYearRef = useRef<HTMLInputElement>(null)

  const [results, setResults] = useState<SimulatorResult[]>([])
  const [totalInvested, setTotalInvested] = useState('R$ 0,00')
  const [totalInterest, setTotalInterest] = useState('R$ 0,00')
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
    setTotalInterest(toCurrency(lastResult.totalInterest))
    setTotalAccumulated(toCurrency(lastResult.totalAccumulated))

    setResults(simulatorResults)
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <Card title="Simulador de juros compostos">
          <div className="mt-4 mb-4 gap-4  grid grid-cols-1 items-start md:grid-cols-4">
            <div>
              <p>Valor inicial</p>
              <TextInput
                type="text"
                defaultValue="500.00"
                ref={initialAmountRef}
                data-testid="simulator-initial"
              />
            </div>
            <div>
              <p>Valor mensal</p>
              <TextInput
                type="text"
                defaultValue="100.00"
                ref={investmentAmountRef}
                data-testid="simulator-investment"
              />
            </div>
            <div>
              <p>Taxa de juros</p>
              <TextInput
                type="text"
                defaultValue="9.00"
                ref={taxePerYearRef}
                data-testid="simulator-taxes"
              />
            </div>
            <div>
              <p>Período (meses)</p>
              <TextInput
                type="text"
                defaultValue="60"
                ref={periodInMonthsRef}
                data-testid="simulator-years"
              />
            </div>

            <Button onClick={onSubmit}>Simular</Button>
            <Text data-testid="totalInvested">
              Total Investido: {totalInvested}
            </Text>
            <Text data-testid="totalInterest">
              Total Juros: {totalInterest}
            </Text>
            <Text data-testid="totalAccumulated">
              Total Acumulado: {totalAccumulated}
            </Text>
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
