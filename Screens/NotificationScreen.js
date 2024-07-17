import { View, Text, Dimensions,ImageBackground } from 'react-native'
import React from 'react'

const width = Dimensions.get("screen").width

const NotificationScreen = () => {
  return (
<ImageBackground source={require("../assets/bg9.png")} style={{flex:1,width:width,alignItems:"center",paddingTop:50}}>
     <Text style={{fontSize:18,fontWeight:500,letterSpacing:3,color:"#f01c8b"}}>No Notifications</Text>
</ImageBackground>
  )
}

export default NotificationScreen