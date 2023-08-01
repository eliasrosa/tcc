import { findIndex } from "lodash";
import { useData } from "./useData";

export const usePortfolios = () => {
  const { data } = useData()

  return {
    listPortfolios: () => data.portfolios.sort((a, b) => a.name.localeCompare(b.name)),

    getPortfolio: (id: string) => {
      const index = findIndex(data.portfolios, (portfolio) => portfolio.id === id);

      if(index === -1) {
        throw new Error(`Portfolio not found (${id})`)
      }

      return data.portfolios[index]
    }
  }
}