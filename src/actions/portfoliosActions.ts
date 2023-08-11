import { Portfolio } from '@/@types/PortfoliosTypes'
import { findIndex } from 'lodash'
import { v4 as uuid } from 'uuid'

export const portfoliosActions = {
  update: (state: Portfolio[], payload: any): Portfolio[] => {
    const portfolios = state.map((p) => {
      if (p.id === payload.id) {
        return payload
      }

      return p
    })

    return [...portfolios]
  },

  insert: (state: Portfolio[], payload: any): Portfolio[] => {
    return [
      ...state,
      {
        id: uuid(),
        name: payload.name,
      },
    ]
  },

  remove: (state: Portfolio[], payload: any): Portfolio[] => {
    const portfolios = state.filter((p) => p.id !== payload.id)
    return [...portfolios]
  },
}
