export const toCurrency = (number: number) => {
  return `R$ ${Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(number)
    .toString()}`
}
