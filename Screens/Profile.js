import { View, Text,ImageBackground, Dimensions, TouchableOpacity, StyleSheet, Image,Switch, ScrollView } from 'react-native'
import React, {useState} from 'react';
import { FontAwesome6,AntDesign ,FontAwesome5} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
import { useAuth } from '../AuthContext';
// import { Switch, VStack, Center, NativeBaseProvider,HStack,ChevronRightIcon } from "native-base";

const Profile = ({navigation}) => {

  const { isLoginValue , isAlreadyLogin,logout,isLogoutValue} = useAuth();

  const {mobile}=useAuth()

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const profile =[
    
    {
      id:0,
      name:"Notifications",
      url:"",
      icon:<FontAwesome name="bell" size={20} color="#f01c8b" />
  
  },

  {
    id:1,
    name:"About Us",
    url:"About",
    icon:<FontAwesome5 name="info-circle" size={20} color="#f01c8b" />

},
{
  id:2,
  name:"Contact Us",
  url:"Contact",
  icon:<FontAwesome name="send" size={20} color="#f01c8b" />

},
{
  id:3,
  name:"Deregister Account",
  url:"deregister",
  icon:<FontAwesome5 name="info-circle" size={20} color="#f01c8b" />

},



]




  const handleLogout=async()=>{
   
    logout()

}
  return (

    <ScrollView>

    <ImageBackground source={require("../assets/B5.png")} style={{height:height,width:width,resizeMode:"contain",borderColor:"black",alignItems:"center",padding:20}} imageStyle={{borderRadius:0}} >

           <View style={styles.profileCont}>
              <Image source={require("../assets/user.png")} style={{ height: 65, width: 60, resizeMode: "contain" }}></Image>
          
            </View>
            <Text allowFontScaling={false} style={{fontWeight:600,color:"#fff",marginTop:10}}>{mobile}</Text>







            <View style={{paddingLeft:10 }}>
           
            

           
            
         

           <View style={{marginTop:80}}>
  

  {
    profile.map((item)=>(
      <>
      <TouchableOpacity onPress={()=>navigation.navigate(item.url)} key={item.id} style={{width:width,flexDirection:"row",justifyContent:"space-between",padding:10,marginTop:item.id==0?20:20}}>
      <Text allowFontScaling={false} style={{fontSize:15,color:"#fff"}}>{item.icon}   {item.name}</Text>
     
      <View>
      {item.id == 0 ? 

   
        <Switch
    trackColor={{false: '#767577', true: '#fff'}}
    thumbColor={isEnabled ? '#f01c8b' : '#f4f3f4'}
    onValueChange={toggleSwitch}
    value={isEnabled}
    style={{position:"absolute",right:10,top:-15}}
    
  /> :<AntDesign name="right" size={20} color="#D0D0D0" style={{marginRight:20}} />}
      {/* <ChevronRightIcon  colorScheme="secondary" size="md" /> */}
      </View>
  
     
    </TouchableOpacity>   
     {/* {item.id < profile.length - 1 &&   <Text allowFontScaling={false}
     style={{
         height: 1,
         borderColor: "#D0D0D0",
         borderWidth: 1,
         marginTop: 5,
         width: width,
         marginBottom: 5,
     
     }}
  />     } */}
    
  </>
  
    ))
  }
  
           </View>
     
  
  
      
  
    
  
  
      
  
             </View>
           <View style={{width:width,alignItems:"center"}}>
      <TouchableOpacity onPress={()=>handleLogout()} style={{ alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f01c8b", width: 140, borderRadius: 25,marginTop:80 }}><Text allowFontScaling={false} style={{ fontSize: 15, color: "white", fontWeight: 700 }}>Logout </Text></TouchableOpacity>   
  
           </View>

</ImageBackground>

</ScrollView>

  )
}

export default Profile

const styles = StyleSheet.create({
  
  profileCont: {
    width: 75,
    height: 78,
    backgroundColor: "#f01c8b",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:2,
    borderColor:"#fff"
  }
});