import { useEffect, useState } from "react"
import { Ticker, TickerData, TickerFecth } from "@/@types/TickersTypes";
import { TickerFetchAPI } from "@/helpers/TickerFetchAPI";


const defaultTickerFetch: TickerData = {
  dy12: 0,
  dividend12: 0,
  pvp: 0,
  price: 0,
  lastDividend: 0,
  dividendHistory: [],
  dailyPriceHistory: [],
  monthlyPriceHistory: [],
}

export const useTickerFetch = (ticker: Ticker): TickerFecth => {
  const [data, setData] = useState<TickerData>(defaultTickerFetch);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    const fetchData = async () => {
      try {

        const api = new TickerFetchAPI(ticker);
        const newData = await api.fetch();
        
        setData(newData);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [ticker]);

  return { data, isError, isLoading }
}