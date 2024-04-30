import { View, Text, Dimensions, ImageBackground,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { FontAwesome6,AntDesign,FontAwesome } from '@expo/vector-icons';
const width= Dimensions.get('screen').width;
const height= Dimensions.get('screen').height

const Section10 = () => {
    // ,backgroundColor:"#ffc2e2"
  return (
   <ImageBackground source={require("../assets/bg10.png")} style={{width:width,marginTop:0,resizemode:"contain",borderRadius:30,justifyContent:"center",padding:10,paddingBottom:25,opacity:1,height:height * 0.3}} imageStyle={{borderRadius:0}}>

    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
    <Text allowFontScaling={false} style={{color:"#fff",fontSize:18,fontWeight:800}}>Reward Pool</Text>
      <Image source={require("../assets/camp.png")} style={{width:30,height:30,resizemode:"contain"}}></Image>
    </View>
    <Text allowFontScaling={false}
                    style={{
                        height: 1,
                        borderColor: "#f01c8b",
                        borderWidth: 2,
                        width: 120,
                        marginBottom: 8,
                    
                    }}
                />
    
    <View style={{height:80,width:300,backgroundColor:"#3c1642",opacity:1,borderRadius:20,marginRight:10,alignItems:"center",justifyContent:"space-between",marginBottom:10,flexDirection:"row",paddingLeft:20,paddingRight:10,marginTop:10}}>

<View style={{alignItems:"center"}}>
<Text  allowFontScaling={false}style={{fontSize:16,fontWeight:500,color:"#fff"}}><FontAwesome name="long-arrow-right" size={20} color="#f01c8b"/>  Active Referrals</Text>
<Text  allowFontScaling={false}style={{fontSize:25,fontWeight:500,marginTop:5,color:"#fff"}}> 0</Text>
</View>

<View>
  <Image source={require("../assets/money.png")} style={{width:30,height:30,resizemode:"contain"}}></Image>
  
</View>


    </View>

    <View style={{width:width  * 0.9, alignItems:"center"}}>
    <TouchableOpacity  style={{ alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f01c8b", width: 180, borderRadius: 25,marginTop:10 }}><Text allowFontScaling={false} style={{ fontSize: 12, color: "white", fontWeight: 700 }}> Invite To Earn <AntDesign name="doubleright" size={10} color="#fff" />  </Text></TouchableOpacity>


    </View>

   </ImageBackground>
  )
}

export default Section10