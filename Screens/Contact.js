import { View, Text, ImageBackground, Dimensions,Image,ScrollView } from 'react-native'
import React from 'react'
import { SocialIcon } from 'react-native-elements'

const Contact = () => {
  const height = Dimensions.get('screen').height
  const width = Dimensions.get('screen').width
  return (
    <ScrollView>
 <ImageBackground source={require("../assets/B3.png")} style={{height:height,width:width}}>
       <View style={{ width: width, alignItems: "center", marginTop: 80 }}>
        <Image source={require("../assets/logo.png")} style={{ height: 80, width: 100, resizeMode: "contain" }}></Image>
      </View>

      <View style={{ marginTop: 100, width: width, alignItems: "center" }}>
        <Text style={{ color: "#fff" }}>Contact Us </Text>
        <View style={{ width: width, justifyContent: "center", flexDirection: "row", marginTop: 15 }}>
        <SocialIcon
            type='phone'
       
          />
          <SocialIcon
            type='facebook'
          />
          <SocialIcon
            type='whatsapp'
          />
        </View>
      </View>

 </ImageBackground>
 </ScrollView>
  )
}

export default Contact