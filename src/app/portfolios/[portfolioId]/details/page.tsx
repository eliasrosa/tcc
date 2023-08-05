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
import { CardChart } from "@/components/details/chart/CardChart"
import Loading from "@/app/loading"

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
    setTickersFiltred(listByPortfolioId(params.portfolioId))
  }, [])

  useEffect(() => {
    setTickersFiltred(listByPortfolioId(params.portfolioId))
  }, [data])

  if (!portfolio) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <PageTitle>
        <span>Análise da carteira</span>
        <span>{portfolio.name}</span>
      </PageTitle>

      <Card className="p-2 mb-8">
        <Table tickers={tickersFiltred} />
      </Card>

      <CardChart history="dividendHistory" tickers={tickersFiltred} title="Dividendos pagos últimos 12 meses" />
      <CardChart history="priceHistory" tickers={tickersFiltred} title="Valorização últimos 12 meses" />
    </div>
  )
}
