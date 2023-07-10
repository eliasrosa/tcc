'use client'

import { Portfolio, PortfoliosContextType } from "@/@types/PortfoliosTypes"
import { Ticker, TickersContextType } from "@/@types/TickersTypes"
import { PageTitle } from "@/components/PageTitle"
import { TableTickers } from "@/components/TableTickers"
import { PortfoliosContext } from "@/context/PortfoliosProvider"
import { TickersContext } from "@/context/TickersProvider"
import { Card } from "@tremor/react"
import { useContext, useEffect, useState } from "react"

interface AnalisesProps {
  params: {
    portfolioId: string
  }
}

export default function PagePortfolioDetails({ params }: AnalisesProps) {
  const { getPortfolio } = useContext(PortfoliosContext) as PortfoliosContextType
  const { tickers: tickersContext, listByPortfolioId } = useContext(TickersContext) as TickersContextType

  const [portfolio, setPortfolio] = useState<Portfolio | false>(false)
  const [tickers, setTickers] = useState<Ticker[] | false>(false)

  useEffect(() => {
    setPortfolio(getPortfolio(params.portfolioId))
    setTickers(listByPortfolioId(params.portfolioId))
  }, [])

  useEffect(() => {
    setTickers(listByPortfolioId(params.portfolioId))
  }, [tickersContext])

  if(!portfolio || !tickers){
    return (
      <PageTitle>Loading...</PageTitle>
    )
  }

  return (
    <div>
      <PageTitle>
        <span>Análise da carteira</span>
        <span>{portfolio.name}</span>
      </PageTitle>

      <Card className="p-2">
        <TableTickers tickers={tickers} showMode='full' />
      </Card>
    </div>
  )
}
