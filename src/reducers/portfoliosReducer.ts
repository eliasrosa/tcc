import { portfoliosActions } from '@/actions/portfoliosActions'
import { PortfolioActionType } from '@/@types/ContextTypes'
import { Portfolio } from '@/@types/PortfoliosTypes'

export const portfoliosReducer = (
  state: Portfolio[],
  action: PortfolioActionType,
): Portfolio[] => {
  switch (action.type) {
    case 'INSERT': {
      return portfoliosActions.insert(state, action.payload)
    }

    case 'UPDATE': {
      return portfoliosActions.update(state, action.payload)
    }

    case 'REMOVE': {
      return portfoliosActions.remove(state, action.payload)
    }
  }
}
