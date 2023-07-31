import { portfoliosActions } from '@/actions/portfoliosActions'
import { ActionsType, DataType } from '@/@types/DataTypes'
import { storageActions } from '@/actions/storageActions'
import { tickersActions } from '@/actions/tickersActions'

export const dataInitialState: DataType = {
  tickers: [
    {
      "ticker": "XPLG11",
      "portfolioId": "5a31ee47-6b2f-4586-8fb9-983010149ec7",
      "quantity": 0,
      "isHidden": false,
    },
    {
      "ticker": "AAGR11",
      "portfolioId": "5a31ee47-6b2f-4586-8fb9-983010149ec7",
      "quantity": 0,
      "isHidden": false,
    },
    {
      "ticker": "XPML11",
      "portfolioId": "5a31ee47-6b2f-4586-8fb9-983010149ec7",
      "quantity": 0,
      "isHidden": false,
    },
    {
      "ticker": "VISC11",
      "portfolioId": "5a31ee47-6b2f-4586-8fb9-983010149ec7",
      "quantity": 0,
      "isHidden": false,
    },
    {
      "ticker": "SARE11",
      "portfolioId": "5a31ee47-6b2f-4586-8fb9-983010149ec7",
      "quantity": 0,
      "isHidden": false,
    }
  ],
  portfolios: [
    { id: '5a31ee47-6b2f-4586-8fb9-983010149ec7', name: 'Carteira #1' },
  ],
}

export const dataReducer = (state: DataType, action: ActionsType): DataType => {
  switch (action.type) {
    case 'LOAD': {
      return storageActions.load(state)
    }

    case 'CLEAR': {
      return storageActions.clear()
    }

    case 'PORTFOLIOS_INSERT': {
      return portfoliosActions.insert(state, action.payload)
    }

    case 'PORTFOLIOS_UPDATE': {
      return portfoliosActions.insert(state, action.payload)
    }

    case 'PORTFOLIOS_REMOVE': {
      return portfoliosActions.insert(state, action.payload)
    }

    case 'TICKERS_INSERT': {
      return tickersActions.insert(state, action.payload)
    }

    case 'TICKERS_UPDATE': {
      return tickersActions.update(state, action.payload)
    }

    case 'TICKERS_REMOVE': {
      return tickersActions.remove(state, action.payload)
    }

    case 'TICKERS_SET_VISIBILITY': {
      return tickersActions.setVisibility(state, action.payload)
    }
  }

}