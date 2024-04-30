import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const QuizScreen = ({ navigation }) => {
    const width = Dimensions.get('screen').width
    const height = Dimensions.get('screen').height
    return (
        <View style={{ backgroundColor: "#fff",alignItems:"center" }}>
            <ImageBackground source={require("../assets/h5.jpg")} style={{height:height}}>

                <Image source={require("../assets/cds.png")} style={{ width: width, height: 250, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                </Image>
                



                <View style={{ width: width, alignItems: "center", marginTop: 25 }}>

                    <View style={{ borderRadius: 20, padding: 10, width: 300, height: 120, alignItems: "center", justifyContent: "center", backgroundColor: "#fff", borderColor: "black", borderWidth: 1 }}>
                        <View style={{ marginBottom: 10 }}><Text>20,000 Rewards  <FontAwesome5 name="coins" size={25} color="#ffd000" /></Text></View>

                        <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={{ alignItems: "center", justifyContent: "center", padding: 20, backgroundColor: "#3c1642", width: 180, borderRadius: 25 }}><Text allowFontScaling={false} style={{ fontSize: 15, color: "white", fontWeight: 700 }}>Play Now  <AntDesign name="doubleright" size={18} color="#fff" /></Text></TouchableOpacity>
                    </View>

                    <View style={{ borderRadius: 20, padding: 10, width: 300, height: 120, alignItems: "center", justifyContent: "center", backgroundColor: "#fff", marginTop: 10, borderColor: "black", borderWidth: 1 }}>
                        <View style={{ marginBottom: 10 }}><Text>10,000 Rewards  <FontAwesome5 name="coins" size={25} color="#ffd000" /></Text></View>

                        <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={{ alignItems: "center", justifyContent: "center", padding: 20, backgroundColor: "#3c1642", width: 180, borderRadius: 25 }}><Text allowFontScaling={false} style={{ fontSize: 15, color: "white", fontWeight: 700 }}>Play Now  <AntDesign name="doubleright" size={18} color="#fff" /></Text></TouchableOpacity>
                    </View>

                    <View style={{ borderRadius: 20, padding: 10, width: 300, height: 120, alignItems: "center", justifyContent: "center", backgroundColor: "#fff", marginTop: 10, borderColor: "black", borderWidth: 1 }}>
                        <View style={{ marginBottom: 10 }}><Text>5,000 Rewards  <FontAwesome5 name="coins" size={25} color="#ffd000" /></Text></View>

                        <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={{ alignItems: "center", justifyContent: "center", padding: 20, backgroundColor: "#3c1642", width: 180, borderRadius: 25 }}><Text allowFontScaling={false} style={{ fontSize: 15, color: "white", fontWeight: 700 }}>Play Now  <AntDesign name="doubleright" size={18} color="#fff" /></Text></TouchableOpacity>

                    </View>
                </View>

            </ImageBackground>



{/* <Text>Coming Soon</Text> */}

        </View>
    )
}

export default QuizScreen