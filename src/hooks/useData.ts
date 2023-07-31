import { useContext } from "react"

import { DataContextType } from "@/@types/DataTypes"
import { DataContext } from "@/providers/DataProvider"

export const useData = () => {
  const context = useContext(DataContext) as DataContextType

  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }

  return context
}