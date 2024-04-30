import { View, Text, ImageBackground, Dimensions, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Section4 = () => {
  const width = Dimensions.get('screen').width
  return (

    <ImageBackground source={require("../assets/bg11.png")} style={{marginTop:30,marginBottom:0,width:Dimensions.get('screen').width,opacity:1,paddingBottom:20}} imageStyle={{borderTopLeftRadius:20,borderTopRightRadius:20}}>
                

          

                      <View style={{backgroundColor:"#fff",opacity:0.8,alignItems:"center",justifyContent:"center",height:"auto",width:width,borderRadius:20,paddingTop:10}}>

                      <Text  allowFontScaling={false}style={{fontSize:24,fontWeight:800,color:"black"}}>Your Dashboard  <MaterialIcons name="dashboard" size={24} color="#d11780" /></Text>
                      <Text  allowFontScaling={false} 
            style={{
              height: 1,
              borderColor: "#f01c8b",
              borderWidth: 2,
              marginTop: 5,
              width:200,
              marginBottom:25,
              marginLeft:5
            
            }}
          /> 
                     </View>




     

      <View style={{height:80,width:300,backgroundColor:"#3c1642",opacity:0.9,borderRadius:20,marginRight:10,alignItems:"center",justifyContent:"space-between",marginBottom:20,flexDirection:"row",paddingLeft:20,paddingRight:10,margin:15,marginTop:40}}>

        <View style={{alignItems:"center"}}>
        <Text  allowFontScaling={false}style={{fontSize:18,fontWeight:500,color:"#fff"}}><FontAwesome name="long-arrow-right" size={20} color="#f01c8b"/>  Active Referrals</Text>
       <Text  allowFontScaling={false}style={{fontSize:25,fontWeight:500,marginTop:5,color:"#fff"}}> 0</Text>
        </View>

        <View>
          <Image source={require("../assets/money.png")} style={{width:40,height:40,resizemode:"contain"}}></Image>
        {/* <FontAwesome5 name="coins" size={24} color="#f01c8b" /> */}
        {/* <FontAwesome5 name="coins" size={24} color="#f01c8b" /> */}
        </View>
        {/* <View>
        <FontAwesome5 name="coins" size={24} color="#f01c8b" />
        <FontAwesome5 name="coins" size={24} color="#f01c8b" />
        </View> */}

        </View>

    <View style={{height:80,width:300,backgroundColor:"#3c1642",opacity:0.9,borderRadius:20,marginRight:10,alignItems:"center",justifyContent:"space-between",marginBottom:20,flexDirection:"row",paddingLeft:20,paddingRight:10,margin:15,marginTop:5}}>

        <View style={{alignItems:"center"}}>
        <Text  allowFontScaling={false}style={{fontSize:18,fontWeight:500,color:"#fff"}}><FontAwesome name="long-arrow-right" size={20} color="#f01c8b" />  Your Wallet</Text>
       <Text  allowFontScaling={false}style={{fontSize:25,fontWeight:500,marginTop:5,color:"#fff"}}>0.00</Text>
       </View>
       <View>
       <Image source={require("../assets/wallet.png")} style={{width:40,height:40,resizemode:"contain"}}></Image>

       {/* <FontAwesome5 name="wallet" size={24} color="#f01c8b"/> */}
       </View>
     
        </View>

    </ImageBackground>
  )
}

export default Section4