/* eslint-disable @typescript-eslint/no-explicit-any */
export const setLocalStorage = (key: string, value: any) => {
  const data = JSON.stringify(value)
  window.localStorage.setItem(key, data)
}

export const getLocalStorage = (key: string, defaultValue: any) => {
  const data = window.localStorage.getItem(key)

  if (!data) {
    return defaultValue
  }

  return JSON.parse(data)
}
