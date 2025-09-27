export type TickerInfo = {
  ticker: string;
  name: string;
  market: string;
  locale: string;
  primary_exchange: string;
  type: string; // e.g., "ETF"
  active: boolean;
  currency_name: string; // e.g., "usd"
  cik: string; // Central Index Key (usually a string of digits)
  composite_figi: string;
  share_class_figi: string;
  last_updated_utc: string; // ISO 8601 date string
};
