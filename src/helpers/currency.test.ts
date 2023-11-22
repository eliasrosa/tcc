import { describe, test, expect } from 'vitest'
import { toCurrency } from './currency'

describe('toCurrency', () => {
  test('should return the correct currency format for a given number', () => {
    const number = 1234.56
    const expected = 'R$ 1.234,56'

    const result = toCurrency(number)
    expect(result).toBe(expected)
  })
})
