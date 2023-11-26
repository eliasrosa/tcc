import moment from 'moment'

export function getLastMonths(count = 12): string[] {
  const today = moment()
  const months = []

  for (let i = 0; i < count; i++) {
    const currentMonth = today.clone().subtract(i, 'months')
    const monthStr = currentMonth.format('MMM/YY')
    months.push(monthStr)
  }

  return months
}
