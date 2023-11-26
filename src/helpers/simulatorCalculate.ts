export interface SimulatorResult {
  month: number
  valueReceived: number
  totalReceived: number
  totalInvested: number
  totalAccumulated: number
}

export interface SimulatorParams {
  initialAmount: number
  investmentAmount: number
  taxePerYear: number
  periodInMonths: number
}

function annualToMonthlyRate(annualRate: number): number {
  return Math.pow(1 + annualRate / 100, 1 / 12) - 1
}

export const simulatorCalculate = ({
  initialAmount,
  investmentAmount,
  periodInMonths,
  taxePerYear,
}: SimulatorParams): SimulatorResult[] => {
  const result: SimulatorResult[] = []

  let totalAccumulated = initialAmount
  let totalReceived = 0

  for (let month = 0; month <= periodInMonths; month++) {
    if (month === 0) {
      result.push({
        month,
        valueReceived: 0,
        totalReceived: 0,
        totalInvested: initialAmount,
        totalAccumulated: initialAmount,
      })
      continue
    }

    const monthlyRate = annualToMonthlyRate(taxePerYear)

    const valueReceived = monthlyRate * totalAccumulated
    totalAccumulated += investmentAmount + valueReceived
    totalReceived += valueReceived

    const totalInvested = investmentAmount * month + initialAmount

    result.push({
      month,
      valueReceived,
      totalReceived,
      totalInvested,
      totalAccumulated,
    })
  }

  return result
}
