import { View, Text, ImageBackground, Dimensions, ScrollView, Image, TouchableOpacity,TextInput } from 'react-native'
import React, {useState} from 'react'
import { Entypo } from '@expo/vector-icons';
const width = Dimensions.get('screen').width

const ConvertFiedex = () => {

    const [value,setValue]= useState(0)
  return ( 
<ImageBackground source={require("../assets/B5.jpg")} style={{flex:1,width:width}}>

<Text allowFontScaling={false} style={{color:"#fff",marginTop:50,fontSize:20,textAlign:"center",letterSpacing:5,fontWeight:600}}>Convert To Fiedex</Text>

<View style={{borderTopWidth:2,borderRadius:20, borderColor:"#fff",width:width,height:500,alignItems:"center",marginTop:20}}>

    <View style={{width:width, alignItems:"center",marginTop:20}}>
    <View style={{width: width * 0.9, height:500, borderWidth:3, borderColor:"#fff", borderRadius:20,backgroundColor:"#121212",opacity:0.8}}>

        <View style={{backgroundColor:"#f01c8b",borderRadius:20,paddingLeft:10,paddingVertical:5}}>
            <Text allowFontScaling={false} style={{color:"#fff", letterSpacing:4,fontSize:15}}>Crypto Assets</Text>

            <View style={{flexDirection:"row",marginTop:5}}>
<Image source={require("../assets/coin.png")} style={{width:18,height:18}}></Image>
<Text allowFontScaling={false} style={{color:"#fff",fontSize:13,letterSpacing:2,fontWeight:800}}>492,061 </Text>

</View>

        </View> 

        <View style={{paddingVertical:20,borderWidth:2,borderColor:"#fff",marginTop:20,margin:10,backgroundColor:"#3c1642",borderRadius:30}}>
            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
            <View>
<View style={{flexDirection:"row"}}>
<Image source={require("../assets/coin.png")} style={{width:18,height:18}}></Image>
<Text allowFontScaling={false} style={{color:"#fff",fontSize:13,letterSpacing:2,fontWeight:800}}>points </Text>

</View>
            </View>
            <View>
        <Text style={{color:"#fff"}}>Balance: 0.0</Text>
             </View>


            </View>
   
            <View style={{paddingVertical:10, borderWidth:1,borderColor:"#fff",flexDirection:"row",borderRadius:20,backgroundColor:"#5c0099",justifyContent:"space-between",alignItems:"center",margin:5}}>
<TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        keyboardType='numeric'
        placeholder="minimum Covert amount is 100,000 points"
        placeholderTextColor="#ccc" 
        style={{color: "white",
            flex: 1,
            paddingLeft: 10,}}
      />
                <View style={{borderWidth:2,borderColor:"#f01c8b",paddingVertical:5,paddingHorizontal:10,borderRadius:10,marginRight:5}}><Text style={{color:"white"}}>max</Text></View>
                </View>


            {/* <View style={{paddingVertical:10, borderWidth:1,borderColor:"#fff", margin:10,flexDirection:"row",borderRadius:20,backgroundColor:"#5c0099",justifyContent:"space-around",alignItems:"center"}}>
                <Text style={{color:"#fff",fontSize:10}}>minimum Covert amount is 100,000 points</Text>
                <View style={{borderWidth:2,borderColor:"#f01c8b",paddingVertical:5,paddingHorizontal:10,borderRadius:10}}><Text style={{color:"white"}}>max</Text></View>
            </View> */}

            <Text style={{color:"#fff",textAlign:"center"}}>Transaction fee: 50,000 points</Text>


        </View> 


<View style={{alignItems:"center"}}>
<TouchableOpacity style={{padding:10,backgroundColor:"#48cae4",width:60,borderRadius:5,alignItems:"center"}}>
              <Text><Entypo name="chevron-down" size={24} color="white" /></Text>
            </TouchableOpacity>  
</View>


<View style={{paddingVertical:20,borderWidth:2,borderColor:"#fff",marginTop:20,margin:10,backgroundColor:"#3c1642",borderRadius:30}}>
            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
            <View>
<View style={{flexDirection:"row"}}>
<Image source={require("../assets/icon.png")} style={{width:18,height:18}}></Image>
<Text allowFontScaling={false} style={{color:"#fff",fontSize:15,letterSpacing:2,fontWeight:800}}> Fiedex </Text>

</View>
            </View>
            <View>
        <Text style={{color:"#fff",fontSize:13}}>Balance: 0</Text>
             </View>


            </View>
   


            <View style={{paddingVertical:10, borderWidth:1,borderColor:"#fff", margin:10,flexDirection:"row",borderRadius:20,backgroundColor:"#5c0099",paddingLeft:20}}>
                <Text style={{color:"#fff",fontSize:12}}>0</Text>
            </View>

            <Text style={{color:"#fff",textAlign:"center"}}>Transaction fee: 50,000 points</Text>


        </View> 


<View style={{alignItems:"center"}}>
<TouchableOpacity style={{padding:10,backgroundColor:"#48cae4",borderRadius:5,alignItems:"center",paddingHorizontal:40}}>
              <Text style={{color:"white",letterSpacing:3,fontWeight:600}}>Insufficient Points</Text>
            </TouchableOpacity>  
</View>
    




     </View>

    </View>
 

</View>






</ImageBackground>
  )
}

export default ConvertFiedex