import React, { useRef, memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function TradingViewWidget() {
  const webviewRef = useRef(null);

  const widgetHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { margin: 0; backgroundColor:"red",height:100% }
          .tradingview-widget-container { height: 1800; width: 800; }
          .livecoinwatch-widget-1 {height: 1800; width: 800; backgroundColor:"red"}
          #tradingview-widget { height: 1200; width: 800; } /* Adjusted height here */
        </style>
      </head>
      <body>


      <div class="livecoinwatch-widget-1" lcw-coin="BTC" lcw-base="USD" lcw-secondary="BTC" lcw-period="d" lcw-color-tx="#ffffff" lcw-color-pr="#58c7c5" lcw-color-bg="#1f2434" lcw-border-w="1"  >
      
      
      </div>
        // <div id="tradingview-widget-container">
        //   <div id="tradingview-widget"></div>
       
        // </div>
        <script type="text/javascript">
          function loadTradingView() {
            new TradingView.widget({
               "width": "580",
          "height": "1110",
          "symbol": "NASDAQ:AAPL",
           "interval": "15",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "allow_symbol_change": true,
          "save_image": false,
          "calendar": false
         
            });
          }
        </script>
      </body>
    </html>
  `;

  const onLoadEnd = () => {
    webviewRef.current.injectJavaScript(`
      (function() {
        var script = document.createElement('script');
        script.src = 'https://www.livecoinwatch.com/static/lcw-widget.js';
        script.async = true;
        script.onload = function() {
          loadTradingView();
        };
        document.body.appendChild(script);
      })();
    `);
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        originWhitelist={['*']}
        source={{ html: widgetHtml }}
        style={styles.webview}
        onLoadEnd={onLoadEnd}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: "#fff"
  },
  webview: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default memo(TradingViewWidget);
