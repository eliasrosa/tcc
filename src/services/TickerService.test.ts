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
    expect(result.dy12).toBe(8.21)
    expect(result.price).toBe(107)
    expect(result.dividend12).toBe(8.79)
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
      kind: 'cash',
      currency: 'brl',
      isin_code: 'BRXPLGCTF002',
      label: 'Rendimento',
      amount: 0.78,
      approved_in: '2023-10-31',
      traded_until: '2023-10-31',
      payment_date: '2023-11-16',
    })

    expect(result.dividendsHistory[11]).toEqual({
      kind: 'cash',
      currency: 'brl',
      isin_code: 'BRXPLGCTF002',
      label: 'Rendimento',
      amount: 0.74,
      approved_in: '2023-03-31',
      traded_until: '2023-03-31',
      payment_date: '2023-04-17',
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
