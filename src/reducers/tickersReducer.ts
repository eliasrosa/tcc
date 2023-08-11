import { tickersActions } from '@/actions/tickersActions'
import { TickerActionType } from '@/@types/ContextTypes'
import { Ticker } from '@/@types/TickersTypes'

export const tickersReducer = (
  state: Ticker[],
  action: TickerActionType,
): Ticker[] => {
  switch (action.type) {
    case 'INSERT': {
      return tickersActions.insert(state, action.payload)
    }

    case 'REMOVE': {
      return tickersActions.remove(state, action.payload)
    }

    case 'SET_VISIBILITY': {
      return tickersActions.update(state, {
        ...action.payload,
        isHidden: !action.payload.isHidden,
      })
    }
  }
}
