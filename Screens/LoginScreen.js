import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Alert,
    ScrollView,
    ImageBackground,
    Dimensions,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { Ionicons,FontAwesome } from "@expo/vector-icons";
  import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker'
  import { Fontisto,Entypo } from '@expo/vector-icons';
  import { useAuth } from "../AuthContext";
  import AsyncStorage from "@react-native-async-storage/async-storage";
import SignInWithGoogle from "./SignInWithGoogle";
 const height = Dimensions.get("screen").height;
 const width = Dimensions.get('screen').width;
   
  const LoginScreen = ({navigation}) => {
   
    const [hidePass, setHidePass] = useState(true);
    const [mobile,setMobile] = useState("");

    const {login} = useAuth()
    
    const [password, setPassword] = useState("");
   

    const [error, setErr] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [user, setUser] = useState("");
    const [flag,setFlag]=useState(false)
  
  
    useEffect(() => {
      validateForm();
    }, [ password, mobile]);
  
    const validateForm = async() => {
      let errors = {};
      try {
        const value = await AsyncStorage.getItem('user')
        if(value !== null) {
        
          const data= JSON.parse(value)
          console.log("data",data)
          if(data.mobile !== mobile) {
            errors.mobile = "Incorrect mobile number";
          }
          else if(mobile == '') {
            errors.mobile = "Enter mobile number";
          }         
 if(data.password !== password) {
            errors.password = "Incorrect password";
          }
          else  if(password == '') {
            errors.password = "Enter password";
          }  

          setErr(errors)
      

        }
        else{
          console.log("no value")
          if(mobile == '') {
            errors.mobile = "Enter mobile number";
          }         

       if(password == '') {
            errors.password = "Enter password";
          }  
        

          if(mobile!='' && password!='')
            errors.message= 'You have entered wrong credentials!'
         
        }
    
      } catch(e) {
        console.log("38 error",e)
       
      }
      setErr(errors)
      setIsFormValid(Object.keys(errors).length === 0);
    };
  
    const handleSubmit =async () => {
    
      if (isFormValid) {
           
           login()
      } else {
          setFlag(true)
      
      }
    };
  
    return (
      <View style={{backgroundColor:"white"}}>
           <ImageBackground source={require("../assets/bg9.png")} style={{width:width,height:height,alignItems:"center",paddingTop:40}}>
            <ScrollView>
          <View style={{marginTop:10,width:width,alignItems:"center"}}>
            <Image style={styles.img} source={require("../assets/logo.png")} />
          </View>

  
          <KeyboardAvoidingView>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.heading}>Login to your Account</Text>
              {error.message && <Text style={{color:"red",marginTop:10}}>{error.message}</Text>}
            </View>


<View style={{width:width,alignItems:"center"}}>

<View style={{marginTop:20 }}>
                <View style={styles.inputBoxCont}>
                <Ionicons name="call"    
                   size={24}
                  color="black"
                  style={{ marginLeft: 8 }}/>
  
                <TextInput
                  value={mobile}
                  keyboardType="numeric"
                  onChangeText={(text) => setMobile(text)}
                  style={{
                    color: "black",
                    marginVertical: 10,
                    width: 300,
                    fontSize: mobile ? 16 : 16,
                  }}
                  placeholder="Enter mobile number"
                />
              </View>
              {error.mobile && flag && <Text style={{color:"red"}}>{error.mobile}</Text>}
 </View>
          
                  
              <View>
              <View style={styles.inputBoxCont}>
         
              {
                    hidePass ?   <Entypo name="eye-with-line" onPress={()=>setHidePass(!hidePass)}  size={24}   color="black"
                    style={{ marginLeft: 8 }} />: <Entypo name="eye" onPress={()=>setHidePass(!hidePass)} size={24} color="black"  style={{ marginLeft: 8 }} />
                 
                }
  
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={hidePass ? true : false}
                  style={{
                    color: "black",
                    marginVertical: 10,
                    width: 300,
                    fontSize: password ? 16 : 16,
                  }}
                  placeholder="enter your Password"
                />
              </View>
              {error.password && flag && <Text style={{color:"red"}}>{error.password}</Text>}
            </View>
  
         
             
  
       
  
      
            <View style={styles.forgotCont}>
              {/* <Text>Keep me logged in</Text> */}
  
              <Text style={{ color: "#f01c8b", fontWeight: "900" }}>
                Forgot Password?
              </Text>
            </View>
  
            <View style={{ marginTop: 40 }} />
  
            <TouchableOpacity style={styles.button}
                
                  onPress={handleSubmit}
                 
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
             Login
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterScreen")}
              style={{ marginTop: 15 }}
            >
              <Text style={{ textAlign: "center", color: "black", fontSize: 16,fontWeight:800 }}>
                Don't have an account? Sign Up
              </Text>
            </TouchableOpacity>
</View>

<SignInWithGoogle></SignInWithGoogle>

          </KeyboardAvoidingView>
          </ScrollView>
          </ImageBackground> 
    
      </View>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
  
    img: {
      width: 120,
      height: 80,
      resizeMode:"contain"
    },
    heading: {
      fontSize: 17,
      fontWeight: "bold",
      marginTop: 10,
      color: "#041E42",
    },
    inputBoxCont: {
      flexDirection: "row",
      alignItems: "center",
      gap: 7,
      backgroundColor: "#90e0ef",
      paddingVertical: 5,
      borderRadius: 5,
      marginTop: 20,
   
    },
    forgotCont: {
      marginTop: 14,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    button: {
      width: 200,
      backgroundColor: "#f01c8b",
      borderRadius: 6,
      marginLeft: "auto",
      marginRight: "auto",
      padding: 15,
    },
  });
  