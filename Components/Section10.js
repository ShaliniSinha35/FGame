import { View, Text, Dimensions, ImageBackground,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { FontAwesome6,AntDesign,FontAwesome } from '@expo/vector-icons';
const width= Dimensions.get('screen').width;
const height= Dimensions.get('screen').height

const Section10 = () => {
    // ,backgroundColor:"#ffc2e2"
  return (
   <ImageBackground source={require("../assets/bg10.png")} style={{width:width,marginTop:0,resizemode:"contain",borderRadius:30,justifyContent:"center",padding:10,paddingBottom:25,opacity:1,height:height * 0.3}} imageStyle={{borderRadius:0}}>



<View style={{ borderRadius: 40, padding: 18, width: 350, alignItems: "center", justifyContent: "center", backgroundColor: "#3c1642", borderColor: "#f01c8b", borderWidth: 3,marginTop:60,opacity:0.95 }}>

<View style={{flexDirection:"row",justifyContent:"space-between",width:280,alignItems:"center"}}>
<View style={{ }}>

    <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 16 }}>Crypto Camp </Text> 
    <Text allowFontScaling={false}
                    style={{
                        height: 1,
                        borderColor: "#f01c8b",
                        borderWidth: 2,
                        marginTop: 5,
                        width: 130,
                        marginBottom: 15,
                    
                    }}
                />
</View>

<View style={{ flexDirection:"row"}}>
<Image source={require("../assets/camp.png")} style={{width:30,height:30,resizeMode:"contain",marginLeft:10}}></Image>

</View>
</View>



<TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={{ alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f01c8b", width: 140, borderRadius: 25,marginTop:15,borderWidth:2,borderColor:"#fff",flexDirection:"row" }}><Text allowFontScaling={false} style={{ fontSize: 12, color: "white", fontWeight: 700, backgroundColor: "#f01c8b" }}>Quiz to Earn <AntDesign name="doubleright" size={10} color="#fff" /> </Text></TouchableOpacity>
</View>



{/*     
<View style={{width:300,backgroundColor:"#3c1642",opacity:1,borderRadius:25,marginRight:10,alignItems:"center",justifyContent:"space-between",marginBottom:10,flexDirection:"row",paddingLeft:20,paddingRight:10,marginTop:10,height:80}}>

<View style={{alignItems:"center"}}>
<Text  allowFontScaling={false}style={{fontSize:16,fontWeight:500,color:"#fff"}}><FontAwesome name="long-arrow-right" size={20} color="#f01c8b"/>  Crypto Camp</Text>


</View>
<View style={{}}>
<TouchableOpacity  style={{ alignItems: "center", justifyContent: "center", padding: 10, backgroundColor: "#f01c8b", width: 120, borderRadius: 20,marginTop:10,borderWidth:2,borderColor:"#fff" }}><Text allowFontScaling={false} style={{ fontSize: 12, color: "white", fontWeight: 700 }}> Quiz To Earn <AntDesign name="doubleright" size={10} color="#fff" />  </Text></TouchableOpacity>

</View>





    </View>

    <View style={{width:width  * 0.9, alignItems:"center"}}>
    <TouchableOpacity  style={{ alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f01c8b", width: 180, borderRadius: 25,marginTop:10,borderWidth:2,borderColor:"#fff" }}><Text allowFontScaling={false} style={{ fontSize: 12, color: "white", fontWeight: 700 }}> Invite To Earn <AntDesign name="doubleright" size={10} color="#fff" />  </Text></TouchableOpacity>
    </View> */}

   </ImageBackground>
  )
}

export default Section10