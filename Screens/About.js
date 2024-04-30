import { View, Text, ImageBackground, Dimensions, Image,ScrollView } from 'react-native'
import React from 'react'

const About = () => {
  const height = Dimensions.get('screen').height
  const width = Dimensions.get('screen').width
  return (
    <ScrollView>
    <ImageBackground source={require("../assets/B2.png")} style={{ height: height, width: width }}>

      <View style={{ width: width, alignItems: "center", marginTop: 80 }}>
        <Image source={require("../assets/logo.png")} style={{ height: 80, width: 100, resizeMode: "contain" }}></Image>
      </View>

<View style={{padding:10}}>
<Text style={{color:"#fff", marginTop: 70,marginLeft:20,fontSize:20}}>About Fiedex</Text>
      <Text allowFontScaling={false}
                    style={{
                        height: 1,
                        borderColor: "#f01c8b",
                        borderWidth: 0.5,
                        marginTop: 5,
                        width: 150,
                        marginBottom: 5,
                    
                    }}
                />  
</View>
       
      <View style={{ width: width, alignItems: "center",padding:10 }}>
    
        <Text style={{color:"#fff",textAlign:"justify"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>

    </ImageBackground>
    </ScrollView>
  )
}

export default About