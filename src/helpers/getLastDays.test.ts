import { describe, expect, test } from 'vitest'
import { getLastDays } from './getLastDays'

describe('getLastDays', () => {
  test('should return array with last 20 days', () => {
    const days = getLastDays()
    expect(days.length).toBe(20)
  })

  test('should return array with custom days', () => {
    const days = getLastDays(10)
    expect(days.length).toBe(10)
  })
})
