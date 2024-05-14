import { View, Text, ImageBackground, Dimensions, Image, StyleSheet, TouchableOpacity, Switch, Animated } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from '../AuthContext';
import MarqueeText from 'react-native-marquee';
const Section1 = ({ navigation }) => {
  const { mobile } = useAuth()

  const [animatedValue] = useState(new Animated.Value(0));
  const [textWidth, setTextWidth] = useState(0);
  const containerWidth = Dimensions.get('screen').width;
  const textRef = useRef(null);

  useEffect(() => {
    startAnimation();

  });

  const startAnimation = () => {
    const duration = (textWidth + containerWidth) / 50; // Adjust speed by changing the divisor

    Animated.timing(animatedValue, {
      toValue: -textWidth,
      duration: duration * 500,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        animatedValue.setValue(0);
        startAnimation();
      }
    });
  };

  const onTextLayout = (e) => {
    const { width } = e.nativeEvent.layout;
    setTextWidth(width);
  };
  const headings = [
    {
      id: 0,
      content: "david123 has successfully won",
      points:"70,900"
    },
    {
      id: 1,
      content: "xyz123 has successfully won",
      points:"45,300"
    },
    {
      id: 2,
      content: "user123 has successfully won",
      points:"62,600"
    },
    {
      id: 3,
      content: "xyz123 has successfully won",
      points:"54,000"
    },

  ]

  return (
    <View style={{ marginTop: 0 }}>
      <ImageBackground style={{ width: Dimensions.get('screen').width, borderBottomLeftRadius: 20, borderBottomRightRadius: 50, borderTopEndRadius: 40, height: 250, resizeMode: "contain" }} source={require("../assets/vfrg.png")} >



        <View style={styles.container}>


          <TouchableOpacity style={{ flexDirection: "row", marginTop: 5 }} onPress={() => navigation.navigate("Wallet")}>
            <View style={{ width: 120, height: 40, backgroundColor: "#fff", borderRadius: 20, marginLeft: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", opacity: 0.9 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../assets/coin.png")} style={{ width: 40, height: 40, resizeMode: "contain" }}></Image>
                <Text  allowFontScaling={false} style={{ color: "#f01c8b", fontWeight: 700 }}>5.00</Text>
              </View>

              <View style={{ height: 40, width: 40, borderRadius: 30, backgroundColor: "#f01c8b", borderColor: "black", borderWidth: 2, alignItems: "center", justifyContent: "center" }}>
                <Entypo name="wallet" size={24} color="#fff" />
              </View>
            </View>



          </TouchableOpacity>

          {/* <Image style={styles.logo} source={require("../assets/logo.png")}></Image> */}

          <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")} style={{ alignItems: "center" }}>

            <View style={styles.profileCont}>
              <Image source={require("../assets/user.png")} style={{ height: 43, width: 40, resizeMode: "contain" }}></Image>
            </View>
            {/* <Text style={{color:"#fff",fontWeight:900,marginTop:1}}>{mobile}</Text> */}
          </TouchableOpacity>
        </View>









        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 65 }}>
          <View style={{ height: 70, width: 180, backgroundColor: "#f01c8b", borderRadius: 20, marginRight: 10, alignItems: "center", justifyContent: "center", marginLeft: 5, opacity: 0.9, display: "none" }}>

            <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Activity Rate  <AntDesign name="infocirlce" size={20} color="#41b7d1" /></Text>
            <Text allowFontScaling={false} style={{ fontSize: 10, fontWeight: 500, marginTop: 5 }}>0.01 points/hr</Text>


          </View>




          <View style={{ height: 70, width: 180, backgroundColor: "#f01c8b", borderRadius: 20, alignItems: "center", justifyContent: "center", opacity: 0.9, display: "none" }}>
            <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Your Network  <AntDesign name="infocirlce" size={20} color="#41b7d1" /></Text>
            <Text allowFontScaling={false} style={{ fontSize: 10, fontWeight: 500, marginTop: 5 }}>0 Active</Text>
          </View>


        </View>




        <View style={{ width: Dimensions.get('screen').width, alignItems: 'center', position: 'absolute', bottom: 10, flexDirection: 'row' }}>
          {headings.map((item) => (
            <Animated.View key={item.id} style={{ transform: [{ translateX: animatedValue }],margin:10 }}>
              <View onLayout={onTextLayout}>
                <View
                  style={{
                    fontSize: 10,
                    backgroundColor: '#fff',
                    padding: 8,
                    borderRadius: 20,
                    opacity: 0.6,
                    flexDirection:"row",
                    alignItems:"center"

                  }}>
                      <Text  allowFontScaling={false} style={{ fontSize: 10 }}>{item.content}</Text>
                      <Image source={require("../assets/coin.png")} style={{height:20,width:20,resizeMode:"contain"}}></Image>
                      <Text  allowFontScaling={false} style={{ fontSize: 10 }}>{item.points}</Text>
                </View>
              </View>
            </Animated.View>
          ))}
        </View>

      </ImageBackground>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,


  },
  logo: {
    height: 70,
    width: 80,
    resizeMode: "contain",
    // margin: 2
  },
  profileCont: {
    width: 50,
    height: 50,
    backgroundColor: "#d11780",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5
    // marginTop:25


  }
});

export default Section1