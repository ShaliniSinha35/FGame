import { View, Text, ImageBackground, Dimensions,Image,ScrollView, StyleSheet,Linking } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SocialIcon } from 'react-native-elements'
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome';

const Contact = () => {
  const height = Dimensions.get('screen').height
  const width = Dimensions.get('screen').width
  const [number,setNumber]= useState(null)
  const [email,setEmail]= useState(null)
  const [whatsapp,setWhatsapp]= useState(null)


  const getSocialData = async()=>{
     try{
       const res = await axios.get("https://fiedex.com/fiedex/socials")
       const data = res.data
       console.log(data)
       setNumber(data[0].cus_care_num)
       setEmail(data[0].email)
       setWhatsapp(data[0].whatsapp)
     }
     catch(err){
      console.log(err)
     }
  }

  useEffect(()=>{
    getSocialData()
  },[])

  const handlePhonePress = () => {
    if (number) {
      Linking.openURL(`tel:${number}`).catch(err => Alert.alert("Error", err.message));
    } else {
      Alert.alert("Info", "Phone number not available");
    }
  };

  const handleEmailPress = () => {
    if (email) {
      Linking.openURL(`mailto:${email}`).catch(err => Alert.alert("Error", err.message));
    } else {
      Alert.alert("Info", "Email not available");
    }
  };

  const handleWhatsappPress = () => {
    if (whatsapp) {
      Linking.openURL(`${whatsapp}`).catch(err => Alert.alert("Error", "Make sure WhatsApp is installed"));
    } else {
      Alert.alert("Info", "WhatsApp number not available");
    }
  };

  return (
    <ScrollView>
 <ImageBackground source={require("../assets/B2.png")} style={{height:height,width:width}}>
       {/* <View style={{ width: width, alignItems: "center", marginTop: 80 }}>
        <Image source={require("../assets/logo.png")} style={{ height: 80, width: 100, resizeMode: "contain" }}></Image>
      </View> */}

      <View style={{ marginTop: 100, width: width, alignItems: "center" }}>
        <Text style={{ color: "#fff" }}>Contact Us </Text>
        <View style={{ width: width, justifyContent: "center", flexDirection: "row", marginTop: 15 }}>
        <SocialIcon
            type='phone'
            style={styles.iconStyles}
            onPress={()=>handlePhonePress()}
       
          />
       
       <SocialIcon
      type='envelope'
      icon={() => <Icon name='envelope' size={24} color='#fff' />}
      style={styles.iconStyle}
      onPress={()=>handleEmailPress()}
    />
          <SocialIcon
            type='whatsapp'
            onPress={()=>handleWhatsappPress()}
          />
        </View>
      </View>

 </ImageBackground>
 </ScrollView>
  )
}
const styles = StyleSheet.create({
 
  iconStyle: {
    backgroundColor: '#db4437', // Optional: to match Google's red color
  },
  iconStyles: {
    backgroundColor: 'blue', // Optional: to match Google's red color
  },
});


export default Contact