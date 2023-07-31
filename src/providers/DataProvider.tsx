"use client"

import { ActionsType } from '@/@types/DataTypes';
import { Result } from '@/@types/ResultsTypes';
import { storageActions } from '@/actions/storageActions';
import { getAllResults } from '@/helpers/tickers';
import { dataInitialState, dataReducer } from '@/reducers/dataReducer';
import { ReactNode, createContext, useEffect, useReducer, useState } from 'react'

export const DataContext = createContext({})

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, dispatchReducerData] = useReducer(dataReducer, dataInitialState);
  const [results, setResult] = useState<Result[]>([])
  const { save } = storageActions

  const dispatch = (action: ActionsType) => {
    console.log('dispatch', action);
    dispatchReducerData(action)
  }

  useEffect(() => {
    dispatch({ type: 'LOAD' });
  }, [])

  useEffect(() => {
    getAllResults(data.tickers, results).then((results) => {      
      setResult(results)
    })

    save(data)
  }, [data])

  return (
    <DataContext.Provider value={{ data, dispatch, results }}>
      {children}
    </DataContext.Provider>
  )
}
