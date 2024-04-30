import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const width = Dimensions.get('screen').width

const Section5 = () => {
  return (
    // <View style={{marginTop:10,paddingLeft:20,marginBottom:20}}>
        <ImageBackground  style={{ width: width,alignItems:"center",justifyContent:"center",opacity:1,padding:20,borderRadius:40,marginTop:20,marginBottom:20,opacity:0.9 }}  imageStyle={{ borderRadius: 30}}>


{/* <View style={{backgroundColor:"#fff", opacity:0.9, width:width,alignItems:"center",padding:20}}>

</View> */}
                <Text  allowFontScaling={false}style={{fontSize:22,marginBottom:10,color:"black",fontWeight:800}}>Do More With Fiedex</Text>


     
<TouchableOpacity style={{width:250,backgroundColor:"#3c1642",borderRadius:30,marginRight:10,alignItems:"center",justifyContent:"center",marginBottom:20,padding:20}}>


<Text  allowFontScaling={false}style={{fontSize:15,fontWeight:700,color:"#fff"}}><Feather name="info" size={18} color="#fff" />  Learn about Fiedex Points</Text>




</TouchableOpacity>
   


      <Text  allowFontScaling={false}style={{fontWeight:800,fontSize:22,color:"black",marginTop:10}}>Invite Your Friends</Text>

 <View style={{alignItems:"center"}}>
 
    <Text>Build Your Network</Text>
    <TouchableOpacity style={{width:180,backgroundColor:"#f01c8b",padding:20,alignItems:"center",borderRadius:30,marginTop:10}}>
        <Text  allowFontScaling={false}style={{color:"#fff" }}> <Feather name="copy" size={20} color="#fff" />  Copy invite link</Text>
        </TouchableOpacity>
 </View>

      </ImageBackground>
      
    //   </View>
  )
}

export default Section5