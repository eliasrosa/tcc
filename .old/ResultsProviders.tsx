// 'use client'

// import { ReactNode, useEffect, useState } from 'react'

// import { ResultsContext } from '@/contexts/ResultsContext'
// import { Result } from '@/@types/ResultsTypes'
// import { Ticker } from '@/@types/TickersTypes'
// import { useTickers } from '@/hooks/useTickers'
// import { fetchTicker } from '@/helpers/tickers'

// export function ResultsProviders({ children }: { children: ReactNode }) {

//   const [results, setResults] = useState<Result[]>([])
//   const { tickers } = useTickers()

//   const get = (ticker: string): Result => {
//     return results.find((r) => r.ticker === ticker) || {} as Result
//   }

//   const load = async (tickers: Ticker[]) => {
//     console.log('loading results...', tickers);

//     const newResults: Result[] = []
//     Promise.allSettled(tickers.map((t) => fetchTicker(t.ticker)))
//       .then((responses) => {
//         responses.forEach((response) => {
//           if (response.status === 'fulfilled') {
//             newResults.push(response.value)
//           }
//         })
//       })
//       .finally(() => {
//         setResults(newResults)
//         console.log('results loaded', newResults);
//       })

//   }

//   useEffect(() => {
//     load(tickers)    
//   }, [tickers])

//   return (
//     <ResultsContext.Provider
//       value={{
//         get,
//         load,
//         results
//       }}
//     >
//       {children}
//     </ResultsContext.Provider>
//   )
// }
