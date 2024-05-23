import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';
import { Entypo,AntDesign,FontAwesome } from '@expo/vector-icons';
import Box from '../Components/Box';
import * as Progress from 'react-native-progress';
const MiningScreen = () => {
  const animation = useRef(null);
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  const [tapCount, setTapCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [progress,setProgress] = useState(0)
  const userInfo = useSelector(state => state.user.userInfo);

  const handleTap = () => {
    setTapCount(prevCount => prevCount + 1);
    setIsAnimating(true); // Start animation when tapped
  };
  useEffect(() => {
    const playAnimation = async () => {
      let count = tapCount;
      console.log("tapcount", tapCount);
      setIsAnimating(true); // Start animation
      while (count > 0 && isAnimating) {
        if (animation.current) {
          await animation.current.play();
          await new Promise(resolve => {
            animation.current.onAnimationFinish = resolve;
          }).then((res)=>{
            count--; // Decrease count after each animation
          })
       
        }
      }
      console.log("count", count);
      setIsAnimating(false); // Reset animation state after all animations are played
      setTapCount(0); // Reset tap count
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
    if (animation.current) {
      animation.current.speed = animationSpeed;
    }
  }, [animationSpeed]);

  return (

    <ImageBackground source={require("../assets/bg9.png")} style={{ height: height, backgroundColor: "#fff" }}>


     <ScrollView>
       <View style={{ alignItems: "center", paddingTop: 5 }}>

{/* header */}
<View style={{ width: width, backgroundColor: "#3c1642", flexDirection: "row", alignItems: "center", justifyContent: "space-around", padding: 5, borderTopLeftRadius: 0, borderBottomWidth:2,borderColor:"#fff" }}>
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <View style={styles.profileCont}>
      <Image source={require("../assets/user.png")} style={{ height: 40, width: 35, resizeMode: "contain" }}></Image>
    </View>
    <Text allowFontScaling={false} style={{ color: "#fff",fontWeight:600 }}>{userInfo.name}</Text>
  </View>
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image source={require("../assets/coin.png")} style={{ height: 35, width: 35, resizeMode: "contain" }}></Image>
    <Text style={{ color: "#fff",fontWeight:600  }}>20,000.00</Text>
    <View style={{ height: 40, width: 40, borderRadius: 30, backgroundColor: "#f01c8b", borderColor: "black", borderWidth: 2, alignItems: "center", justifyContent: "center", marginLeft: 5 }}>
      <Entypo name="wallet" size={24} color="#fff" />
    </View>
  </View>
</View>

{/* animation */}

<LottieView
  ref={animation}
  style={{
    width: width,
    height: 250,
    backgroundColor: '#f01c8b',
  }}
  loop={true}

  speed={5.5}
  
  source={require('../assets/mining.json')}
  
/>


{/* score */}
<View style={{ width: width, backgroundColor: "#3c1642", flexDirection: "row", alignItems: "center", justifyContent: "space-around", padding: 8, borderTopLeftRadius: 0, borderTopWidth:2,borderColor:"#fff" }}>
<View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image source={require("../assets/coin.png")} style={{ height: 35, width: 35, resizeMode: "contain" }}></Image>
    <Text  allowFontScaling={false} style={{ color: "#fff",fontSize:20 }}>20,000</Text><Text allowFontScaling={false} style={{color:"#fff"}}>.00</Text>
 
  </View>

<View>
<View style={{paddingTop:10,paddingBottom:10,width:100,backgroundColor:"#f01c8b",flexDirection:"row",alignItems:"center",justifyContent:"space-around",borderRadius:10}}>

<Text allowFontScaling={false} style={{fontSize:18,fontWeight:900,color:"#fff",fontWeight:600 }}>1/s</Text>

<View style={{ height: '80%', width: 1, backgroundColor: '#909090' }}>
  </View>

  <Text style={{fontSize:18,fontWeight:900,color:"#fff"}}>* 1</Text>    
</View>
</View>         



</View>



<View style={{flexDirection:"row",marginTop:10,alignItems:"center"}}>
  <Text style={{fontWeight:800}}>PoWT</Text>
  <Text style={{fontSize:10}}>(Proof of work time)</Text>
</View>

<Progress.Bar progress={progress} width={350} height={15} color='#f01c8b' style={{marginTop:10}}  />

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


    <View style={{  flexDirection: "row",alignItems:"center",width:350,justifyContent:"space-around" }}>

      <View style={{flexDirection:"row",alignItems:"center"}}>
      <View style={{height:40,width:40,alignItems:"center",justifyContent:"center",backgroundColor:"#f01c8b"}}>
        <Image source={require("../assets/h1.png")} style={{height:30,width:30,resizeMode:"contain"}}></Image>
      </View>
         <Text allowFontScaling={false} style={{ color: "#fff", marginLeft: 10,fontWeight:600  }}>1/s      <AntDesign name="doubleright" size={10} color="#fff" /></Text>
    </View>

    <View style={{ height: '80%', width: 1, backgroundColor: '#909090' }}>
  </View>

    <View style={{flexDirection:"row",alignItems:"center"}}>
      <View style={{height:40,width:40,alignItems:"center",justifyContent:"center",backgroundColor:"#f01c8b"}}>
        <Image source={require("../assets/wallet.png")} style={{height:30,width:30,resizeMode:"contain"}}></Image>
      </View>
         <Text allowFontScaling={false} style={{ color: "red", marginLeft: 10,fontWeight:600  }}>10000</Text>
         <Text allowFontScaling={false} style={{color:"#fff"}}> /10000 </Text>
    </View>
      </View>

  

  </View>
</View>


{/* tap button */}

<View style={{ width: 350, alignItems: "center", marginTop: 20 }}>
  <TouchableOpacity onPress={handleTap} style={{ backgroundColor: "#3c1642", width: 300, alignItems: "center", justifyContent: "center", borderRadius: 25, borderWidth: 2, borderColor: "#f01c8b", paddingTop: 8, paddingBottom: 8 }}>
    <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 28 }}>Tap</Text>
  </TouchableOpacity>
</View>
      </View>

     </ScrollView>
    
 
     
    </ImageBackground>
 
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
