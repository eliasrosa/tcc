import { config } from '@/config'

export default async function PageSelic() {
  const response = await fetch(
    `${config.api.host}/api/v2/prime-rate?country=brazil&historical=true&start=01%2F01%2F2022&end=31%2F12%2F2023&sortBy=date&sortOrder=desc`,
    {
      cache: 'no-store',
    },
  )

  const selic = await response.json()

  return (
    <>
      <h2>Selic</h2>
      <pre>{JSON.stringify(selic, null, 2)}</pre>
    </>
  )
}
