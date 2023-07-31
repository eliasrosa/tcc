import { DataType } from "@/@types/DataTypes"
import { dataInitialState } from "@/reducers/dataReducer"

export const storageActions = {
  load: (state: DataType): DataType => {
    const data = localStorage.getItem('data')

    if (data) {
      return JSON.parse(data)
    }

    return state
  },

  save: (state: DataType) => {
    const data = JSON.stringify(state)
    localStorage.setItem('data', data)

    return state
  },

  clear: () => {
    const data = JSON.stringify(dataInitialState)
    localStorage.setItem('data', data)

    return dataInitialState
  }
}
