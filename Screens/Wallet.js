import { View, Text, ImageBackground, Dimensions, TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'
import { AntDesign,FontAwesome,FontAwesome5 } from '@expo/vector-icons';

const Wallet = () => {

  const height=Dimensions.get('screen').height
  const width = Dimensions.get('screen').width
  return (
    <ScrollView>
  <ImageBackground source={require("../assets/B7.png")} style={{height:height,width:width}}>

   <View style={{width:width,alignItems:"center",marginTop:100}}>
    <View style={{width:300,backgroundColor:"#f01c8b",opacity:1,borderRadius:20,alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:"#fff",paddingTop:10,paddingBottom:10}}>
      <View style={{alignItems:"center"}}>

      <Text allowFontScaling={false} style={{color:"#fff",fontSize:15}}>Your Wallet  </Text>
      {/* <Image source={require("../assets/coin.png")} style={{height:30,width:30}}></Image> */}
      </View>
<View style={{flexDirection:"row"}}>
<Image source={require("../assets/coin.png")} style={{height:30,width:30,marginTop:5}}></Image>

<Text style={{color:"#fff",fontSize:16,marginTop:10,textAlign:"center"}}>0.00 points</Text>

</View>


    </View>

<View >

</View>


   </View>


   <View style={{width:width,alignItems:"center",marginTop:100}}>
    <View style={{width:350,backgroundColor:"#3c1642",opacity:1,borderRadius:20,padding:20,borderWidth:1,borderColor:"#fff"}}>
    <Text allowFontScaling={false} style={{color:"#fff"}}>Staking Vault : </Text>

  <Text allowFontScaling={false}
                    style={{
                        height: 1,
                        borderColor: "#f01c8b",
                        borderWidth: 0.5,
                        marginTop: 10,
                        width: 300,
                        marginBottom: 15,
                    
                    }}
                />  


        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <View>
      <Text allowFontScaling={false} style={{color:"#fff",fontSize:15,marginTop:10}}>Total Staking yields</Text>
      <Text allowFontScaling={false} style={{color:"#fff",fontSize:12,marginTop:10,marginLeft:30}}><FontAwesome5 name="coins" size={24} color="#ffba08" />  0</Text>
        </View> 
        <TouchableOpacity style={{backgroundColor:"#f01c8b",width:80,alignItems:"center",borderRadius:20,justifyContent:"center"}}><Text style={{color:"#fff",fontSize:18}}>Go  <AntDesign name="doubleright" size={12} color="#fff" /></Text></TouchableOpacity> 
          </View>        

            


    </View>

<View >

</View>


   </View>
    
     
  </ImageBackground>
  </ScrollView>
  )
}

export default Wallet