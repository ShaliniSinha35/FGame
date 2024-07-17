import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const StockChart = ({ symbol }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const stockData = await fetchStockData(symbol);
      console.log(stockData)
      const parsedData = parseStockData(stockData);
      setData(parsedData);
    };
    fetchData();
  }, [symbol]);

  const fetchStockData = async (symbol) => {
    const API_KEY = 'XLS1MT1AQJ6P3ICT';
    const BASE_URL = 'https://www.alphavantage.co/query';
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          function: 'TIME_SERIES_DAILY',
          symbol,
          market:'EUR',
          apikey: API_KEY,
     
        }
      });


      console.log(response.data)
      return response.data['Time Series (Daily)'];
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  const parseStockData = (data) => {

    console.log(data)
    return Object.keys(data).map(date => {
      const { '1. open': open, '2. high': high, '3. low': low, '4. close': close } = data[date];
      return [
        new Date(date).getTime(),
        parseFloat(open),
        parseFloat(high),
        parseFloat(low),
        parseFloat(close)
      ];
    }).reverse();
  };

  const highchartsConfig = {
    chart: {
      type: 'candlestick',
      height: height + 200,
      backgroundColor: '#3c1642' // Black background
    },
    rangeSelector: {
      selected: 1
    },
    title: {
      text: `${symbol} Stock Price`,
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
                background-color: #3c1642; /* Black background */
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
    backgroundColor: '#3c1642' ,
    marginTop:20,
    // padding:5
  }
});

export default StockChart;
