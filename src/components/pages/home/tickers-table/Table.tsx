'use client'

import {
  Table as TremorTable,
  TableBody,
  TableHead,
  TableRow,
} from '@tremor/react'

import { usePortfolios } from '@/hooks/usePortfolios'
import { HeaderCell } from './HeaderCell'
import { Row } from './Row'
import {
  HelperDY,
  HelperLastDividend,
  HelperPVP,
  HelperPrice,
  HelperSumDividends,
  HelperTicker,
} from './Helpers'

export function Table() {
  const { tickers } = usePortfolios()

  return (
    <>
      <TremorTable>
        <TableHead>
          <TableRow data-testid="header-portfolio">
            <HeaderCell title="" />
            <HeaderCell title="Papel" helper={<HelperTicker />} />
            <HeaderCell title="Valor Atual" helper={<HelperPrice />} />
            <HeaderCell title="PV/P" helper={<HelperPVP />} />
            <HeaderCell title="DY 12M" helper={<HelperDY />} />
            <HeaderCell title="Últ. Rend." helper={<HelperLastDividend />} />
            <HeaderCell
              title="Últ. Rend. 12M"
              helper={<HelperSumDividends />}
            />
          </TableRow>
        </TableHead>
        <TableBody>
          {tickers.map((t) => (
            <Row key={t.ticker} ticker={t} />
          ))}
        </TableBody>
      </TremorTable>

      {tickers.length === 0 && (
        <p className="text-gray-500 text-sm text-center mt-6">
          Adicione os ativos na carteira para visualizar
        </p>
      )}
    </>
  )
}
