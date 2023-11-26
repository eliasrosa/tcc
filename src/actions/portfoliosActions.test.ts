import { describe, expect, test } from 'vitest'
import { portfoliosActions } from './portfoliosActions'
import { Portfolio } from '@/@types/PortfoliosTypes'

describe('portfoliosActions', () => {
  const initialState: Portfolio[] = [
    { id: 'e5d46968-3a05-46d1-b5ec-a003c2a38a3b', name: 'Portfolio 1' },
    { id: 'bdcfe013-ae51-4f79-b8a1-791f745e9116', name: 'Portfolio 2' },
    { id: 'b33c91c4-2661-462c-8cbd-a4501f629351', name: 'Portfolio 3' },
  ]

  test('should update the portfolio with the given payload', () => {
    const newState = portfoliosActions.update(initialState, {
      id: 'bdcfe013-ae51-4f79-b8a1-791f745e9116',
      name: 'Portfolio Edited',
    })

    expect(newState).toEqual([
      { id: 'e5d46968-3a05-46d1-b5ec-a003c2a38a3b', name: 'Portfolio 1' },
      { id: 'bdcfe013-ae51-4f79-b8a1-791f745e9116', name: 'Portfolio Edited' },
      { id: 'b33c91c4-2661-462c-8cbd-a4501f629351', name: 'Portfolio 3' },
    ])
  })

  test('should insert a new portfolio into the state', () => {
    const newState = portfoliosActions.insert(initialState, {
      name: 'Portfolio New',
    })

    expect(newState).toEqual([
      { id: 'e5d46968-3a05-46d1-b5ec-a003c2a38a3b', name: 'Portfolio 1' },
      { id: 'bdcfe013-ae51-4f79-b8a1-791f745e9116', name: 'Portfolio 2' },
      { id: 'b33c91c4-2661-462c-8cbd-a4501f629351', name: 'Portfolio 3' },
      { id: expect.any(String), name: 'Portfolio New' },
    ])
  })

  test('should remove the specified portfolio from the state', () => {
    const newState = portfoliosActions.remove(initialState, {
      id: 'bdcfe013-ae51-4f79-b8a1-791f745e9116',
    })

    expect(newState).toEqual([
      { id: 'e5d46968-3a05-46d1-b5ec-a003c2a38a3b', name: 'Portfolio 1' },
      { id: 'b33c91c4-2661-462c-8cbd-a4501f629351', name: 'Portfolio 3' },
    ])
  })
})
