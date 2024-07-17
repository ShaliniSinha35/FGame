import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView,Linking } from 'react-native';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';
import { Entypo, AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Box from '../Components/Box';
import { useAuth } from "../AuthContext";
import * as Progress from 'react-native-progress';
import axios from 'axios';
import { SocialIcon } from 'react-native-elements'

const width = Dimensions.get('screen').width

const MiningScreen = ({ navigation }) => {
  const animation = useRef(null);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('screen').height;
  const [tapCount, setTapCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [progress, setProgress] = useState(0)
  const [animationLoopCount, setAnimationLoopCount] = useState(0);
  const [balance, setBalance] = useState(99)






  const userInfo = useSelector(state => state.user.userInfo ? state.user.userInfo : null);

  const [wallet, setWallet] = useState(0)
  const { isWalletUpdated, setIsWalletUpdated } = useAuth()


  const getWalletValue = async () => {
    if (userInfo) {
      try {
        const res = await axios.get("https://fiedex.com/fiedex/wallet", {
          params: {
            userId: userInfo.id
          }
        })
        console.log(res, "27")

        const data = res.data
        console.log("30", data[0].amount)
        setWallet(data[0].amount)
        setBalance(data[0].amount)
      }
      catch (err) {
        console.log("32", err)
      }
    }

  }
  useEffect(() => {
    getWalletValue()
  }, [isWalletUpdated])



  const { key } = useAuth()


  const handleTap = () => {


    if (key) {
      setTapCount(prevCount => prevCount + 1);
      setIsAnimating(true); // Start animation when tapped
    }
    else {
      navigation.navigate("MiningKey")
    }



  };


  useEffect(() => {


    if (progress >= 1) {
      console.log('Progress is completed!');
      if (animation.current) {
        animation.current.pause();
        setIsAnimating(false);
        setTapCount(0);
        return;
      }
    }


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
      }, 180000);
    }
    return () => clearInterval(intervalId);
  }, [isAnimating]);


  useEffect(() => {
    if (progress >= 1) {
      console.log('Progress is completed!');
      if (animation.current) {
        animation.current.pause();
        setIsAnimating(false);
        setTapCount(0);
        return;
      }
    }
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
    if (progress >= 1) {
      console.log('Progress is completed!');
      if (animation.current) {
        animation.current.pause();
      }
    }
  }, [progress]);

  useEffect(() => {
    if (animation.current) {
      animation.current.speed = animationSpeed;
      setIsAnimating(false);
      setTapCount(0);
    }
  }, [animationSpeed]);




  const shareReferralLink = async (platform) => {
    const referralLink = 'https://fiedex.com'; // Replace with your actual referral link
    const refer_by = 'YOUR_REFERRAL_CODE'; // Replace with your actual referral code
  
    try {
      const message = `Download the app now: ${referralLink} use this refer_code: ${refer_by}`;
      let url;
  
      if (platform === 'whatsapp') {
        url = `whatsapp://send?text=${encodeURIComponent(message)}`;
      } else if (platform === 'facebook') {
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`;
      } else if (platform === 'instagram') {
        url = `http://instagram.com`; // Instagram doesn't support direct message sharing via URL scheme
      } else if (platform === 'twitter') {
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
      } else if (platform === 'youtube') {
        url = `https://www.youtube.com`; // YouTube doesn't support direct message sharing via URL scheme
      } else if (platform === 'telegram') {
        url = `tg://msg?text=${encodeURIComponent(message)}`;
      } else if (platform === 'generic') {
        url = null; // Set to null to use the generic share functionality
      }
  
      if (url) {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
          await Linking.openURL(url);
        } else {
          Alert.alert('Error', `Cannot open URL: ${url}. Make sure the app is installed.`);
        }
      } else {
        await Share.share({ message });
      }
    } catch (error) {
      Alert.alert('Error', `Could not share referral link: ${error.message}`);
    }
  };


  return (
    <ScrollView>
      <ImageBackground source={require("../assets/B2.png")} style={{ backgroundColor: "#fff" }}>



        <View style={{ alignItems: "center", paddingTop: 0 }}>

          {/* header */}
          <View style={{ width: width, backgroundColor: "#3c1642", flexDirection: "row", alignItems: "center", justifyContent: "space-around", padding: 5, borderTopLeftRadius: 0, borderBottomWidth: 0, borderColor: "#fff" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.profileCont}>
                <Image source={require("../assets/user.png")} style={{ height: 40, width: 35, resizeMode: "contain" }}></Image>
              </View>
              <Text allowFontScaling={false} style={{ color: "#fff", fontWeight: 600 }}>{userInfo ? userInfo.name : ""}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../assets/coin.png")} style={{ height: 35, width: 35, resizeMode: "contain" }}></Image>
              <Text allowFontScaling={false} style={{ color: "#fff", fontWeight: 600 }}>{balance}.00</Text>
              <View style={{ height: 40, width: 40, borderRadius: 30, backgroundColor: "#f01c8b", borderColor: "black", borderWidth: 2, alignItems: "center", justifyContent: "center", marginLeft: 5 }}>
                <Entypo name="wallet" size={24} color="#fff" />
              </View>
            </View>
          </View>


          <LottieView
            ref={animation}
            style={{
              width: 430,
              height: 250,
              backgroundColor: 'transparent',
              margin: 0,
              // paddingTop: 100,
              //  paddingRight: 300,
              marginTop: 15,
              margiLeft: 15

            }}
            resizeMode='cover'

            // loop={true}
            speed={1.5}
            source={require('../assets/data1.json')}
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
            onAnimationLoaded={() => {
              console.log("150", balance)
              setAnimationLoopCount(prevCount => prevCount + 1);
              setBalance(prevBalance => prevBalance + 1);
            }}


          />





          {/* score */}
          <View style={{ width: width, backgroundColor: "#3c1642", flexDirection: "row", alignItems: "center", justifyContent: "space-around", padding: 8, borderTopLeftRadius: 0, borderTopWidth: 0, borderColor: "#fff", marginTop: 5 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../assets/coin.png")} style={{ height: 35, width: 35, resizeMode: "contain" }}></Image>
              <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 18 }}>{balance.toLocaleString()}</Text>
              <Text allowFontScaling={false} style={{ color: "#fff" }}>.00</Text>

            </View>

            <View>
              <View style={{ paddingTop: 10, paddingBottom: 10, backgroundColor: "#41b7d1", flexDirection: "row", alignItems: "center", justifyContent: "space-around", borderRadius: 10, borderWidth: 2, borderColor: "#fff",width:130 }}>

                  <Image source={require("../assets/d1.png")} style={{height:25,width:25}}></Image>
                <Text allowFontScaling={false} style={{ fontSize: 15, fontWeight: 900, color: "#fff", fontWeight: 600 }}>1/m</Text>

                <View style={{ height: '80%', width: 1, backgroundColor: '#909090' }}>
                </View>

                <Text allowFontScaling={false} style={{ fontSize: 15, fontWeight: 900, color: "#fff" }}>* 1</Text>
              </View>
            </View>



          </View>



          <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
            <Text allowFontScaling={false} style={{ fontWeight: 800, color: "#fff" }}>PoWT</Text>
            <Text allowFontScaling={false} style={{ fontSize: 10, color: "#fff" }}>(Proof of work time)</Text>
          </View>

          <Progress.Bar progress={progress} borderColor='#fff' width={350} height={15} color='#f01c8b' style={{ marginTop: 10 }} />

          {/* nft */}

          <View style={{ width: width, alignItems: "center", marginTop: 30 }}>
            <View style={{ borderWidth: 2, borderColor: "#fff", borderRadius: 20, width: 350, backgroundColor: "#7f0475", elevation: 5, paddingBottom: 20 }}>
              <View style={{ width: 350, alignItems: "center", marginTop: 5 }}>
                <Text allowFontScaling={false} style={{ color: "#fee440", fontSize: 25, alignItems: "center" }}>Toolbox</Text>
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
                  <TouchableOpacity onPress={()=>navigation.navigate("boost")} style={{ height: 40, width: 40, alignItems: "center", justifyContent: "center", backgroundColor: "#f01c8b" }}>
                    <Image source={require("../assets/h1.png")} style={{ height: 30, width: 30, resizeMode: "contain" }}></Image>
                  </TouchableOpacity>
                  <Text allowFontScaling={false} style={{ color: "#fff", marginLeft: 10, fontWeight: 600, fontSize: 10 }}>1/m      <AntDesign name="doubleright" size={10} color="#fff" /></Text>
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

          <View style={{ width: 350, alignItems: "center", marginTop: 30 }}>
            <TouchableOpacity onPress={handleTap} style={{ backgroundColor: "#3c1642", paddingHorizontal: 45, paddingVertical: 10, alignItems: "center", justifyContent: "center", borderRadius: 20, borderWidth: 2, borderColor: "#f01c8b", }}>
              <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 22, fontWeight: 900 }}>Tap to Start</Text>
            </TouchableOpacity>
          </View>
        </View>



        <View style={{ width: width, marginTop: 25,alignItems:"center" }}>

          <TouchableOpacity style={styles.socialBox}  onPress={() => shareReferralLink('twitter')}>
    
          <Image source={require("../assets/twitter.png")} style={{height:30,width:30,resizeMode:"contain"}}></Image>
   
            <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.socialText}>Follow our X account</Text>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
            <Image source={require("../assets/coin.png")} style={{width:20,height:20}}></Image>
            <Text allowFontScaling={false} style={{color:"#fff",fontSize:10,letterSpacing:2,fontWeight:800}}>+5000 </Text>
            </View>
            </View>

            <View style={{alignItems:"flex-end",justifyContent:"center"}}>
            <MaterialIcons name="verified" size={24} color="green" />
            </View>

            
          

          </TouchableOpacity>


          <TouchableOpacity style={styles.socialBox}  onPress={() => shareReferralLink('telegram')}>
            <SocialIcon
              type='telegram'
              style={{ backgroundColor: "black",height:30,width:30 }}

            />

