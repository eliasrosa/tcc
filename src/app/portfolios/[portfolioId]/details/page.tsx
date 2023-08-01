'use client'

import { Portfolio } from "@/@types/PortfoliosTypes"
import { Ticker } from "@/@types/TickersTypes"
import { PageTitle } from "@/components/PageTitle"
import { Card } from "@tremor/react"
import { useEffect, useState } from "react"
import { usePortfolios } from "@/hooks/usePortfolios"
import { useTickers } from "@/hooks/useTickers"
import { Table } from "@/components/details/table"
import { useData } from "@/hooks/useData"
import { useResult } from "@/hooks/useResults"
import { DividendsChart } from "@/components/details/chart/DividendsChart"
import { PriceChart } from "@/components/details/chart/PriceChart"

interface AnalisesProps {
  params: {
    portfolioId: string
  }
}

export default function PagePortfolioDetails({ params }: AnalisesProps) {
  const [portfolio, setPortfolio] = useState<Portfolio | false>(false)
  const [tickersFiltred, setTickersFiltred] = useState<Ticker[]>([])

  const { data } = useData()
  const { listByPortfolioId } = useTickers()
  const { getPortfolio } = usePortfolios()

  useEffect(() => {
    setPortfolio(getPortfolio(params.portfolioId))
    // setTickersFiltred(listByPortfolioId(params.portfolioId))
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
    const isError = false   
    return !isError && !ticker.isHidden
  })

  return (
    <div>
      <PageTitle>
        <span>Análise da carteira</span>
        <span>{portfolio.name}</span>
      </PageTitle>

      <Card className="p-2 mb-4">
        <Table tickers={tickersFiltred} />
      </Card>

      <PageTitle>Valorização últimos 12 meses</PageTitle>
      <Card className="p-2 mb-4">
        <PriceChart tickers={tickersVisibled} />
      </Card>

      <PageTitle>Dividendos pagos últimos 12 meses</PageTitle>
      <Card className="p-2 mb-4">
        <DividendsChart tickers={tickersVisibled} />
      </Card>
    </div>
  )
}
