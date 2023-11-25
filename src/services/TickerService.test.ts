import { describe, expect, test } from 'vitest'
import { TickerService } from './TickerService'

const ticker = 'XPLG11'

describe('TickerService', () => {
  test('should return result with success', async () => {
    const service = new TickerService(ticker)
    const result = await service.fetch()

    expect(result).toBeDefined()
    expect(result.ticker).toBe(ticker)
    expect(result.pvp).toBe(1.05)
    expect(result.dy12).toBe(8.5)
    expect(result.price).toBe(107)
    expect(result.dividend12).toBe(9.1)
    expect(result.lastDividend).toBe(0.74)
    expect(result.dividendsHistory.length).toBe(12)
    expect(result.pricesHistory.length).toBeTruthy()
  })

  test('should return error when ticker is invalid', async () => {
    await expect(async () => {
      return new TickerService('invalid').fetch()
    }).rejects.toThrowError('Ocorreu um erro ao buscar o ticker')
  })

  test('should return error when ticker is empty', async () => {
    await expect(async () => {
      return new TickerService('').fetch()
    }).rejects.toThrowError('Ocorreu um erro ao buscar o ticker')
  })

  test('should return error when ticker is null', async () => {
    await expect(async () => {
      return new TickerService(null as any).fetch()
    }).rejects.toThrowError('Ocorreu um erro ao buscar o ticker')
  })

  test('should return dividendsHistory with array of object', async () => {
    const service = new TickerService(ticker)
    const result = await service.fetch()

    expect(result).toBeDefined()
    expect(result.dividendsHistory.length).toBe(12)

    expect(result.dividendsHistory[0]).toEqual({
      amount: 0.78,
      date: 'Nov/23',
      timestamp: 1700103600000,
    })

    expect(result.dividendsHistory[11]).toEqual({
      amount: 0.74,
      date: 'Dec/22',
      timestamp: 1670986800000,
    })
  })

  test('should return pricesHistory with array of object', async () => {
    const service = new TickerService(ticker)
    const result = await service.fetch()

    expect(result).toBeDefined()
    expect(result.pricesHistory.length).toBeTruthy()

    expect(result.pricesHistory[0]).toEqual({
      timestamp: 1700535600000,
      avg: 107.7,
      min: 107,
      max: 108.56,
      date: '21/Nov',
    })
  })
})