<View style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.socialText}>Follow our TG channel</Text>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
            <Image source={require("../assets/coin.png")} style={{width:20,height:20}}></Image>
            <Text allowFontScaling={false} style={{color:"#fff",fontSize:10,letterSpacing:2,fontWeight:800}}>+5000 </Text>
            </View>
            </View>
            <View style={{alignItems:"flex-end",justifyContent:"center"}}>
            <MaterialIcons name="verified" size={24} color="green" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBox}  onPress={() => shareReferralLink('youtube')}>
            <SocialIcon
              type='youtube'
              style={{ width: 30, height: 30 }}
            />
                 <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.socialText}>Subscribe our YT channel</Text>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
            <Image source={require("../assets/coin.png")} style={{width:20,height:20}}></Image>
            <Text allowFontScaling={false} style={{color:"#fff",fontSize:10,letterSpacing:2,fontWeight:800}}>+5000 </Text>
            </View>
            </View>

            <View style={{alignItems:"flex-end",justifyContent:"center"}}>
            <MaterialIcons name="verified" size={24} color="green" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBox}  onPress={() => shareReferralLink('instagram')}>
            <SocialIcon
              type='instagram'
              style={{ backgroundColor: "#d81159",height:30,width:30 }}

            />

<View style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.socialText}>Follow Us on Instagram </Text>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
            <Image source={require("../assets/coin.png")} style={{width:20,height:20}}></Image>
            <Text allowFontScaling={false} style={{color:"#fff",fontSize:10,letterSpacing:2,fontWeight:800}}>+5000 </Text>
            </View>
            </View>

            <View style={{alignItems:"flex-end",justifyContent:"center"}}>
            <MaterialIcons name="verified" size={24} color="green" />
            </View>
          </TouchableOpacity>







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
  },
socialBox:{
 width:width * 0.93,
 backgroundColor: "#121212", 
 borderRadius: 20, 
 opacity: 0.8,
 marginBottom:5,
 flexDirection:"row",
paddingVertical:5,
 borderWidth:2,
 borderColor:"#fff",
 justifyContent:"space-around",

  },
  socialText:{
    color:"#fff",
    letterSpacing:3,
    fontSize:12,

  }
  

});

export default MiningScreen;
