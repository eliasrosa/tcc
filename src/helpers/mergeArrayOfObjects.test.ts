import { describe, expect, test } from 'vitest'
import { mergeArrayOfObjects } from './mergeArrayOfObjects'

describe('mergeArrayOfObjects', () => {
  test('should return object with merged values', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }, { a: 4 }]
    const result = mergeArrayOfObjects(arr)
    expect(result).toEqual({ a: 4, b: 2, c: 3 })
  })
})
