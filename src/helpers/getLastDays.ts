import moment from 'moment'

export function getLastDays(count = 20): string[] {
  const today = moment()
  const days = []

  for (let i = 0; days.length < count; i++) {
    const currentDay = today.clone().subtract(i, 'days')

    if (currentDay.isoWeekday() !== 6 && currentDay.isoWeekday() !== 7) {
      const dayStr = currentDay.format('DD/MMM')
      days.push(dayStr)
    }
  }

  return days
}
