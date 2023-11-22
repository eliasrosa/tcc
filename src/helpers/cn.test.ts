import { describe, expect, test } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
  test('should return string with merged values', () => {
    const result = cn('a', 'b', 'c')
    expect(result).toBe('a b c')
  })
})
