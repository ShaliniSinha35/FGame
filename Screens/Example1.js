import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import StockChart from '../Components/StockChart';
import CandleStockChart from '../Components/CandleStockChart';

const Example1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stock Market Data</Text>
      <CandleStockChart symbol="BTC" />
      {/* <StockChart symbol="BTC" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black",
    paddingTop:60,
    height:Dimensions.get('screen').height


  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
   textAlign:"center",
   color:"#fff"
  }
});

export default Example1;
