import { findIndex } from "lodash";
import { useData } from "./useData";

export const usePortfolios = () => {
  const { portfolios } = useData()

  return {
    listPortfolios: () => portfolios.sort((a, b) => a.name.localeCompare(b.name)),

    getPortfolio: (id: string) => {
      const index = findIndex(portfolios, (portfolio) => portfolio.id === id);

      if(index === -1) {
        throw new Error(`Portfolio not found (${id})`)
      }

      return portfolios[index]
    }
  }
}