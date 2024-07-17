import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, ImageBackground } from 'react-native';
import axios from 'axios';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Demo() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
          headers: {
            'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
          },
          
        });
        setCryptoData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    const isPriceIncreasing = item.quote.USD.percent_change_7d > 0;
    return (
      <View style={styles.item}>
        <View style={styles.header}>
          <Image
            source={{ uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png` }}
            style={styles.logo}
          />
          <Text style={styles.title}>{item.name}</Text>
        </View>

    

        <View style={styles.table}>
<View style={styles.row}>
<Text style={styles.cellHeader}>Price</Text>
<Text style={styles.cell}>${item.quote.USD.price.toFixed(2)}</Text>
</View>

<View style={styles.row}>
<Text style={styles.cellHeader}>1h</Text>
<Text style={styles.cell}>{item.quote.USD.percent_change_1h.toLocaleString()}%</Text>
</View>


<View style={styles.row}>
<Text style={styles.cellHeader}>24h</Text>
<Text style={styles.cell}>{item.quote.USD.percent_change_24h.toLocaleString()}%</Text>

</View>

<View style={styles.row}>
<Text style={styles.cellHeader}>7d</Text>
<Text style={styles.cell}>{item.quote.USD.percent_change_7d.toLocaleString()}%</Text>
</View>

<View style={styles.row}>
<Text style={styles.cellHeader}>Market Cap</Text>
<Text style={styles.cell}>${item.quote.USD.market_cap.toLocaleString()}</Text>
</View>

<View style={styles.row}> 
<Text style={styles.cellHeader}>Last 7 days</Text>
<Text style={styles.cell}>
{isPriceIncreasing?<SimpleLineIcons name="graph" size={44} color="green" />:<SimpleLineIcons name="graph" size={44} color="red" />}

              </Text>
</View>


          
        </View>
      </View>
    );
  };

  return (
    <ImageBackground source={require("../assets/B5.jpg")} style={styles.container}>

<Text allowFontScaling={false} 
              style={{
                height: 1,
                borderColor: "#41b7d1",
                borderWidth: 2,
                marginTop: 5,
                width: Dimensions.get('screen').width * 0.98,
                marginBottom: 15,

              }}
            />
        <Text allowFontScaling={false} style={{textAlign:"center",fontSize:20,color:"#fff"}}>Cryptocurrency Prices by Market Cap</Text>
     
        <Text allowFontScaling={false} 
              style={{
                height: 1,
                borderColor: "#f01c8b",
                borderWidth: 2,
                marginTop: 15,
                width: Dimensions.get('screen').width * 0.98,
                marginBottom: 5,

              }}
            />
      <FlatList
        data={cryptoData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
  },
  item: {
    backgroundColor: '#121212',
    // padding: 20,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 8,
    width: Dimensions.get('screen').width * 0.98,
    borderWidth: 1,
    borderColor: '#fff',
    opacity:0.85
   
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:0.5,
    borderRadius:8,
    justifyContent:"center",
    // width: Dimensions.get('screen').width * 0.95,
    backgroundColor:"#fff",
    borderColor:"#fff"
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#f01c8b',
  },
  table: {
  
    overflow: 'hidden',
    width: Dimensions.get('screen').width * 0.95,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  cellHeader: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
  },
});
