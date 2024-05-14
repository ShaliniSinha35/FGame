import { View, Text, Image, ImageBackground, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements'
const RewardScreen = ({navigation}) => {

  const height = Dimensions.get('screen').height
  const width = Dimensions.get('screen').width
  return (
    <ScrollView>
    <ImageBackground source={require("../assets/B5.png")} style={{ height: height, width: width, alignItems: "center",paddingTop:70 }} >

        <View style={{width:350,backgroundColor:"#f01c8b",padding:15,borderRadius:10,opacity:0.9,flexDirection:"row",justifyContent:"space-around",alignItems:"center",borderWidth:2,borderColor:"#fff"}}>
          <View style={{justifyContent:"center",alignItems:"center"}}>
           
              <Text allowFontScaling={false} style={{color:"#fff",fontSize:12}}>Reward</Text>
              <Text allowFontScaling={false} style={{color:"#fff",fontSize:18,marginTop:5}}>0.00 Fiedex</Text>
            </View>
            <View style={{justifyContent:"center",alignItems:"center"}}>
              <Text allowFontScaling={false} style={{color:"#fff",fontSize:12}}>Cumulative Correct</Text>
              <Text allowFontScaling={false} style={{color:"#fff",fontSize:18,marginTop:5}}>0.00</Text>
            </View>
     
        </View>


        <View style={{marginTop:100,alignItems:"center"}}>
          <Text allowFontScaling={false} style={{color:"#fff",fontSize:25}}>Quiz on Live</Text>
          <Text allowFontScaling={false} style={{color:"#fff",fontSize:30}}>Split the prize</Text>
        </View>


        <View style={{ width: 350, alignItems: "center", marginTop: 40 }}>
            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={{ backgroundColor: "#f01c8b", padding: 12, alignItems: "center", justifyContent: "center", borderRadius: 25,borderWidth:2,borderColor:"#fff",flexDirection:"row" }}>
              <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 18 }}>Play Quiz to Earn Rewards </Text>
              <Image source={require("../assets/coin.png")} style={{height:30,width:30,resizeMode:"contain"}}></Image>

            </TouchableOpacity>

          </View>


      {/* <View style={{ width: 350, borderRadius: 20, backgroundColor: "#f01c8b", opacity: 1, paddingBottom: 20, borderWidth: 1, borderColor: "#fff", elevation: 5 }}>
         <View style={{ width: 350, alignItems: "center", marginTop: 10 }}>
           <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 25, fontWeight: 800 }}>Rewards</Text>
           <FontAwesome5 name="gifts" size={24} color="#fee440" />
        </View>

        

        <View style={{ width: 350, alignItems: "center", marginTop: 10 }}>
          <Text allowFontScaling={false} allowFontScaling={false}
            style={{
              height: 1,
              borderColor: "#3c1642",
              borderWidth: 0.8,
              marginTop: 5,
              width: 310,
              marginBottom: 15

            }}
          />
        </View>

        <View style={{ width: 350, alignItems: "center" }}>
          <View style={{ height: 50, width: 280, backgroundColor: "#3c1642", borderRadius: 25, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <Image source={require("../assets/coin.png")} style={{ width: 30, height: 30, resizeMode: "contain" }}></Image>
            <Text allowFontScaling={false} style={{ color: "#fff", marginLeft: 5, fontSize: 18 }}>0.00  </Text>

          </View>

          <View style={{ width: 350, alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity style={{ backgroundColor: "#f7b801", padding: 12, alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
              <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 15 }}>Invite more to earn rewards  <FontAwesome5 name="coins" size={24} color="#fff" /></Text>
            </TouchableOpacity>

          </View>

          <View style={{ width: 350, alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity style={{ backgroundColor: "#f7b801", padding: 12, alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
              <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 15 }}>Play Quiz to earn rewards  <FontAwesome5 name="coins" size={24} color="#fff" /></Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>
      <View style={{ marginTop: 100, width: width, alignItems: "center" }}>
        <Text allowFontScaling={false} style={{ color: "#fff" }}>Share with your friends :</Text>
        <View style={{ width: width, justifyContent: "center", flexDirection: "row", marginTop: 10 }}>

          <SocialIcon
            type='facebook'
          />
          <SocialIcon
            type='whatsapp'
          />
        </View>
      </View> */}


    </ImageBackground>
    </ScrollView>
  )
}

export default RewardScreen