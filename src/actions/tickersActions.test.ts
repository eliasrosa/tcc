/* eslint-disable prettier/prettier */
import { describe, expect, test } from 'vitest'
import { Ticker } from '@/@types/TickersTypes'
import { tickersActions } from './tickersActions'

describe('tickersActions', () => {
  const initialState: Ticker[] = [
    { ticker: 'AABB11', portfolioId: 'e5d46968-3a05-46d1-b5ec-a003c2a38a3b', isHidden: false, quantity: 1 },
    { ticker: 'AABB11', portfolioId: 'bdcfe013-ae51-4f79-b8a1-791f745e9116', isHidden: false, quantity: 1 },
    { ticker: 'AAXX11', portfolioId: 'e5d46968-3a05-46d1-b5ec-a003c2a38a3b', isHidden: false, quantity: 1 },
  ]

  describe('insert', () => {
    test('should insert new tickers into the state', () => {
      const tickersList = ['AABB11', 'AAXX11']
      const portfoliosList = [
        'e5d46968-3a05-46d1-b5ec-a003c2a38a3b',
        'bdcfe013-ae51-4f79-b8a1-791f745e9116',
      ]

      const newState = tickersActions.insert(initialState, {
        tickersList,
        portfoliosList,
      })

      expect(newState).toEqual([
        { ticker: 'AABB11', portfolioId: 'e5d46968-3a05-46d1-b5ec-a003c2a38a3b', isHidden: false, quantity: 1 },
        { ticker: 'AABB11', portfolioId: 'bdcfe013-ae51-4f79-b8a1-791f745e9116', isHidden: false, quantity: 1 },
        { ticker: 'AAXX11', portfolioId: 'e5d46968-3a05-46d1-b5ec-a003c2a38a3b', isHidden: false, quantity: 1 },
        { ticker: 'AAXX11', portfolioId: 'bdcfe013-ae51-4f79-b8a1-791f745e9116', isHidden: false, quantity: 1 },
      ])
    })
  })

  describe('remove', () => {
    test('should remove the specified ticker from the state', () => {
      const ticker = 'AAXX11'
      const portfolioId = 'e5d46968-3a05-46d1-b5ec-a003c2a38a3b'

      const newState = tickersActions.remove(initialState, {
        ticker,
        portfolioId,
      })

      expect(newState).toEqual([
        { ticker: 'AABB11', portfolioId: 'e5d46968-3a05-46d1-b5ec-a003c2a38a3b', isHidden: false, quantity: 1 },
        { ticker: 'AABB11', portfolioId: 'bdcfe013-ae51-4f79-b8a1-791f745e9116', isHidden: false, quantity: 1 },
      ])
    })
  })

  describe('update', () => {
    test('should update the specified ticker in the state', () => {
      const newState = tickersActions.update(initialState, {
        ticker: 'AABB11',
        portfolioId: 'bdcfe013-ae51-4f79-b8a1-791f745e9116',
        isHidden: true,
        quantity: 5,
      })

      expect(newState).toEqual([
        { ticker: 'AABB11', portfolioId: 'e5d46968-3a05-46d1-b5ec-a003c2a38a3b', isHidden: false, quantity: 1 },
        { ticker: 'AABB11', portfolioId: 'bdcfe013-ae51-4f79-b8a1-791f745e9116', isHidden: true, quantity: 5 },
        { ticker: 'AAXX11', portfolioId: 'e5d46968-3a05-46d1-b5ec-a003c2a38a3b', isHidden: false, quantity: 1 },
      ])
    })
  })
})
