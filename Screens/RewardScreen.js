import { View, Text, Image, ImageBackground, Dimensions,TouchableOpacity, ScrollView, Animated } from 'react-native'
import React, {useState,useRef,useEffect} from 'react'
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';
const RewardScreen = ({navigation}) => {

  const height = Dimensions.get('screen').height
  const width = Dimensions.get('screen').width
  const [selectedId, setSelectedId] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const data= [
  { id :0,
    date: "02/02",
    time:"11:00"

  },
  { id :1,
    date: "?/?",
    time:"??:??"

  },
  { id :2,
     date: "?/?",
    time:"??:??"

  },
  { id :3,
    date: "?/?",
    time:"??:??"

  },
  { id :4,
    date: "?/?",
    time:"??:??"

  },
  { id :5,
    date: "?/?",
    time:"??:??"

  }, { id :6,
      date: "?/?",
      time:"??:??"

  },
  ]

  const winner=[{
    id:0,
    name:"Anne",
    points:1000
  },
  {
    id:1,
    name:"***",
    points:"???"
  },
  {
    id:2,
   name:"***",
    points:"???"
  },
  {
    id:3,
   name:"***",
    points:"???"
  },
  {
    id:4,
 name:"***",
    points:"???"
  },
  {
    id:5,
 name:"***",
    points:"???"
  },
  {
    id:6,
 name:"***",
    points:"???"
  },

]
const filteredWinners = selectedId !== null ? winner.filter(item => item.id === selectedId) : [];
useEffect(() => {
  Animated.timing(slideAnim, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }).start();
}, [selectedId]);

const renderWinnerItem = ({ item }) => {
  return (
    <Animated.View
      style={{
        opacity: slideAnim,
        transform: [
          {
            translateX: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [width, 0],
            }),
          },
        ],
      }}
    >
      <TouchableOpacity
        style={{
          borderWidth: 2,
          borderColor: "#3c1642",
          borderRadius: 10,
          margin: 10,
          paddingHorizontal: 20,
          backgroundColor: item.id === selectedId ? "#f01c8b" : null,
          width: width * 0.85,
          alignItems: "center"
        }}
        key={item.id}
      >
        <View style={{ alignItems: "center", backgroundColor: "#3c1642", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
          <Text style={{ color: "white", fontSize: 15 }}>{item.name}</Text>
        </View>
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <Text style={{ color: item.id !== selectedId ? "black" : "white", fontSize: 22, marginTop: 30 }}>{item.points} Fiedex</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
  return (
    <ScrollView>
    <ImageBackground source={require("../assets/B5.jpg")} style={{ height: height, width: width, alignItems: "center",paddingTop:70 }} >

        <View style={{width:350,backgroundColor:"#88047d",padding:15,borderRadius:10,opacity:0.9,flexDirection:"row",justifyContent:"space-around",alignItems:"center",borderWidth:2,borderColor:"#fff"}}>
          <View style={{justifyContent:"center",alignItems:"center"}}>
           
              <Text allowFontScaling={false} style={{color:"#fff",fontSize:12,fontWeight:"bold"}}>Reward</Text>
              <Text allowFontScaling={false} style={{color:"#fff",fontSize:18,marginTop:5,fontWeight:"bold"}}>0.00 Fiedex</Text>
            </View>
            <View style={{justifyContent:"center",alignItems:"center"}}>
              <Text allowFontScaling={false} style={{color:"#fff",fontSize:12,fontWeight:"bold"}}>Cumulative Correct</Text>
              <Text allowFontScaling={false} style={{color:"#fff",fontSize:18,marginTop:5,fontWeight:"bold"}}>0.00</Text>
            </View>
     
        </View>


        <View style={{marginTop:40,alignItems:"center"}}>
          <Text allowFontScaling={false} style={{color:"#fff",fontSize:25}}>Quiz on Live</Text>
          <Text allowFontScaling={false} style={{color:"#fff",fontSize:30}}>Split the prize</Text>
        </View>


         <View style={{width:width * 0.9, height:300, borderColor:"#fff",borderWidth:2,marginTop:30,borderRadius:10,backgroundColor:"#88047d",elevation:5}}>
          <View style={{height:70,borderBottomWidth:2,borderColor:"white"}}>
            <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index, separators}) => (
              <TouchableOpacity
              style={{borderWidth:2,borderColor:item.id!=selectedId?"#fff":"#3c1642",borderRadius:10,margin:10,paddingHorizontal:25,paddingVertical:5,backgroundColor:item.id==selectedId?"#df0392":"#ffe5ec"}}
                key={item.id}
                onPress={() => setSelectedId(item.id)}
                // onPress={() => this._onPress(item)}/
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <View style={{alignItems:"center"}}>
                  <Text style={{color:item.id!=selectedId?"black":"white",fontSize:15}}>{item.time}</Text>
                  <Text style={{color:item.id!=selectedId?"black":"white",fontSize:15}}>{item.date}</Text>
                </View>
              </TouchableOpacity>
            )}
            >
              
     
            </FlatList>
          </View>
          <View style={{height:180}}>

          <FlatList
                data={filteredWinners}
            horizontal
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index, separators}) => (
              <TouchableOpacity
              style={{borderWidth:2,borderColor:item.id!=0?"black":"white",borderRadius:10,margin:10,paddingHorizontal:0,backgroundColor:item.id==0?"#3c1642":"#fff",width:width * 0.85,alignItems:"center"}}
                key={item.id}
                // onPress={() => this._onPress(item)}/
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>

<View style={{alignItems:"center",backgroundColor:"#df0392",paddingHorizontal:10,paddingVertical:5,width:80,borderBottomRadius:50,borderColor:item.id!=0?"black":"white",borderWidth:2,borderTopWidth:0}}>
                  
                  <Text allowFontScaling={false} style={{color:"#fff",fontSize:12,fontWeight:700}}>{item.name}</Text>
                </View>
  
                <View style={{justifyContent:"center",flexDirection:"row"}}>
              
                <Text style={{color:item.id!=0?"black":"white",fontSize:22,marginTop:30}}>{item.points} Fiedex</Text>
            
           

                </View>

              </TouchableOpacity>
            )}
            >
              
     
            </FlatList>
          </View>
          <View style={{height:40,borderTopWidth:2,borderColor:"white",paddingHorizontal:10,alignItems:"center",paddingVertical:10}}>
            <Text style={{color:"#fff",fontWeight:600}}>Rewards For Each Winner: 15.15 Fiedex</Text>
          </View>
         </View>



        <View style={{ width: 350, alignItems: "center", marginTop: 40 }}>
            <TouchableOpacity  style={{ backgroundColor: "#3c1642", paddingHorizontal: 130, paddingVertical:15, alignItems: "center", justifyContent: "center", borderRadius: 20,borderWidth:2,borderColor:"#fff",flexDirection:"row" }}>
              <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 18 }}>End </Text>
              {/* <Image source={require("../assets/coin.png")} style={{height:30,width:30,resizeMode:"contain"}}></Image> */}

            </TouchableOpacity>
          </View>


  


    </ImageBackground>
    </ScrollView>
  )
}

export default RewardScreen