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

    expect(result[0].month).toBe(0)
    expect(result[0].valueReceived).toBe(0)
    expect(result[0].totalReceived).toBe(0)
    expect(result[0].totalInvested).toBe(params.initialAmount)
    expect(result[0].totalAccumulated).toBe(params.initialAmount)

    expect(result[1].month).toBe(1)
    expect(result[1].valueReceived).toBe(4.0741237836483535)
    expect(result[1].totalReceived).toBe(4.0741237836483535)
    expect(result[1].totalInvested).toBe(1100)
    expect(result[1].totalAccumulated).toBe(1104.0741237836482)

    expect(result[12].month).toBe(12)
    expect(result[12].valueReceived).toBe(8.834425053241732)
    expect(result[12].totalReceived).toBe(77.25775295972907)
    expect(result[12].totalInvested).toBe(2200)
    expect(result[12].totalAccumulated).toBe(2277.2577529597293)
  })
})
