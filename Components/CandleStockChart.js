import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const CandleStockChart = ({ symbol = 'BTC' }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cryptoData = await fetchCryptoData(symbol);
      // console.log('Fetched Data:', cryptoData);
      if (cryptoData) {
        const parsedData = parseCryptoData(cryptoData);
        setData(parsedData);
      }
    };
    fetchData();
  }, [symbol]);

  const fetchCryptoData = async (symbol) => {
    const API_KEY = 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'; // Sandbox API Key
    const BASE_URL = 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/ohlcv/historical';

    try {
      const response = await axios.get(BASE_URL, {
        headers: {
          'X-CMC_PRO_API_KEY': API_KEY,
        },
        params: {
          symbol,
          convert: 'USD',
          time_start: '2022-01-01',
          time_end: '2024-07-01',
        },
      });

      // console.log('API Response:', response.data);
      return response.data.data[symbol]?.quotes;
    } catch (error) {
      console.error('Error fetching crypto data:', error);
    }
  };

  const parseCryptoData = (quotes) => {
    if (!quotes) {
      console.error('No quotes data to parse');
      return [];
    }

    return quotes.map(quote => {
      const { timestamp, quote: { USD: { open, high, low, close } } } = quote;
      return [
        new Date(timestamp).getTime(),
        parseFloat(open),
        parseFloat(high),
        parseFloat(low),
        parseFloat(close)
      ];
    });
  };

  const highchartsConfig = {
    chart: {
      type: 'candlestick',
      height: height + 200,
      backgroundColor: '#000' // Black background
    },
    rangeSelector: {
      selected: 1
    },
    title: {
      text: `${symbol} Price`,
      style: {
        color: '#fff' // White text color
      }
    },
    xAxis: {
      labels: {
        style: {
          color: '#fff' // White text color for x-axis labels
        }
      }
    },
    yAxis: {
      labels: {
        style: {
          color: '#fff' // White text color for y-axis labels
        }
      }
    },
    series: [{
      name: symbol,
      data: data,
      color: 'green', // Positive candle color
      upColor: 'red', // Negative candle color
      lineColor: 'green', // Positive line color (close > open)
      upLineColor: 'red' // Negative line color (close < open)
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            width: 500,
            height: 1700
          },
          navigator: {
            enabled: true
          }
        }
      }]
    }
  };

  const highchartsScript = `
    document.addEventListener("DOMContentLoaded", function() {
      console.log("DOM fully loaded and parsed");
      Highcharts.stockChart('container', ${JSON.stringify(highchartsConfig)});
    });
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        style={{ flex: 1, width: '100%' }}
        source={{ html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              html, body, #container {
                height: 100%;
                width: 100%;
                margin: 0;
                padding: 0;
                background-color: #000; /* Black background */
                color: #fff; /* White text color */
                overflow: hidden;
              }
            </style>
            <script src="https://code.highcharts.com/stock/highstock.js"></script>
          </head>
          <body>
            <div id="container"></div>
            <script>
              ${highchartsScript}
            </script>
          </body>
          </html>
        ` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    marginTop: 20,
  }
});

export default CandleStockChart;
