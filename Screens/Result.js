import { View, Text, TouchableOpacity, StyleSheet, ImageBackground,Image,BackHandler, Alert, Dimensions } from "react-native";
import { AntDesign,Entypo } from '@expo/vector-icons';
import React, {useState,useEffect} from "react";
import { useFocusEffect } from '@react-navigation/native'
const Result = ({ navigation, route }) => {


  const { score } = route.params;


  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
     
        navigation.navigate("Home")
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  
  return (
    // <Text style={{margin:60}}>{score}</Text>
    <ImageBackground source={require("../assets/B5.png")} style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{flexDirection:"row"}}>
        <Text style={{ fontSize: 20,color:"#fff" }}>  Your Points</Text>
        {/* <Image source={require("../assets/money.png")} style={{height:30,width:30,resizeMode:"contain"}}></Image> */}
        </View>
      


        <View style={styles.textWrapper}>
          <Image source={require("../assets/coin.png")} style={{width:25,height:25}}></Image>
          <Text style={styles.score}>{score}</Text>
          <Entypo name="wallet" size={24} color="#fff" />
{/* 
          <View style={{ height: 40, width: 40, borderRadius: 30, backgroundColor: "#f01c8b", borderColor: "black", borderWidth: 2, alignItems: "center", justifyContent: "center", marginLeft: 5 }}>
    
    </View> */}


        </View>
        {/* Retry Quiz button */}
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.btnReset}
        >
          <Text style={[styles.btnText,{fontWeight:500}]}>Play Again  <AntDesign name="doubleright" size={10} color="#fff" /></Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.btnReset}
        >
          <Text style={[styles.btnText,{fontWeight:500}]}>Back to Home <AntDesign name="home" size={24} color="#fff" /></Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity:1
  },
  subContainer: {
    backgroundColor: "#3c1642",
    width: "90%",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    borderWidth:5,
    borderColor:"#f01c8b",
    elevation:5
  
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  score: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    marginRight:8,
    marginLeft:5
  },
  btnReset: {
    backgroundColor: "#f01c8b",
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "50%",
    borderRadius: 15,
    marginTop:8
  },
  btnText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 15,
    letterSpacing: 1,
    
  },
});
export default Result;