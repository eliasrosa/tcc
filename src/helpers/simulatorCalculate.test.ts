import { describe, expect, test } from 'vitest'
import { simulatorCalculate } from './simulatorCalculate'

describe('simulatorCalculate', () => {
  test('should calculate the correct result', () => {
    const params = {
      initialAmount: 1000,
      investmentAmount: 100,
      periodInMonths: 12,
      taxePerYear: 5,
    }

    const result = simulatorCalculate(params)

    expect(result.length).toBe(params.periodInMonths + 1)

    expect(result[0].mes).toBe(0)
    expect(result[0].interest).toBe(0)
    expect(result[0].totalInterest).toBe(0)
    expect(result[0].totalInvested).toBe(params.initialAmount)
    expect(result[0].totalAccumulated).toBe(params.initialAmount)

    expect(result[1].mes).toBe(1)
    expect(result[1].interest).toBe(4.0741237836483535)
    expect(result[1].totalInterest).toBe(4.0741237836483535)
    expect(result[1].totalInvested).toBe(1100)
    expect(result[1].totalAccumulated).toBe(1104.0741237836482)

    expect(result[12].mes).toBe(12)
    expect(result[12].interest).toBe(8.834425053241732)
    expect(result[12].totalInterest).toBe(77.25775295972907)
    expect(result[12].totalInvested).toBe(2200)
    expect(result[12].totalAccumulated).toBe(2277.2577529597293)
  })
})
