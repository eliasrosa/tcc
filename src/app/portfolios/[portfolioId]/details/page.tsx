'use client'

import { Portfolio } from "@/@types/PortfoliosTypes"
import { Ticker } from "@/@types/TickersTypes"
import { PageTitle } from "@/components/PageTitle"
import { Card } from "@tremor/react"
import { useEffect, useState } from "react"
import { usePortfolios } from "@/hooks/usePortfolios"
import { useTickers } from "@/hooks/useTickers"
import { DetailsTable } from "@/components/details/DatailsTable"
import { useData } from "@/hooks/useData"
import { DividendsChart } from "./components/DividendsChart"
import { useResult } from "@/hooks/useResults"

interface AnalisesProps {
  params: {
    portfolioId: string
  }
}

export default function PagePortfolioDetails({ params }: AnalisesProps) {
  const { data, results } = useData()
  const { listByPortfolioId } = useTickers()
  const { getPortfolio } = usePortfolios()

  const [portfolio, setPortfolio] = useState<Portfolio | false>(false)
  const [tickersFiltred, setTickersFiltred] = useState<Ticker[]>([])

  useEffect(() => {
    setPortfolio(getPortfolio(params.portfolioId))
    setTickersFiltred(listByPortfolioId(params.portfolioId))
  }, [])

  useEffect(() => {
    setTickersFiltred(listByPortfolioId(params.portfolioId))
  }, [data])

  if (!portfolio) {
    return (
      <PageTitle>Loading...</PageTitle>
    )
  }

  const tickersVisibled = tickersFiltred.filter((ticker) => {
    const { isError } = useResult(ticker.ticker)   
    return !isError && !ticker.isHidden
  })

  return (
    <div>
      <PageTitle>
        <span>Análise da carteira</span>
        <span>{portfolio.name}</span>
      </PageTitle>

      <Card className="p-2 mb-4">
        <DetailsTable tickers={tickersFiltred} />
      </Card>

      <PageTitle>Dividendos pagos últimos 12 meses</PageTitle>
      <Card className="p-2 mb-4">
        <DividendsChart tickers={tickersVisibled} />
      </Card>
    </div>
  )
}
