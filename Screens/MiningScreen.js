import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import Box from '../Components/Box';
import { useAuth } from "../AuthContext";
import * as Progress from 'react-native-progress';
import axios from 'axios';

const MiningScreen = ({navigation}) => {
  const animation = useRef(null);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('screen').height;
  const [tapCount, setTapCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [progress, setProgress] = useState(0)
  const [animationLoopCount, setAnimationLoopCount] = useState(0);
  const [balance, setBalance] = useState(49999)

 

  const userInfo = useSelector(state => state.user.userInfo? state.user.userInfo:null);


  const [wallet,setWallet] = useState(0)
  
     const getWalletValue = async()=>{
      if(userInfo){
        try{
          const res= await axios.get("http:192.168.0.110:3000/wallet",{
           params:{
             userId: userInfo.id
           }
          })
          const data= res.data
          console.log("30",data[0].amount)
          setWallet(data[0].amount)
        }
        catch(err){
         console.log(err)
        }
      }
      
     }
     useEffect(()=>{
      getWalletValue()
     },[])

  const {key} = useAuth()


  const handleTap = () => {
    

    if(key){
      setTapCount(prevCount => prevCount + 1);
      setIsAnimating(true); // Start animation when tapped
    }
    else{
      navigation.navigate("MiningKey")
    }
 


  };

 
  useEffect(() => {
    const playAnimation = async () => {
      let count = tapCount;
      console.log("tapcount", tapCount);
      setIsAnimating(true); // Start animation
      while (count > 0 && isAnimating) {
        if (animation.current) {
          await animation.current.play();
          const newbalance = parseInt(balance) + 1
       
          setBalance(newbalance);
           
          await new Promise(resolve => {
            animation.current.onAnimationFinish = resolve;
          }).then((res) => {
            count--;
          })

        }
      }
      console.log("count", count);
      setIsAnimating(false); 
      setTapCount(0); 
    };

    if (tapCount > 0) {
      console.log(tapCount);
      playAnimation();
    }


  }, [tapCount]);






  useEffect(() => {
    let intervalId;
    if (isAnimating) {
      intervalId = setInterval(() => {
        setProgress(prevProgress => prevProgress + 0.1);
      }, 120000);
    }
    return () => clearInterval(intervalId);
  }, [isAnimating]);


  
   
  useEffect(() => {
    let intervalId;
    if (isAnimating) {
      intervalId = setInterval(() => {
        const newbalance = parseInt(balance) + 1
       
        setBalance(newbalance);
      }, 800);
    }
    return () => clearInterval(intervalId);
  });




  useEffect(() => {
    if (animation.current) {
      animation.current.speed = animationSpeed;
    }
  }, [animationSpeed]);

  return (
    <ScrollView>
    <ImageBackground source={require("../assets/B2.png")} style={{ height: height, backgroundColor: "#fff" }}>


     
        <View style={{ alignItems: "center", paddingTop: 0 }}>

          {/* header */}
          <View style={{ width: width, backgroundColor: "#3c1642", flexDirection: "row", alignItems: "center", justifyContent: "space-around", padding: 5, borderTopLeftRadius: 0, borderBottomWidth: 2, borderColor: "#fff" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.profileCont}>
                <Image source={require("../assets/user.png")} style={{ height: 40, width: 35, resizeMode: "contain" }}></Image>
              </View>
              <Text allowFontScaling={false} style={{ color: "#fff", fontWeight: 600 }}>{userInfo.name}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../assets/coin.png")} style={{ height: 35, width: 35, resizeMode: "contain" }}></Image>
              <Text  allowFontScaling={false} style={{ color: "#fff", fontWeight: 600 }}>{balance}.00</Text>
              <View style={{ height: 40, width: 40, borderRadius: 30, backgroundColor: "#f01c8b", borderColor: "black", borderWidth: 2, alignItems: "center", justifyContent: "center", marginLeft: 5 }}>
                <Entypo name="wallet" size={24} color="#fff" />
              </View>
            </View>
          </View>


          <LottieView
            ref={animation}
            style={{
              width: 570,
              height: 260,
              backgroundColor: 'transparent',
              margin: 0,
              paddingTop: 100,
             paddingRight: 300,
             marginTop:5,
             margiLeft:15

            }}
            resizeMode='cover'
            
            // loop={true}
            speed={1.5}
            source={require('../assets/animation.json')}
            onAnimationFinish={() => {
              console.log(balance)
              setAnimationLoopCount(prevCount => prevCount + 1);
              setBalance(prevBalance => prevBalance + 1);
            }}
            onAnimationLoop={() => {
              console.log("loop finished")
              console.log(balance)
              setAnimationLoopCount(prevCount => prevCount + 1);
              setBalance(prevBalance => prevBalance + 1);
            }}
            onAnimationLoaded={()=>{
              console.log("150",balance)
              setAnimationLoopCount(prevCount => prevCount + 1);
              setBalance(prevBalance => prevBalance + 1);
            }}
            

          />





          {/* score */}
          <View style={{ width: width, backgroundColor: "#3c1642", flexDirection: "row", alignItems: "center", justifyContent: "space-around", padding: 8, borderTopLeftRadius: 0, borderTopWidth: 2, borderColor: "#fff",marginTop:5 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../assets/coin.png")} style={{ height: 35, width: 35, resizeMode: "contain" }}></Image>
              <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 18 }}>{balance.toLocaleString()}</Text>
              <Text allowFontScaling={false} style={{ color: "#fff" }}>.00</Text>

            </View>

            <View>
              <View style={{ paddingTop: 10, paddingBottom: 10, width: 100, backgroundColor: "#f01c8b", flexDirection: "row", alignItems: "center", justifyContent: "space-around", borderRadius: 10,borderWidth:2,borderColor:"#fff" }}>

                <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 900, color: "#fff", fontWeight: 600 }}>1/s</Text>

                <View style={{ height: '80%', width: 1, backgroundColor: '#909090' }}>
                </View>

                <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 900, color: "#fff" }}>* 1</Text>
              </View>
            </View>



          </View>



          <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
            <Text allowFontScaling={false} style={{ fontWeight: 800,color:"#fff" }}>PoWT</Text>
            <Text allowFontScaling={false} style={{ fontSize: 10,color:"#fff" }}>(Proof of work time)</Text>
          </View>

          <Progress.Bar progress={progress} width={350} height={15} color='#fff' style={{ marginTop: 10 }} />

          {/* nft */}

          <View style={{ width: width, alignItems: "center", marginTop: 20 }}>
            <View style={{ borderWidth: 2, borderColor: "#fff", borderRadius: 20, width: 350, backgroundColor: "#3c1642", elevation: 5, paddingBottom: 20 }}>
              <View style={{ width: 350, alignItems: "center", marginTop: 5 }}>
                <Text allowFontScaling={false} style={{ color: "#fee440", fontSize: 25, alignItems: "center" }}>nFT Toolbox</Text>
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


              <View style={{ flexDirection: "row", alignItems: "center", width: 350, justifyContent: "space-around" }}>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{ height: 40, width: 40, alignItems: "center", justifyContent: "center", backgroundColor: "#f01c8b" }}>
                    <Image source={require("../assets/h1.png")} style={{ height: 30, width: 30, resizeMode: "contain" }}></Image>
                  </View>
                  <Text allowFontScaling={false} style={{ color: "#fff", marginLeft: 10, fontWeight: 600,fontSize:10 }}>1/s      <AntDesign name="doubleright" size={10} color="#fff" /></Text>
                </View>

                <View style={{ height: '80%', width: 1, backgroundColor: '#909090' }}>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{ height: 40, width: 40, alignItems: "center", justifyContent: "center", backgroundColor: "#f01c8b" }}>
                    <Image source={require("../assets/wallet.png")} style={{ height: 30, width: 30, resizeMode: "contain" }}></Image>
                  </View>
                  <Text allowFontScaling={false} style={{ color: "red", marginLeft: 10, fontWeight: 600 }}>10000</Text>
                  <Text allowFontScaling={false} style={{ color: "#fff" }}> /10000 </Text>
                </View>
              </View>



            </View>
          </View>


          {/* tap button */}

          <View style={{ width: 350, alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity onPress={handleTap} style={{ backgroundColor: "#3c1642", paddingHorizontal:45,paddingVertical:10, alignItems: "center", justifyContent: "center", borderRadius: 25, borderWidth: 2, borderColor: "#f01c8b",  }}>
              <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 22,fontWeight:900 }}>Tap to Start</Text>
            </TouchableOpacity>
          </View>
        </View>

   



    </ImageBackground>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  profileCont: {
    width: 45,
    height: 45,
    backgroundColor: "#d11780",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5
  }
});

export default MiningScreen;
