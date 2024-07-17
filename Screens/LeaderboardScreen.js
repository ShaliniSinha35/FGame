import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, {useState,useEffect} from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'

const width = Dimensions.get('screen').width
const LeaderboardScreen = () => {

    const [userData,setUser]= useState(null)

    const getUserData =async()=>{
        try{
            const res = await axios.get("https://fiedex.com/fiedex/leaderBoard")
            console.log(res.data)

       const filterData=     res.data.sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
            setUser(filterData)
        }
        catch(err){
            console.log(err.message)
        }
    
       }
      useEffect(()=>{
      getUserData()
      },[])


  const user = [
    {
        id:1,
        username:"user123",
        rewards:30000
    },
    {
        id:2,
        username:"Rtc1456",
        rewards:20000
    },
    {
        id:3,
        username:"De1234",
        rewards:15000
    },
    {
        id:4,
        username:"us2345",
        rewards:12000
    },
    {
        id:5,
        username:"user9087",
        rewards:10000
    },
    {
        id:6,
        username:"xyxery",
        rewards:5000
    },
   
  ]
    
  return (
<ImageBackground source={require("../assets/B2.png")} style={{flex:1, paddingBottom:20,alignItems:"center",paddingTop:40}}>
<Text allowFontScaling={false} style={{color:"#fff",letterSpacing:5,fontSize:18,marginBottom:5}}>LEADERBOARD</Text>

 <ScrollView>

<View style={{width:width,flexDirection:"row",alignItems:"center",paddingVertical:10,paddingHorizontal:10,justifyContent:"space-between",marginTop:50,borderRadius:20}}>
<Text allowFontScaling={false} style={{color:"#fff",letterSpacing:5}}>Rank</Text>
<Text allowFontScaling={false} style={{color:"#fff",letterSpacing:5}}>Username</Text>
<Text allowFontScaling={false} style={{color:"#fff",letterSpacing:5}}>Rewards</Text>

  </View>  

  <View style={{marginTop:20}}></View>

  {userData!=null &&
      userData.map((item,index)=>(
          <View key={index} style={{width:width,flexDirection:"row",alignItems:"center",paddingVertical:20,paddingHorizontal:0,backgroundColor:"#f01c8b",justifyContent:"space-between",borderBottomRadius:10,borderWidth:1,borderColor:"#D0D0D0",opacity:0.8,paddingRight:10,paddingLeft:10}}>
              <View style={{padding:10,borderRadius:40,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
              <Text allowFontScaling={false} style={{color:"#41bcd1",letterSpacing:1,fontWeight:800,alignItems:"center"}}>#{index + 1}</Text>

              </View>
          <Text allowFontScaling={false} style={{color:"#fff",letterSpacing:2}}>{item.name}</Text>
          <View style={{flexDirection:"row",alihnItems:"center"}}>
            <Image source={require("../assets/coin.png")} style={{height:20,width:20,resizeMode:"contain"}}></Image>
          <Text allowFontScaling={false} style={{color:"#fff",letterSpacing:1}}>{item.amount}</Text>

          </View>
    
            </View>  
      ))
  }    
 </ScrollView>

                                                          
</ImageBackground>
  )
}

export default LeaderboardScreen