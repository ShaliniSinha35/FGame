import { View, Text, ImageBackground, Dimensions, StyleSheet, Image, FlatList } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
const Section6 = () => {

  const testimonials = [

    {
      id: 0,
      img: require("../assets/user.png"),
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "#f01c8b"
    },
    {
      id: 1,
      img: require("../assets/user.png"),
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "#3c1642"
    },
    {
      id: 2,
      img: require("../assets/user.png"),
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "#f01c8b"
    },
    {
      id: 3,
      img: require("../assets/user.png"),
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "#3c1642"
    },

  ]


  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollFlatList = () => {
    const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(scrollFlatList, 3000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

  const renderItem = ({ item }) => (
    <View key={item.id} style={[styles.testimonial, { backgroundColor: item.color }]}>
      <View style={styles.imageCont}>
        <Image
          source={item.img}
          style={{ width: 60, height: 62, borderRadius: 30, resizeMode: "contain" }}
        />
      </View>
      <Text style={{ color: "#faf9f9", fontWeight: "800", textAlign: "justify" }}>{item.desc}</Text>
    </View>
  );


  return (
    // ImageBackground source={require("../assets/bg8.png")}
    <View style={{ marginTop: 20, marginBottom: 20, width: Dimensions.get('screen').width, opacity: 1 }}>
      <Text allowFontScaling={false} style={{ fontSize: 24, fontWeight: 700, color: "black", marginLeft: 20 }}>Testimonials </Text>
      <Text allowFontScaling={false}
        style={{
          height: 1,
          borderColor: "#41b7d1",
          borderWidth: 2,
          marginTop: 5,
          width: 150,
          marginBottom: 25,
          marginLeft: 25

        }}
      />



      {/* <FlatList
   horizontal
   showsHorizontalScrollIndicator={false}
   timer={5000}
  data={testimonials}
  renderItem={({item, index, separators}) => (
    <View key={item.id} style={[styles.testimonial, {backgroundColor:item.color}]}>
    <View style={styles.imageCont}>
    <Image
  source={item.img} style={{width:60,height:60,borderRadius:40,resizeMode:"contain"}}
  />
    </View>
 
<Text style={{color:"black",fontWeight:500, textAlign:"justify"}}>{item.desc}</Text>
    </View>  
  )}
/> */}


      <FlatList
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={testimonials}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled={true} // Enable paging for smooth scrolling
      />







    </View>
  )
}



export default Section6

const styles = StyleSheet.create({
  testimonial: {
    width: Dimensions.get('screen').width,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 20,
    borderwidth: 2,
    borderColor: "black",
    backgroundColor: "#90e0ef",
    padding: 20,
    marginRight: 5,
    paddingBottom: 30


  },
  imageCont: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15
  }
})