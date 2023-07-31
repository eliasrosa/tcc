import * as cheerio from 'cheerio'

export const investidor10API = async (ticket: string) => {
  // const response = await fetch(
  //   `https://www.suno.com.br/fundos-imobiliarios/${ticket.toLowerCase()}/`,
  // )

  const result = {
    totalCotas: 0,
    valuePerCotas: 0,
    valuePatrimonial: 0,
  }

  // const data = await response.text()
  // const dom = cheerio.load(data)

  // #indicadores > div.row.gx-4 > div.col-12.gx-4.col-lg-4 > div > div:nth-child(1) > div > div.style__GaugeContent-sc-7o52xg-2.paGZO > div.style__GaugeValues-sc-7o52xg-5.iISrIB.col-6 > ul > li:nth-child(1) > span:nth-child(2)


  // const table = dom('//*[@id="indicadores"]/div[2]/div[1]/div/div[1]/div/div[2]/div[2]/ul/li[1]/span[2]').text()
  // console.log(table);
  

  // const valuePerCotas = table
  //   .match(/VAL. PATRIMONIAL P\/ COTA\s*(R\$ ([\d.,]+))/)?.[2]
  //   .replaceAll('.', '')
  //   .replaceAll(',', '.')
  //   .trim()

  // const totalCotas = table
  //   .match(/COTAS EMITIDAS\s*([\d.]+)/)?.[1]
  //   .replaceAll('.', '')
  //   .trim()

  // if (totalCotas) {
  //   result.totalCotas = Number(totalCotas)
  // }

  // if (valuePerCotas) {
  //   result.valuePerCotas = Number(valuePerCotas)
  // }

  // result.valuePatrimonial = result.valuePerCotas * result.totalCotas

  return result
}
