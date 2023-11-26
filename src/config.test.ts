import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import { getConfigAPI } from './config'

describe('getConfigAPI', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_API_KEY = 'test-key'
    process.env.NEXT_PUBLIC_API_URL = 'https://api.example.com'
    process.env.NEXT_PUBLIC_API_CACHE = 'no-cache'
    process.env.NEXT_PUBLIC_API_REVALIDATE = '3600'
  })

  afterEach(() => {
    delete process.env.NEXT_PUBLIC_API_KEY
    delete process.env.NEXT_PUBLIC_API_URL
    delete process.env.NEXT_PUBLIC_API_CACHE
    delete process.env.NEXT_PUBLIC_API_REVALIDATE
  })

  test('should return config object with valid environment variables', () => {
    const expectedConfig = {
      key: 'test-key',
      url: 'https://api.example.com',
      cache: 'no-cache',
      revalidate: 3600,
    }

    const config = getConfigAPI()

    expect(config).toEqual(expectedConfig)
  })

  test('should throw an error if NEXT_PUBLIC_API_KEY is not found', () => {
    delete process.env.NEXT_PUBLIC_API_KEY

    expect(getConfigAPI).toThrowError('NEXT_PUBLIC_API_KEY not found')
  })

  test('should throw an error if NEXT_PUBLIC_API_URL is not found', () => {
    delete process.env.NEXT_PUBLIC_API_URL

    expect(getConfigAPI).toThrowError('NEXT_PUBLIC_API_URL not found')
  })

  test('should return default values if NEXT_PUBLIC_API_CACHE is not found', () => {
    delete process.env.NEXT_PUBLIC_API_CACHE

    const expectedConfig = {
      key: 'test-key',
      url: 'https://api.example.com',
      cache: 'force-cache',
      revalidate: 3600,
    }

    const config = getConfigAPI()

    expect(config).toEqual(expectedConfig)
  })

  test('should return default values if NEXT_PUBLIC_API_REVALIDATE is not found', () => {
    delete process.env.NEXT_PUBLIC_API_REVALIDATE

    const expectedConfig = {
      key: 'test-key',
      url: 'https://api.example.com',
      cache: 'no-cache',
      revalidate: 3600,
    }

    const config = getConfigAPI()

    expect(config).toEqual(expectedConfig)
  })
})
