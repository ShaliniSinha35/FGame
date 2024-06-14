import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useState,useEffect} from 'react'
import { AntDesign, FontAwesome, FontAwesome5,Entypo } from '@expo/vector-icons';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useAuth } from '../AuthContext';

const Wallet = () => {

  const height = Dimensions.get('screen').height
  const width = Dimensions.get('screen').width

  const userInfo = useSelector(state => state.user.userInfo? state.user.userInfo:null);

  const [wallet,setWallet] = useState(0)
  const {isWalletUpdated,setIsWalletUpdated}= useAuth()

  
     const getWalletValue = async()=>{
      if(userInfo){
        try{
          const res= await axios.get("https://fiedex.com/fiedex/wallet",{
           params:{
             userId: userInfo.id
           }
          })
          console.log(res,"27")
          const data= res.data
          console.log("30",data[0].amount)
          setWallet(data[0].amount)
        }
        catch(err){
         console.log("32",err)
        }
      }
      
     }
     useEffect(()=>{
      getWalletValue()
     },[isWalletUpdated])
  return (
    <ScrollView>
    <ImageBackground source={require("../assets/B7.png")} style={{  width: width,height:height }}>

      <View style={{ width: width, alignItems: "center", marginTop: 40 }}>
        <View style={{ opacity: 1, borderRadius: 20, alignItems: "center", justifyContent: "center", paddingTop: 10, paddingBottom: 10 }}>

          <View style={{ flexDirection: "row",alignItems:"center" }}>
          {/* <Image source={require("../assets/wallet.png")} style={{height:30,width:30,resizeMode:"contain"}}></Image> */}
            <Image source={require("../assets/coin.png")} style={{ height: 40, width: 45, marginTop: 5 }}></Image>

            <Text allowFontScaling={false}style={{ color: "#fff", fontSize: 25, marginTop: 5 }}>{wallet}.00</Text>
            <View style={{ height: 40, width: 40, borderRadius: 30, backgroundColor: "#f01c8b", borderColor: "black", borderWidth: 2, alignItems: "center", justifyContent: "center", marginLeft: 5 }}>
      <Entypo name="wallet" size={24} color="#fff" />
    </View>
            {/* <TouchableOpacity style={{ backgroundColor: "#f01c8b", width: 120, alignItems: "center", borderRadius: 20, justifyContent: "center", marginLeft: 10, borderWidth: 1, borderColor: "#fff",padding:10 }}><Text allowFontScaling={false} style={{ color: "#fff", fontSize: 18 }}>Exchange <AntDesign name="doubleright" size={12} color="#fff" /></Text></TouchableOpacity> */}



          </View>

          {/* <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
            <Text allowFontScaling={false}style={{ color: "#fff", fontSize: 15 }}>Account:  </Text>
            <View style={{ borderColor: "#fff", borderWidth: 1, width: 180, height: 40, flexDirection: "row", alignItems: "center", padding: 5 }}>

              <Text allowFontScaling={false} style={{ color: "#fff" }}>0xc94****74d89</Text>
              <View style={{ height: '100%', width: 1, backgroundColor: '#909090', marginLeft: 15 }}>
              </View>
              <AntDesign name="copy1" size={24} color="#f01c8b" style={{ marginLeft: 20 }} />
            </View>
          </View> */}


        </View>

        <View >

        </View>


      </View>


  


      <View style={{ width: width, alignItems: "center", marginTop: 50, borderWidth: 2, borderColor: "#fff", borderTopLeftRadius: 10, paddingTop: 20 , borderTopRighttRadius: 10,paddingBottom:10,height:height}}>


        <View style={{ flexDirection: "row", width: width, justifyContent: "space-evenly" }}>
          <Text allowFontScaling={false} style={{ color: "#fff" }}>Token Assets</Text>

          <View style={{ height: '100%', width: 1, backgroundColor: '#909090' }}>
          </View>


          <Text allowFontScaling={false} style={{ color: "#fff" }}> NFT </Text>

        </View>


        <ScrollView>
          <View style={{ width: 350, backgroundColor: "#3c1642", opacity: 1, borderRadius: 10, borderWidth: 1, borderColor: "#fff", paddingTop: 10, marginTop: 50 }}>
            <View style={{ alignItems: "flex-start", paddingLeft: 10 }}>
              <Text allowFontScaling={false} style={{ color: "#fff" }}>Token</Text>
            </View>

            <View style={{ width: 320, backgroundColor: "#3c1642", padding: 20 }}>

              <View style={{ flexDirection: "row" }}>
                <View style={{ height: 30, width: 30, borderRadius: 30, backgroundColor: "black" }}></View>
                <View style={{ flexDirection: "column", marginLeft: 20 }}>
                  <Text allowFontScaling={false} style={{ color: "#fff", fontWeight: 800 }}>0 Fiedex </Text>
                  <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 10 }}>Fiedex Protocol</Text>

                </View>
              </View>

              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <View style={{ height: 30, width: 30, borderRadius: 30, backgroundColor: "black" }}></View>
                <View style={{ flexDirection: "column", marginLeft: 20 }}>
                  <Text allowFontScaling={false} style={{ color: "#fff", fontWeight: 800 }}>0 Fiedex</Text>
                  <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 10 }}>Fiedex USD</Text>

                </View>
              </View>


              <View style={{ flexDirection: "row", width: 320, justifyContent: "space-around", marginTop: 25 }}>
                <TouchableOpacity style={{ backgroundColor: "#f01c8b", width: 120, alignItems: "center", borderRadius: 20, justifyContent: "center", padding: 10, borderWidth: 1, borderColor: "#fff" }}><Text allowFontScaling={false} style={{ color: "#fff", fontSize: 15 }}>Deposit  <AntDesign name="doubleright" size={12} color="#fff" /></Text></TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "#f01c8b", width: 120, alignItems: "center", borderRadius: 20, justifyContent: "center", padding: 10, borderWidth: 1, borderColor: "#fff" }}><Text allowFontScaling={false} style={{ color: "#fff", fontSize: 15 }}>Withdraw  <AntDesign name="doubleright" size={12} color="#fff" /></Text></TouchableOpacity>
              </View>


            </View>


            {/* <View style={{ width: 350, alignItems: "center" }}>
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
            <View style={{ width: 320, backgroundColor: "#3c1642", padding: 20 }}>

              <View style={{ flexDirection: "row" }}>
                <View style={{ height: 30, width: 30, borderRadius: 30, backgroundColor: "black" }}></View>
                <View style={{ flexDirection: "column", marginLeft: 20 }}>
                  <Text allowFontScaling={false} style={{ color: "#fff", fontWeight: 800 }}>0.0 uHGT</Text>
                  <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 10 }}>unlocked Hooked Gold Token</Text>

                </View>
              </View>




              <View style={{ flexDirection: "row", width: 320, justifyContent: "space-around", marginTop: 20 }}>
                <TouchableOpacity style={{ backgroundColor: "#f01c8b", width: 180, alignItems: "center", borderRadius: 20, justifyContent: "center", padding: 10, borderWidth: 1, borderColor: "#fff" }}><Text allowFontScaling={false} style={{ color: "#fff", fontSize: 18 }}>Convert to Hook  <AntDesign name="doubleright" size={12} color="#fff" /></Text></TouchableOpacity>
              </View>


            </View> */}












            <View >

            </View>


          </View>




          <View style={{ width: 350, backgroundColor: "#3c1642", opacity: 1, borderRadius: 10, padding: 20, borderWidth: 1, borderColor: "#fff", marginTop: 70 }}>

            <Text allowFontScaling={false}  style={{ color: "#fff" }}>Staking Vault : </Text>

            <Text allowFontScaling={false} 
              style={{
                height: 1,
                borderColor: "#f01c8b",
                borderWidth: 0.5,
                marginTop: 10,
                width: 300,
                marginBottom: 15,

              }}
            />


            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View>
                <Text allowFontScaling={false}  style={{ color: "#fff", fontSize: 15, marginTop: 10 }}>Total Staking yields</Text>

                <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
                  <Image source={require("../assets/coin.png")} style={{height:30,width:30,resizeMode:"contain"}}></Image>
                <Text allowFontScaling={false}style={{ color: "#fff", fontSize: 12 }}>0</Text>

                </View>

              </View>
          
              <TouchableOpacity style={{ backgroundColor: "#f01c8b",  alignItems: "center", borderRadius: 20, justifyContent: "center" , borderWidth: 1, borderColor: "#fff",padding:15}}><Text allowFontScaling={false}  style={{ color: "#fff", fontSize: 15 }}>Go  <AntDesign name="doubleright" size={12} color="#fff" /></Text></TouchableOpacity>
            </View>





            <View >

            </View>


          </View>

        </ScrollView>
      </View>


    </ImageBackground>
    </ScrollView>


  )
}

export default Wallet