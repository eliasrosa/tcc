import * as cheerio from 'cheerio'

export const investidor10 = async (ticket: string) => {
  const response = await fetch(
    `https://investidor10.com.br/fiis/${ticket.toLowerCase()}/`,
  )

  const result = {
    totalCotas: 0,
    valuePerCotas: 0,
    valuePatrimonial: 0,
  }

  const data = await response.text()
  const dom = cheerio.load(data)

  const table = dom('.desc', '#about-company #table-indicators .cell').text()

  const valuePerCotas = table
    .match(/VAL. PATRIMONIAL P\/ COTA\s*(R\$ ([\d.,]+))/)?.[2]
    .replaceAll('.', '')
    .replaceAll(',', '.')
    .trim()

  const totalCotas = table
    .match(/COTAS EMITIDAS\s*([\d.]+)/)?.[1]
    .replaceAll('.', '')
    .trim()

  if (totalCotas) {
    result.totalCotas = Number(totalCotas)
  }

  if (valuePerCotas) {
    result.valuePerCotas = Number(valuePerCotas)
  }

  result.valuePatrimonial = result.valuePerCotas * result.totalCotas

  return result
}
