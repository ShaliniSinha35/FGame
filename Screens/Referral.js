import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image, ScrollView,Animated } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import PopupButton from '../Components/PopupButton';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { SocialIcon } from 'react-native-elements'
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
import { useAuth } from '../AuthContext';

const Referral = () => {

  const userInfo = useSelector(state => state.user.userInfo);
  console.log("userinfo",userInfo)


  const [animatedValue] = useState(new Animated.Value(0));
  const [textWidth, setTextWidth] = useState(0);
  const containerWidth = Dimensions.get('screen').width;
  const textRef = useRef(null);

  useEffect(() => {
    startAnimation();

  });

  const startAnimation = () => {
    const duration = (textWidth + containerWidth) / 50; // Adjust speed by changing the divisor

    Animated.timing(animatedValue, {
      toValue: -textWidth,
      duration: duration * 500,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        animatedValue.setValue(0);
        startAnimation();
      }
    });
  };

  const onTextLayout = (e) => {
    const { width } = e.nativeEvent.layout;
    setTextWidth(width);
  };
  const headings = [
    {
      id: 0,
      content: "david123 has successfully won",
      points:"70,900"
    },
    {
      id: 1,
      content: "xyz123 has successfully won",
      points:"45,300"
    },
    {
      id: 2,
      content: "user123 has successfully won",
      points:"62,600"
    },
    {
      id: 3,
      content: "xyz123 has successfully won",
      points:"54,000"
    },

  ]
  return (
    <ScrollView>
      <ImageBackground source={require("../assets/B5.png")} style={{ width: width,paddingBottom:10 }}>



      <View style={{ width: width, alignItems: "center", marginTop: 40 }}>
            <View style={{width:180,backgroundColor:"#fff",height:35,borderRadius:15,opacity:0.8,alignItems:"center",justifyContent:"center"}}>
                 <Text allowFontScaling={false} style={{color:"#f01c8b"}}>{userInfo.name}'s Team</Text>
            </View>
           <View style={{ borderWidth: 2, borderColor: "#fff", borderRadius: 20, width: 350, backgroundColor: "#3c1642", elevation: 5, paddingBottom: 20 }}>
            <View style={{ width: 350, alignItems: "center", marginTop: 5 }}>
                 <Text allowFontScaling={false} style={{ color: "#fee440", fontSize: 16, alignItems: "center" }}>Invite 3 Partners to Earn</Text>
            </View>

            <View style={{ width: 350, alignItems: "center" }}>
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

            <View style={{ width: 350,justifyContent: "center", flexDirection: "row", marginTop: 10 }}>
              <Image source={require("../assets/coin.png")} style={{ width: 35, height: 35, resizeMode: "contain" }}></Image>
                 <Text allowFontScaling={false} style={{ color: "#fff", marginLeft: 2,fontSize:25 }}>25,000</Text>
            </View>

            
            <View style={{ width: 350, alignItems: "center" }}>
              <Text allowFontScaling={false}
                style={{
                  height: 1,
                  borderColor: "#fff",
                  borderWidth: 0.5,
                  marginTop: 15,
                  width: 340,
                  marginBottom: 15,

                }}
              />
            </View>

            <View style={{width:340,flexDirection:"row"}}>
            <View style={{width:172,padding:0,alignItems:"center",justifyContent:"center"}}>
            <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"center" }}>
                <Image source={require("../assets/coin.png")} style={{ height: 30, width: 30, resizeMode: "contain",marginTop:5 }}></Image>
                   <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 15, fontWeight: 800,marginTop:5 }}>200,000</Text>
              </View>
                  <Text allowFontScaling={false} style={{color:"white",fontSize:10,textAlign:"center"}}>Per Referral</Text>
            </View>

            <View style={{  height: '100%',width: 1, backgroundColor: '#909090'}}>
            </View>


            <View style={{width:172,padding:0,alignItems:"center",justifyContent:"center"}}>
            <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"center" }}>
                   <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 15, fontWeight: 800,marginTop:5 }}>0% offer Ends</Text>
              </View>
                  <Text allowFontScaling={false} style={{color:"white",fontSize:10,textAlign:"center"}}>commission</Text>
            </View>
           
           </View>




           </View>
      </View>


      <View style={{ width: Dimensions.get('screen').width, alignItems: 'center',flexDirection: 'row',marginTop:20 }}>
          {headings.map((item) => (
            <Animated.View key={item.id} style={{ transform: [{ translateX: animatedValue }],margin:10 }}>
              <View onLayout={onTextLayout}>
                <View
                  style={{
                    fontSize: 10,
                    backgroundColor: '#fff',
                    padding: 8,
                    borderRadius: 20,
                    opacity: 0.9,
                    flexDirection:"row",
                    alignItems:"center"

                  }}>
                      <Text  allowFontScaling={false} style={{ fontSize: 10 }}>{item.content}</Text>
                      <Image source={require("../assets/coin.png")} style={{height:20,width:20,resizeMode:"contain"}}></Image>
                      <Text  allowFontScaling={false} style={{ fontSize: 10 }}>{item.points}</Text>
                </View>
              </View>
            </Animated.View>
          ))}
        </View>

        <View style={{ width: width, alignItems: "center", marginTop: 40 }}>
          <PopupButton></PopupButton>
        </View>

      

        <View style={{ width: width, alignItems: "center", marginTop: 60 }}>
          <View style={{ borderWidth: 2, borderColor: "#fff", borderRadius: 20, width: 350, backgroundColor: "#3c1642", elevation: 5, paddingBottom: 20 }}>
            <View style={{ width: 350, alignItems: "center", marginTop: 5 }}>
                 <Text allowFontScaling={false} style={{ color: "#fee440", fontSize: 25, alignItems: "center" }}>Your Activity</Text>
            </View>

            <View style={{ width: 350, alignItems: "center" }}>
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

            <View style={{ width: width, justifyContent: "flex-start", paddingLeft: 20, flexDirection: "row", marginTop: 10 }}>
              <Image source={require("../assets/coin.png")} style={{ width: 20, height: 20, resizeMode: "contain" }}></Image>
                 <Text allowFontScaling={false} style={{ color: "#fff", marginLeft: 10 }}>0.00   <AntDesign name="doubleright" size={10} color="#fff" /></Text>
            </View>


            <View style={{ width: 350, alignItems: "center", marginTop: 10 }}>
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

            <View style={{ width: width, justifyContent: "flex-start", paddingLeft: 20, flexDirection: "row", marginTop: 10 }}>
              <FontAwesome name="group" size={24} color="#f01c8b" />
                 <Text allowFontScaling={false} style={{ color: "#fff", marginLeft: 10, fontSize: 18 }}>Partners :  0</Text>
            </View>

            <View style={{ width: 350, alignItems: "center", marginTop: 10 }}>
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

            <View style={{ width: 350, alignItems: "center", marginTop: 15 }} >
                 <Text allowFontScaling={false} style={{ color: "#fff" }}>Create My Team to Earn</Text>

              <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"center" }}>
                <Image source={require("../assets/coin.png")} style={{ height: 30, width: 30, resizeMode: "contain",marginTop:5 }}></Image>
                   <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 20, fontWeight: 800,marginTop:5 }}>200,000</Text>
              </View>
            </View>


            <View style={{ width: 350, alignItems: "center", marginTop: 50 }}>
              <TouchableOpacity style={{ backgroundColor: "#f01c8b", width: 120, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 25, borderWidth:2, borderColor:"#fff" }}>
                   <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 18 }}>Invite <AntDesign name="doubleright" size={12} color="#fff" /></Text>
              </TouchableOpacity>

            </View>








          </View>
        </View>


      

        <View style={{ marginTop: 70, width: width, alignItems: "center" }}>
             <Text allowFontScaling={false} style={{ color: "#fff" }}>Share with your friends :</Text>
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