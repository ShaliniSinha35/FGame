import { View, Text, ImageBackground, Dimensions, TouchableOpacity , Image, ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { FontAwesome , Entypo} from '@expo/vector-icons';
const width = Dimensions.get('screen').width
import axios from 'axios';
const LevelScreen = ({navigation}) => {




  return (



<ImageBackground source={require("../assets/bg9.png")} style={{width:width,flex:1,paddingBottom:20}}>
<ScrollView>
<View style={{marginTop:30, paddingleft:10,paddingRight:10}}>


<View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
<View style={{height:100,width:width * 0.6,backgroundColor:"#41bcd1",borderRadius:30,alignItems:"center",borderWidth:2,borderColor:"#121212",elevation:5}}>
    <Text style={{color:"#fff",letterSpacing:3,marginTop:5}}>LEVEL 1</Text>

    <Text allowFontScaling={false} 
                style={{
                  height: 1,
                  borderColor: "#fff",
                  borderWidth: 0.5,
                  marginTop: 15,
                  marginBottom: 15,
                width:  width * 0.6

                }}
              />
<View style={{flexDirection:"row",alignItems:"center"}}>
<Text style={{color:"#fff",letterSpacing:3}}>Difficulty:</Text>
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star-o" size={15} color="black" />
<FontAwesome name="star-o" size={15} color="black" />
<FontAwesome name="star-o" size={15} color="black" />
<FontAwesome name="star-o" size={15} color="black" />


</View>

<View style={{flexDirection:"row",alignItems:"center"}}>
<Text style={{color:"#fff",letterSpacing:3}}>Awards:</Text>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Entypo name="circle" size={13} color="black" />
<Entypo name="circle" size={13} color="black" />
<Entypo name="circle" size={13} color="black" />
<Entypo name="circle" size={13} color="black" />
</View>

</View>
<TouchableOpacity onPress={()=>navigation.navigate("Quiz",{level:"Level 1"})} style={{paddingHorizontal:30,paddingVertical:15,backgroundColor:"#3c1642",borderRadius:10}}><Text style={{color:"#fff",letterSpacing:3}}>Play Now</Text></TouchableOpacity>
</View>

<View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
<TouchableOpacity onPress={()=>navigation.navigate("Quiz",{level:"Level 2"})} style={{paddingHorizontal:30,paddingVertical:15,backgroundColor:"#3c1642",borderRadius:10}}><Text style={{color:"#fff",letterSpacing:3}}>Play Now</Text></TouchableOpacity>
   
<View style={{marginTop:20,alignItems:"flex-end"}}>
<View style={{height:100,width:width * 0.6,backgroundColor:"#f01c8b",borderRadius:30,alignItems:"center",borderWidth:2,borderColor:"#121212",elevation:5}}>
    <Text style={{color:"#fff",letterSpacing:3,marginTop:5}}>LEVEL 2</Text>

    <Text allowFontScaling={false} 
                style={{
                  height: 1,
                  borderColor: "#fff",
                  borderWidth: 0.5,
                  marginTop: 15,
                  marginBottom: 15,
                  width:200

                }}
              />
<View style={{flexDirection:"row",alignItems:"center"}}>
<Text style={{color:"#fff",letterSpacing:3}}>Difficulty:</Text>
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star-o" size={15} color="black" />
<FontAwesome name="star-o" size={15} color="black" />
<FontAwesome name="star-o" size={15} color="black" />


</View>

<View style={{flexDirection:"row",alignItems:"center"}}>
<Text style={{color:"#fff",letterSpacing:3}}>Awards:</Text>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Entypo name="circle" size={13} color="black" />
<Entypo name="circle" size={13} color="black" />
<Entypo name="circle" size={13} color="black" />
</View>

</View>
     </View>
</View>
  

     <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between",marginTop:20}}>
     <View style={{height:100,width:width * 0.6,backgroundColor:"#41bcd1",borderRadius:30,alignItems:"center",borderWidth:2,borderColor:"#121212",elevation:5}}>
    <Text style={{color:"#fff",letterSpacing:3,marginTop:5}}>LEVEL 3</Text>

    <Text allowFontScaling={false} 
                style={{
                  height: 1,
                  borderColor: "#fff",
                  borderWidth: 0.5,
                  marginTop: 15,
                  marginBottom: 15,
                  width:width * 0.6

                }}
              />
<View style={{flexDirection:"row",alignItems:"center"}}>
<Text style={{color:"#fff",letterSpacing:3}}>Difficulty:</Text>
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star-o" size={15} color="black" />
<FontAwesome name="star-o" size={15} color="black" />


</View>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Text style={{color:"#fff",letterSpacing:3}}>Awards:</Text>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Entypo name="circle" size={13} color="black" />
<Entypo name="circle" size={13} color="black" />
</View>

</View>
<TouchableOpacity onPress={()=>navigation.navigate("Quiz",{level:"Level 3"})} style={{paddingHorizontal:30,paddingVertical:15,backgroundColor:"#3c1642",borderRadius:10}}><Text style={{color:"#fff",letterSpacing:3}}>Play Now</Text></TouchableOpacity>
</View>


   
<View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
<TouchableOpacity onPress={()=>navigation.navigate("Quiz",{level:"Level 4"})} style={{paddingHorizontal:30,paddingVertical:15,backgroundColor:"#3c1642",borderRadius:10}}><Text style={{color:"#fff",letterSpacing:3}}>Play Now</Text></TouchableOpacity>
   
<View style={{marginTop:20,alignItems:"flex-end"}}>
<View style={{height:100,width:width * 0.6,backgroundColor:"#f01c8b",borderRadius:30,alignItems:"center",borderWidth:2,borderColor:"#121212",elevation:5}}>
    <Text style={{color:"#fff",letterSpacing:3,marginTop:5}}>LEVEL 4</Text>

    <Text allowFontScaling={false} 
                style={{
                  height: 1,
                  borderColor: "#fff",
                  borderWidth: 0.5,
                  marginTop: 15,
                  marginBottom: 15,
                  width:width * 0.6

                }}
              />
<View style={{flexDirection:"row",alignItems:"center"}}>
<Text style={{color:"#fff",letterSpacing:3}}>Difficulty:</Text>
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star-o" size={15} color="black" />


</View>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Text style={{color:"#fff",letterSpacing:3}}>Awards:</Text>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Entypo name="circle" size={13} color="black" />
</View>

</View>
     </View>
</View>



    <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between",marginTop:20}}>
     <View style={{height:100,width:width * 0.6,backgroundColor:"#41bcd1",borderRadius:30,alignItems:"center",borderWidth:2,borderColor:"#121212",elevation:5}}>
    <Text style={{color:"#fff",letterSpacing:3,marginTop:5}}>LEVEL 5</Text>

    <Text allowFontScaling={false} 
                style={{
                  height: 1,
                  borderColor: "#fff",
                  borderWidth: 0.5,
                  marginTop: 15,
                  marginBottom: 15,
                  width:width * 0.6

                }}
              />
<View style={{flexDirection:"row",alignItems:"center"}}>
<Text style={{color:"#fff",letterSpacing:3}}>Difficulty:</Text>
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star" size={15} color="orange" />
<FontAwesome name="star" size={15} color="orange" />

</View>

<View style={{flexDirection:"row",alignItems:"center"}}>
<Text style={{color:"#fff",letterSpacing:3}}>Awards:</Text>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
<Image source={require("../assets/coin.png")} style={{height:20,width:20}}></Image>
</View>

</View>
<TouchableOpacity onPress={()=>navigation.navigate("Quiz",{level:"Level 5"})} style={{paddingHorizontal:30,paddingVertical:15,backgroundColor:"#3c1642",borderRadius:10}}><Text style={{color:"#fff",letterSpacing:3}}>Play Now</Text></TouchableOpacity>
    </View>


   
</View>
</ScrollView>


</ImageBackground>


  )
}

export default LevelScreen