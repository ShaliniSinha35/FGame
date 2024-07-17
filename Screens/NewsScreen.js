import { View, Text,Dimensions,ImageBackground,StyleSheet } from 'react-native'
import React from 'react'
const width= Dimensions.get('screen').width
const NewsScreen = () => {
  return (
 <ImageBackground style={styles.container} source={require("../assets/B5.jpg")}>
<Text style={{color:"#fff",fontSize:18}}>Coming Soon...</Text>
 </ImageBackground>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        paddingTop:40
    }
})

export default NewsScreen