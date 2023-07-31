import { HistoryChart } from '@/components/HistoryChart'
import { getQuote } from '@/helpers/getQuote'
import { Card } from '@/components/Card'
import { getPVP } from '@/helpers/getPVP'
import { getDY } from '@/helpers/getDY'
import { getLastDY } from '@/helpers/getLastDY'

interface AnalisesProps {
  params: {
    ticket: string
  }
}

export default async function PageFiis({ params }: AnalisesProps) {
  const data = await getQuote(params.ticket)

  const pvp = getPVP(
    data.valuePatrimonial,
    data.totalCotas,
    data.regularMarketPrice,
  )

  const dy = getDY(data.dividendsData, data.regularMarketPrice)
  const lastDy = getLastDY(data.dividendsData)
  const volume = data.averageDailyVolume10Day

  return (
    <>
      <h1>{data.symbol}</h1>
      <h3>{data.longName}</h3>

      <div className="flex space-x-8">
        <Card title="Valor" value={data.regularMarketPrice} type="currency" />
        <Card title="DY (12M)" value={dy} type="percent" />
        <Card title="P/VP" value={pvp} type="number" />
        <Card title="Volume (10D)" value={volume} type="number" />
        <Card title="Último dividendo" value={lastDy} type="currency" />
      </div>

      <HistoryChart data={data.dividendsData} />
      {/* <HistoryChart /> */}

      {/* <div>{JSON.stringify(data, null, 2)}</div> */}
    </>
  )
}
