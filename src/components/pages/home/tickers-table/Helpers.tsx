import { Callout } from '@tremor/react'
import { ReactNode } from 'react'

import { ExclamationCircleIcon } from '@heroicons/react/solid'

interface HelperContentProps {
  formula?: string
  children: ReactNode
}

export const HelperContent = ({ children, formula }: HelperContentProps) => {
  return (
    <>
      <div>{children}</div>
      {formula && (
        <div className="border p-4 mt-4 bg-gray-100">
          <span className="font-semibold  mr-2">Cálculo:</span>
          {formula}
        </div>
      )}
    </>
  )
}

export const HelperPVP = () => {
  return (
    <HelperContent formula="Preço atual do ativo / Valor patrimonial da ação (VPA)">
      Essa métrica reflete o montante que o mercado está disposto a investir no
      patrimônio da empresa. Quando é inferior a 1, sugere que a empresa está
      sendo comercializada por um valor inferior ao seu valor patrimonial real.
    </HelperContent>
  )
}

export const HelperDY = () => {
  return (
    <HelperContent formula="Rendimentos pagos no período de 12 meses / Preço atual da ação">
      O Dividend Yield é uma métrica financeira que representa a porcentagem do
      dividendo distribuídos pela empresa nos últimos 12 meses em relação ao seu
      preço de mercado por ação. É usado por investidores para avaliar o retorno
      de dividendos potencial de um investimento em ações. Quanto maior o
      Dividend Yield, maior o potencial de renda gerada pelos dividendos.
    </HelperContent>
  )
}

export const HelperLastDividend = () => {
  return (
    <HelperContent formula="Rendimentos pagos no período de 12 meses / Preço atual da ação">
      Último redimento pago
    </HelperContent>
  )
}

export const HelperSumDividends = () => {
  return (
    <HelperContent>
      Soma dos redimentos pagos dos últimos 12 meses
    </HelperContent>
  )
}

export const HelperTicker = () => {
  return (
    <HelperContent>
      Nome do indetificador do ativo da empresa, também conhecido como papel,
      symbol, ticker, ticket, etc...
    </HelperContent>
  )
}

export const HelperPrice = () => {
  return (
    <HelperContent>
      Valor atual do ativo
      <Callout
        title="Aviso Importante:"
        color="yellow"
        icon={ExclamationCircleIcon}
        className="mt-4"
      >
        Por favor, esteja ciente de que os preços das ações exibidos podem ter
        um atraso de até 15 minutos. Recomendamos consultar fontes financeiras
        em tempo real para informações atualizadas.
      </Callout>
    </HelperContent>
  )
}
