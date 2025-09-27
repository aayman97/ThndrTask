import axios from 'axios';
import { TickerInfo } from '../types/TickerInfo';

export const getTickers = async (ticker: string, limit: number) => {
  try {
    const response = await axios.get(
      'https://api.polygon.io/v3/reference/tickers',
      {
        params: {
          market: 'stocks',
          search: ticker,
          active: true,
          order: 'asc',
          limit: limit < 1000 ? limit : 1000,
          sort: 'ticker',
          apiKey: '3ApbKIX6dOPnP8r6q5QVLzAsWLruR469',
        },
      },
    );

    return response.data.results as TickerInfo[];
  } catch (error) {
    console.log(error);
    return error;
  }
};
