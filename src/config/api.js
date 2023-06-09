// API call to get list of coins and display in Coins table  / parameter passed: currency of the coin
export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

// API call to get info about one single currency / parameter passed: id of that coin
export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

// API call to get data about historical chart of that particular coin / parameter passed: id, duration and currency of that coin
export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

// API call to get info about top 10 trending coins  / parameter passed: currency of the coin
export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
