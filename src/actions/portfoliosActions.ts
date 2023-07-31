import { DataType } from "@/@types/DataTypes"
import { Portfolio } from "@/@types/PortfoliosTypes"
import { findIndex } from 'lodash'
import { v4 as uuid } from 'uuid'


export const portfoliosActions = {
  update: (state: DataType, payload: any): DataType => {
    const { portfolios } = state

    const index = findIndex(portfolios, { id: payload.id })

    portfolios[index].name = payload.name

    return {
      ...state,
      portfolios: [...portfolios]
    }
  },
  
  insert: (state: DataType, payload: any): DataType => {
    const { portfolios } = state

    const newPortfolio: Portfolio = {
      id: uuid(),
      name: payload.name
    }

    return {
      ...state,
      portfolios: [...portfolios, newPortfolio]
    }
  },
  
  remove: (state: DataType, payload: any): DataType => {
    const { portfolios } = state

    const index = findIndex(portfolios, { id: payload.id })

    portfolios.splice(index, 1)

    return {
      ...state,
      portfolios: [...portfolios]
    }
  },
}
