'use client'

import { Ticker } from '@/@types/TickersTypes'
import { toCurrency } from '@/helpers/currency'
import { useTickerFetch } from '@/hooks/useTickerFetch'
import { TableCell, TableRow } from '@tremor/react'
import { Cell } from './Cell'
import { BtnVisibility } from './BtnVisibility'
import { BtnRemove } from './BtnRemove'
import { Spinner } from '@phosphor-icons/react'

type Props = {
  ticker: Ticker
}

export function Row({ ticker }: Props) {
  const { isError, isLoading, data } = useTickerFetch(ticker)
  const { isHidden } = ticker

  if (isLoading) {
    return (
      <TableRow>
        <Cell>
          <BtnVisibility ticker={ticker} isDisabled={true} />
          <BtnRemove ticker={ticker} isDisabled={true} />
        </Cell>
        <TableCell className="text-center text-gray-400">...</TableCell>
        <TableCell colSpan={5} />
      </TableRow>
    )
  }

  if (isError) {
    return (
      <TableRow>
        <Cell>
          <BtnVisibility ticker={ticker} isDisabled={true} />
          <BtnRemove ticker={ticker} />
        </Cell>
        <TableCell className="text-center text-red-300">
          {ticker.ticker}
        </TableCell>
        <TableCell className="text-left text-red-300" colSpan={5}>
          Infelizmente ocorreu um erro ao tentar carregar os dados desse ativo!
        </TableCell>
      </TableRow>
    )
  }

  return (
    <TableRow>
      <Cell>
        <BtnVisibility ticker={ticker} />
        <BtnRemove ticker={ticker} />
      </Cell>
      <Cell isHidden={isHidden}>{ticker.ticker}</Cell>
      <Cell isHidden={isHidden}>{toCurrency(data.price)}</Cell>
      <Cell isHidden={isHidden}>{data.pvp}</Cell>
      <Cell isHidden={isHidden}>{data.dy12}%</Cell>
      <Cell isHidden={isHidden}>{toCurrency(data.lastDividend)}</Cell>
      <Cell isHidden={isHidden}>{toCurrency(data.dividend12)}</Cell>
    </TableRow>
  )
}
