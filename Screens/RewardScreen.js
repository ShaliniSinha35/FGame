import { View, Text, Image, ImageBackground, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements'
const RewardScreen = () => {

  const height = Dimensions.get('screen').height
  const width = Dimensions.get('screen').width
  return (
    <ScrollView>
    <ImageBackground source={require("../assets/B5.png")} style={{ height: height, width: width, alignItems: "center", justifyContent: "center" }} >


      <View style={{ width: 350, borderRadius: 20, backgroundColor: "#f01c8b", opacity: 1, paddingBottom: 20, borderWidth: 1, borderColor: "#fff", elevation: 5 }}>
         <View style={{ width: 350, alignItems: "center", marginTop: 10 }}>
           <Text style={{ color: "#fff", fontSize: 25, fontWeight: 800 }}>Rewards</Text>
           <FontAwesome5 name="gifts" size={24} color="#fee440" />
          {/* <Image source={require("../assets/money.png")} style={{height:40,width:40}}></Image> */}
        </View>

        

        <View style={{ width: 350, alignItems: "center", marginTop: 10 }}>
          <Text allowFontScaling={false}
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
            <Text style={{ color: "#fff", marginLeft: 5, fontSize: 18 }}>0.00  </Text>

          </View>

          <View style={{ width: 350, alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity style={{ backgroundColor: "#f7b801", padding: 12, alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
              <Text style={{ color: "#fff", fontSize: 15 }}>Invite more to earn rewards  <FontAwesome5 name="coins" size={24} color="#fff" /></Text>
            </TouchableOpacity>

          </View>

          <View style={{ width: 350, alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity style={{ backgroundColor: "#f7b801", padding: 12, alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
              <Text style={{ color: "#fff", fontSize: 15 }}>Play Quiz to earn rewards  <FontAwesome5 name="coins" size={24} color="#fff" /></Text>
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

export default RewardScreen