import { View, Text, Button, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React from 'react'

const width = Dimensions.get('screen').width

const Section3 = ({navigation}) => {
    return (
        // <View style={{alignItems:"center",margin:10}}>
        <ImageBackground source={require("../assets/bg6.png")} style={{ width: width,alignItems:"center",justifyContent:"center",opacity:0.9,padding:35,borderRadius:40,marginTop:20,marginBottom:20 }}  imageStyle={{ borderRadius: 45}}>
            <Text  allowFontScaling={false} style={{ fontSize: 30, fontWeight: 700, color: "white",marginBottom:5 }}>Quiz to Earn </Text>

            <TouchableOpacity onPress={()=>navigation.navigate("Quiz To Earn")} style={{ width: 150, height: 60, alignItems: "center", justifyContent: "center", backgroundColor: "#41b7d1", borderRadius: 30 }}>
                <Text  allowFontScaling={false}style={{ color: "#111336", fontSize: 15 }}>PLAY NOW</Text>
            </TouchableOpacity>
        </ImageBackground>


        // </View>
    )
}

export default Section3