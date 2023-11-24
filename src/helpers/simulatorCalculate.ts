export interface SimulatorResult {
  mes: number
  interest: number
  totalInvested: number
  totalInterest: number
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
  let totalInterest = 0

  for (let mes = 0; mes <= periodInMonths; mes++) {
    if (mes === 0) {
      result.push({
        mes,
        interest: 0,
        totalInterest: 0,
        totalInvested: initialAmount,
        totalAccumulated: initialAmount,
      })
      continue
    }

    const monthlyRate = annualToMonthlyRate(taxePerYear)

    const interest = monthlyRate * totalAccumulated
    totalAccumulated += investmentAmount + interest
    totalInterest += interest

    result.push({
      mes,
      interest,
      totalInterest,
      totalAccumulated,
      totalInvested: investmentAmount * mes + initialAmount,
    })
  }

  return result
}
