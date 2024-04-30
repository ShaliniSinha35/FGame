import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Pressable,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Alert,
    ScrollView,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
  
    
  } from "react-native";
  import { CheckBox } from "react-native-elements";
 
  import React, { useState, useEffect } from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { Ionicons,FontAwesome } from "@expo/vector-icons";
  import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker'
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { Fontisto,Entypo } from '@expo/vector-icons';
  import { AuthProvider, useAuth } from "../AuthContext";
  import PasswordStrengthIndicator from "../Components/PasswordStrength";
 const height = Dimensions.get("screen").height;
 const width = Dimensions.get('screen').width;
  
  const RegisterScreen = ({navigation}) => {
    const [check1, setCheck1] = useState(false);
const {register} = useAuth()
const [hidePass, setHidePass] = useState(true);
const [cHidePass, setCHidePass] = useState(true);
    const [name,setName]= useState("")
    const [email, setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [country, setCountry] = React.useState('');  
    const [password, setPassword] = useState("");
    const [cPass,setCPass]= useState("")
    const [referral,setReferral] = useState("")
    const [error, setErr] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [user, setUser] = useState("");
    const [flag,setFlag]=useState(false);

    // const [userData,setUserData]= useState({
    //     email:"",
    //     mobile:"",
    //     country:"",
    //     password:"",
    //     referral:"",

    // })

  
  
    useEffect(() => {
      validateForm();
    }, [email, password, mobile, country, referral,cPass,name,check1]);
  
    const validateForm = () => {
      let errors = {};
  
      // Validate name field
      if (!mobile) {
        errors.mobile = "Mobile Number is required.";
      }else if(mobile.length !==10){
        errors.mobile = "Incorrect Mobile Number";
      }

      if(!name){
        errors.name="Name is Required"
      }

      if(!country){
        errors.country="Country is Required"
      }
  
      // Validate email field
      if (!email) {
        errors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid.";
      }
  
      // Validate password field
      if (!password) {
        errors.password = "Password is required.";
      } 
      else if (
        !/[!@#$%^&*(),.?":{}|<>]/.test(password) ||
        !/[A-Z]/.test(password) ||
        !/[0-9]/.test(password)
      ) {
        errors.password =
          "Password must contain at least one special character, one uppercase letter, and one number.";
      }
   // Validate confirm password field
   if (!cPass) {
    errors.cPass = "Confirm Password is required.";
  } else if (cPass !== password) {
    errors.cPass = "Passwords do not match.";
  }

  if(!check1){
    console.log(check1)
    errors.terms = "Please accept the terms and conditions"
  }
      // Set the errors and update form validity
      setErr(errors);
      setIsFormValid(Object.keys(errors).length === 0);
    };
  
    const handleSubmit = async() => {
    
      if (isFormValid) {
        


      
        const userData= {
            email:email,
             mobile:mobile,
            country:country,
            password:password,
            referral:referral,
        }
        console.log("userData",userData,email)
        try {
            await AsyncStorage.setItem('user', JSON.stringify(userData))
            // register()
        navigation.navigate("Login")
      
          } catch (e) {
             console.log("error",e)
          }
         
      } else {
          setFlag(true)
        // alert("Registration form has errors. Please correct them.");
      }
    };
  
    return (
      <View style={{backgroundColor:"white"}}>
           <ImageBackground source={require("../assets/bg9.png")} style={{width:width,alignItems:"center",paddingBottom:20}}>
            <ScrollView>
          <View style={{marginTop:10,width:width,alignItems:"center"}}>
            <Image style={styles.img} source={require("../assets/logo.png")} />
          </View>
  
          <KeyboardAvoidingView>

            <View style={{width:width,alignItems:"center"}}>


            <View style={{ alignItems: "center" }}>
              <Text style={styles.heading}>Register to your Account</Text>
            </View>




            <View style={{marginTop:20 }}>
                <View style={styles.inputBoxCont}>
                <FontAwesome name="user" size={24} color="black"    
                 style={{ marginLeft:8}} />
              
  
                <TextInput
                  value={name}
                  onChangeText={(text) => setName(text)}
                  style={{
                    color: "black",
                    marginVertical: 10,
                    width: 300,
                    fontSize: password ? 16 : 16,
                  }}
                  placeholder="Enter your name"
                />
              </View>
              {error.name && flag && <Text style={{color:"red"}}>{error.name}</Text>}
            </View>


            <View >
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
                <MaterialIcons
                  style={{ marginLeft: 8 }}
                  name="email"
                  size={24}
                  color="black"
                />
  
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={{
                    color: "black",
                    marginVertical: 10,
                    width: 300,
                    fontSize: password ? 16 : 16,
                  }}
                  placeholder="Enter your email"
                />
              </View>
              {error.email && flag && <Text style={{color:"red"}}>{error.email}</Text>}
            </View>
          
        
            <View >
              <View style={styles.inputBoxCont}>
              <Fontisto name="world" size={24} 
                  color="black"
                  style={{ marginLeft: 8 }}
            />
                <TextInput
                  value={country}
                  onChangeText={(text) => setCountry(text)}
                  style={{
                    color: "black",
                    marginVertical: 10,
                    width: 300,
                    fontSize: country ? 16 : 16,
                  }}
                  placeholder="Country"
                />


  
              </View>
  
              {error.country  && flag && <Text style={{color:"red"}}>{error.country}</Text>}
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
                  placeholder="Enter your password"
                />
              </View>
              {error.password && flag && <Text style={{color:"red"}}>{error.password}</Text>}

            </View>
  
            {password !== '' && <PasswordStrengthIndicator password={password} />}


         
            <View>
              <View style={styles.inputBoxCont}>
            
                {
                    cHidePass ?   <Entypo name="eye-with-line" onPress={()=>setCHidePass(!cHidePass)}  size={24}   color="black"
                    style={{ marginLeft: 8 }} />: <Entypo name="eye" onPress={()=>setCHidePass(!cHidePass)} size={24} color="black"  style={{ marginLeft: 8 }} />
                 
                }
               
  
                <TextInput
                  value={cPass}
                  onChangeText={(text) => setCPass(text)}
                  secureTextEntry={cHidePass ? true : false}
                  onKeyPress={(e)=>console.log(e)}
                  style={{
                    color: "black",
                    marginVertical: 10,
                    width: 300,
                    fontSize: cPass ? 16 : 16,
                  }}
                  placeholder="Confirm your Password"
                />
              </View>
              {error.cPass && flag && <Text style={{color:"red"}}>{error.cPass}</Text>}
            </View>
             
  
            <View>
                <View style={styles.inputBoxCont}>
              <Ionicons name="send"   style={{ marginLeft: 8 }}
                  size={24}
                  color="black"
                />
  
                <TextInput
                  value={referral}
                  keyboardType="numeric"
                  onChangeText={(text) => setReferral(text)}
                  style={{
                    color: "black",
                    marginVertical: 10,
                    width: 300,
                    fontSize: referral ? 16 : 16,
                  }}
                  placeholder="Referral Code"
                />
              </View>
              {error.referral && flag && <Text style={{color:"red"}}>{error.referral}</Text>}
            </View>
  
            <View style={styles.checkboxContainer}>
        <CheckBox
         checked={check1}
         onPress={() => setCheck1(!check1)}
          style={styles.checkbox}
        />
        <Text style={styles.label}>I have accpet the given Terms and Conditions</Text>
   
      </View>
      {error.terms &&  flag && <Text style={{color:"red"}}>{error.terms}</Text>}

           
  
            <View style={{ marginTop: 40 }} />
  
            <TouchableOpacity style={styles.button}
                
                  onPress={()=>handleSubmit()}
                 
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
  
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginTop: 15 }}
            >
              <Text style={{ textAlign: "center", color: "black", fontSize: 16,fontWeight:800 }}>
                Already have an account? Sign In
              </Text>
            </Pressable>

            </View>
          </KeyboardAvoidingView>
          </ScrollView>
          </ImageBackground> 
    
      </View>
    );
  };
  
  export default RegisterScreen;
  
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
      gap: 10,
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
    checkboxContainer: {
      flexDirection: 'row',
      marginTop: 20,
      justifyContent:"flex-start",
      width:width
    },
    checkbox: {
      alignSelf: 'center',
    },
    label: {
      marginTop: 15,
    },
  });
  