'use client'

import {
  Table as TremorTable,
  TableBody,
  TableHead,
  TableRow,
  TableHeaderCell,
} from '@tremor/react'

import { usePortfolios } from '@/hooks/usePortfolios'
import { Row } from './Row'
import { HeaderCell } from './HeaderCell'

const HelperPVP = () => {
  return (
    <>
      <p>Preço sobre o Valor Patrimonial</p>
      <p className="my-6">
        Essa métrica reflete o montante que o mercado está disposto a investir
        no patrimônio da empresa. Quando é inferior a 1, sugere que a empresa
        está sendo comercializada por um valor inferior ao seu valor patrimonial
        real.
      </p>
      <p>Cálculo: Preço atual do ativo / Valor patrimonial da ação (VPA)</p>
    </>
  )
}

const HelperDY = () => {
  return (
    <>
      <p>Dividend Yield</p>
      <p className="my-6">
        Mostra o rendimento obtido por uma ação através dos proventos
        distribuídos pela empresa nos últimos 12 meses
      </p>
      <p>
        Cálculo: Rendimentos pagos no período de 12 meses / Preço atual da ação
      </p>
    </>
  )
}

const HelperLastDividend = () => {
  return <p>Último redimento pago</p>
}

const HelperSumDividends = () => {
  return <p>Soma dos redimentos pagos dos últimos 12 meses</p>
}

export function Table() {
  const { tickers } = usePortfolios()

  return (
    <TremorTable>
      <TableHead>
        <TableRow>
          <TableHeaderCell />
          <HeaderCell title="Papel" />
          <HeaderCell title="Valor Atual" />
          <HeaderCell title="PV/P" helper={<HelperPVP />} />
          <HeaderCell title="DY 12M" helper={<HelperDY />} />
          <HeaderCell title="Últ. Rend." helper={<HelperLastDividend />} />
          <HeaderCell title="Últ. Rend. 12M" helper={<HelperSumDividends />} />
        </TableRow>
      </TableHead>
      <TableBody>
        {tickers.map((t) => (
          <Row key={t.ticker} ticker={t} />
        ))}
      </TableBody>
    </TremorTable>
  )
}
