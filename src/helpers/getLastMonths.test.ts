import { describe, expect, test } from 'vitest'
import { getLastMonths } from './getLastMonths'

describe('getLastMonths', () => {
  test('should return array with last 12 months', () => {
    const months = getLastMonths()
    expect(months.length).toBe(12)
  })

  test('should return array with custom months', () => {
    const months = getLastMonths(10)
    expect(months.length).toBe(10)
  })
})
