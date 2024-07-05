import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useAuth } from '../AuthContext';
import { useSelector } from 'react-redux';
import axios from 'axios';

import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'EB': require('../assets/fonts/ShortBaby-Mg2w.ttf'), 
  });
};



const Section1 = ({ navigation }) => {
  const { mobile } = useAuth();
  const [animatedValue] = useState(new Animated.Value(0));
  const [textWidth, setTextWidth] = useState(0);
  const containerWidth = Dimensions.get('screen').width;
  const textRef = useRef(null);
  const userInfo = useSelector(state => state.user.userInfo ? state.user.userInfo : null);
  const [wallet, setWallet] = useState(0);
  const { isWalletUpdated, setIsWalletUpdated } = useAuth();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const getWalletValue = async () => {
    if (userInfo) {
      try {
        const res = await axios.get("https://fiedex.com/fiedex/wallet", {
          params: { userId: userInfo.id },
        });
        const data = res.data;
        setWallet(data[0].amount);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getWalletValue();
  }, [isWalletUpdated]);

  useEffect(() => {
    startAnimation();
  }, [textWidth, containerWidth]);

  const startAnimation = useCallback(() => {
    const duration = (textWidth + containerWidth) / 50;

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
  }, [textWidth, containerWidth]);

  const onTextLayout = (e) => {
    const { width } = e.nativeEvent.layout;
    setTextWidth(width);
  };

  const headings = [
    { id: 0, content: "david123 has successfully won", points: "70,900" },
    { id: 1, content: "xyz123 has successfully won", points: "45,300" },
    { id: 2, content: "user123 has successfully won", points: "62,600" },
    { id: 3, content: "xyz123 has successfully won", points: "54,000" },
  ];

  // useEffect(() => {
  //   const loadAsyncFonts = async () => {
  //     await loadFonts();
  //     setFontsLoaded(true);
  //     // SplashScreen.hideAsync();
  //   };

  //   loadAsyncFonts();
  // }, []);

  // if (!fontsLoaded) {
  //   return null; 
  // }

  return (
    <View style={{ marginTop: 0 }}>
      <ImageBackground
        style={{
          width: Dimensions.get('screen').width,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 50,
          borderTopEndRadius: 40,
          height: 250,
          resizeMode: "contain",
        }}
        source={require("../assets/vfrg.png")}
      >
        <View style={styles.container}>
          <TouchableOpacity style={{ flexDirection: "row", marginTop: 5 }} onPress={() => navigation.navigate("Wallet")}>
            <View style={styles.walletContainer}>
              <View style={styles.walletInfo}>
                <Image source={require("../assets/coin.png")} style={styles.coinImage} />
                <Text allowFontScaling={false} style={styles.walletText}>{wallet}.00</Text>
              </View>
              <View style={styles.walletIcon}>
                <Entypo name="wallet" size={24} color="#fff" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")} style={{ alignItems: "center" }}>
            <View style={styles.profileCont}>
              <Image source={require("../assets/user.png")} style={styles.userImage} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.headingContainer}>
          <Text style={[styles.headingText, { fontFamily: "EB" }]}>Quiz To Earn</Text>
          <Text style={[styles.subheadingText, { fontFamily: "EB" }]}>Crypto</Text>
        </View>
        <View style={styles.marqueeContainer}>
          {headings.map((item) => (
            <Animated.View key={item.id} style={{ transform: [{ translateX: animatedValue }], margin: 10 }}>
              <View onLayout={onTextLayout}>
                <View style={styles.marqueeTextContainer}>
                  <Text allowFontScaling={false} style={styles.marqueeText}>{item.content}</Text>
                  <Image source={require("../assets/coin.png")} style={styles.marqueeCoinImage} />
                  <Text allowFontScaling={false} style={styles.marqueeText}>{item.points}</Text>
                </View>
              </View>
            </Animated.View>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  walletContainer: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    opacity: 0.9,
  },
  walletInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  walletText: {
    color: "#f01c8b",
    fontWeight: "700",
  },
  walletIcon: {
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: "#f01c8b",
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  profileCont: {
    width: 50,
    height: 50,
    backgroundColor: "#d11780",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  userImage: {
    height: 43,
    width: 40,
    resizeMode: "contain",
  },
  headingContainer: {
    width: Dimensions.get("screen").width,
    alignItems: "center",
    padding: 10,
  },
  headingText: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "950",
    elevation:5
  },
  subheadingText: {
    fontSize: 30,
    fontWeight: "950",
    color: "#fff",
  elevation:3,
  marginLeft:-8
  },
  marqueeContainer: {
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
  },
  marqueeTextContainer: {
    fontSize: 10,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    opacity: 0.6,
    flexDirection: "row",
    alignItems: "center",
  },
  marqueeText: {
    fontSize: 10,
  },
  marqueeCoinImage: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});

export default Section1;
