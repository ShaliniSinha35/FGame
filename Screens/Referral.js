import { View, Text, ImageBackground, Dimensions, TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'
import PopupButton from '../Components/PopupButton';
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements'
const height= Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const Referral = () => {
  return (
    <ScrollView>
<ImageBackground source={require("../assets/B5.png")} style={{height:height,width:width}}>

   <View style={{width:width,alignItems:"center",marginTop:80}}>
   <PopupButton></PopupButton>  
   </View>

   <View style={{width:width,alignItems:"center",marginTop:100}}>
   <View style={{borderWidth:2,borderColor:"#3c1642",borderRadius:20,width:350,backgroundColor:"#3c1642",elevation:5,paddingBottom:20}}>
    <View style={{width:350,alignItems:"center",marginTop:5}}>
    <Text style={{color:"#fee440",fontSize:25,alignItems:"center"}}>Your Activity</Text>
    </View>

    <View style={{width:350,alignItems:"center"}}>
    <Text allowFontScaling={false}
                    style={{
                        height: 1,
                        borderColor: "#f01c8b",
                        borderWidth: 0.5,
                        marginTop: 10,
                        width: 340,
                        marginBottom: 15,
                    
                    }}
                />  
    </View>
   




                

             
                <View style={{width:width,justifyContent:"flex-start",paddingLeft:20,flexDirection:"row",marginTop:10}}>
                  <Image source={require("../assets/coin.png")} style={{width:20,height:20,resizeMode:"contain"}}></Image>
                 <Text style={{color:"#fff",marginLeft:10}}>0.00   <AntDesign name="doubleright" size={10} color="#fff" /></Text>
               </View>


<View style={{width:350, alignItems:"center",marginTop:10}}>
<Text allowFontScaling={false}
                    style={{
                        height: 1,
                        borderColor: "#D0D0D0",
                        borderWidth: 0.5,
                        marginTop: 15,
                        width: 310,
                        marginBottom: 15,
                    
                    }}
                />  
</View>

<View style={{width:width,justifyContent:"flex-start",paddingLeft:20,flexDirection:"row",marginTop:10}}>
<FontAwesome name="group" size={24} color="#f01c8b" />
                 <Text style={{color:"#fff",marginLeft:10,fontSize:18}}>Partners :  0</Text>
</View>


<View style={{width:350,alignItems:"center",marginTop:20}}>
<TouchableOpacity style={{backgroundColor:"#f01c8b",width:120,height:40,alignItems:"center",justifyContent:"center",borderRadius:25}}>
      <Text style={{color:"#fff",fontSize:18}}>Invite <AntDesign name="doubleright" size={12} color="#fff" /></Text>
     </TouchableOpacity>

</View>


       


             


</View>
   </View>
   <View style={{ marginTop: 100, width: width, alignItems: "center" }}>
        <Text style={{ color: "#fff" }}>Share with your friends :</Text>
        <View style={{ width: width, justifyContent: "center", flexDirection: "row", marginTop: 10 }}>

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

export default Referral