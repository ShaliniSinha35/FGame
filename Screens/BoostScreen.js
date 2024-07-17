import { View, Text,ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
const width= Dimensions.get('screen').width
const BoostScreen = () => {
  return (
<ImageBackground source={require("../assets/B5.jpg")} style={{width:width,flex:1}}>

<View style={{width:width,alignItems:"flex-end",paddingRight:10,marginTop:20}}>
<View style={{backgroundColor:"#41b7d1",borderRadius:20, alignItems:"center",paddingVertical:5,paddingHorizontal:10,borderWidth:2,borderColor:"#fff"}}>
    <Text style={{color:"#fff",letterSpacing:3}}>Available GOLDs</Text>
    <View style={{flexDirection:"row"}}>
    <Image source={require("../assets/coin.png")} style={{width:20,height:20}}></Image>
    <Text allowFontScaling={false} style={{color:"#f01c8b",fontSize:16,letterSpacing:2,fontWeight:800}}>492,061.37 </Text>
    </View>
</View>
</View>

<View style={{marginTop:100,alignItems:"center"}}>


<View style={{paddingHorizontal:20,backgroundColor:"#3c1642",borderRadius:15,alignItems:"center",justifyContent:"center",borderWidth:2,borderColor:"#fff"}}>
<Image source={require("../assets/h1.png")} style={{height:40,width:40}}></Image>
            </View>
   <View style={{width:300,borderWidth:2,borderColor:"white",borderRadius:20,padding:10,alignItems:"center",backgroundColor:"#3c1642"}}>
 



   <View style={{backgroundColor:"#fff",marginTop:15,borderRadius:15,alignItems:"center",flexDirection:"row",padding:5}}>
          <View style={{width:50}}>
          <View style={{height:40,width:40,backgroundColor:"#f01c8b",alignItems:"center",justifyContent:"center"}}>
<Image source={require("../assets/h1.png")} style={{width:30,height:30, resizeMode:"contain"}}></Image>

</View>
          </View>
          <View style={{width:180,marginLeft:20}}>
            <View style={{flexDirection:"row"}}>
            <Image source={require("../assets/coin.png")} style={{width:20,height:20}}></Image>
            <Text allowFontScaling={false} style={{color:"#f01c8b",fontSize:16,letterSpacing:2,fontWeight:800}}>3/m </Text>

            <View style={{height:40,width:100,backgroundColor:"#f01c8b",alignItems:"center",justifyContent:"center",borderRadius:20}}>
<Image source={require("../assets/boost.png")} style={{width:30,height:30, resizeMode:"contain"}}></Image>
</View>
            </View>

            <View style={{width:150,backgroundColor:"#41b7d1",marginTop:10,borderRadius:20, flexDirection:"row",alignItems:"center",paddingLeft:10,paddingVertical:5}}>
    <Text style={{color:"#fff"}}>NEXT: </Text>
    <Image source={require("../assets/coin.png")} style={{width:20,height:20}}></Image>
    <Text style={{color:"#fff",fontWeight:600}}>???/m </Text>

</View>

          </View>

         </View>


         
   <View style={{backgroundColor:"#fff",marginTop:15,borderRadius:15,alignItems:"center",flexDirection:"row",padding:5,opacity:0.7}}>
          <View style={{width:50}}>
          <View style={{height:40,width:40,backgroundColor:"#f01c8b",alignItems:"center",justifyContent:"center"}}>
          <FontAwesome name="question" size={24} color="white" />
</View>
          </View>
          <View style={{width:180,marginLeft:20}}>
            <View style={{flexDirection:"row"}}>
            <Image source={require("../assets/coin.png")} style={{width:20,height:20}}></Image>
            <Text allowFontScaling={false} style={{color:"#f01c8b",fontSize:16,letterSpacing:2,fontWeight:800}}>???/m </Text>


            </View>

            <View style={{width:150,backgroundColor:"#41b7d1",marginTop:10,borderRadius:20, flexDirection:"row",alignItems:"center",paddingLeft:10,paddingVertical:5}}>
    <Text style={{color:"#fff"}}>NEXT: </Text>
    <Image source={require("../assets/coin.png")} style={{width:20,height:20}}></Image>
    <Text style={{color:"#fff",fontWeight:600}}>???/m </Text>

</View>

          </View>

         </View>

 






        <TouchableOpacity style={{backgroundColor:"#41b7d1",width:200,alignItems:"center",paddingVertical:10,borderRadius:20,marginTop:20}}>
            <Text style={{color:"#fff",letterSpacing:3,fontSize:15}}>MINT</Text>
        </TouchableOpacity>


       
   </View>
</View>

</ImageBackground>
  )
}

export default BoostScreen