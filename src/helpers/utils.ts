import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import moment from 'moment'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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

export function getLastDays(count = 20): string[] {
  const today = moment()
  const days = []

  for (let i = 0; i < count; i++) {
    const currentDay = today.clone().subtract(i, 'days')
    const dayStr = currentDay.format('DD/MMM')
    days.push(dayStr)
  }

  return days
}

export function mergeArrayOfObjects(arr: object[]): object {
  return arr.reduce((mergedObj, currentObj) => {
    return { ...mergedObj, ...currentObj }
  }, {})
}
