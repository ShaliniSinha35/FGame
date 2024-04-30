import { View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const width = Dimensions.get('screen').width

const Section2 = () => {
    return (
        <ImageBackground source={require("../assets/h111.jpg")} style={{ width: width, alignItems: "center",height:150,justifyContent:"center",opacity:0.7,borderBottomLeftRadius:20,borderTopLeftRadius:20,borderBottomRightRadius:20,borderBottomLeftRadius:20,padding:20 }} imageStyle={{ borderRadius: 30}}>

            <TouchableOpacity style={{ height: 120, width: 300, backgroundColor: "white", borderRadius: 20, alignItems: "center", justifyContent: "center",padding:15 }}>
                <Text  allowFontScaling={false}style={{ fontSize: 25, fontWeight: 500, color: "#111336" }}>Stack Your Value</Text>
                <Text  allowFontScaling={false}style={{ fontSize: 10, fontWeight: 500, marginTop: 5 }}>3.33% annual Interest</Text>
                <Text  allowFontScaling={false}style={{ fontSize: 15, fontWeight: 500, marginTop: 5 }}>Increase Your Activity Rate</Text>

                <AntDesign name="doubleright" size={24} color="#41b7d1" style={{marginTop:10}} />
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default Section2