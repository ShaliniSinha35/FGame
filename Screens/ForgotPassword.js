//create a forgot password screen in react native first it show the email input box and a button for send otp then create a api for backend if this email exists in database if exists then send 4 digit opt to this entered email and  then show otp input value and check that otp is same as user entered otp if it is match then show change password input box 

import React, { useEffect, useState } from 'react';
import { Alert,View, Text, TextInput, Button, StyleSheet,TouchableOpacity,Dimensions, ImageBackground,Image } from 'react-native';
import axios from 'axios';
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons, FontAwesome ,Entypo} from "@expo/vector-icons";
import PasswordStrengthIndicator from '../Components/PasswordStrength';
import { err } from 'react-native-svg';
const width = Dimensions.get('screen').width
const ForgotPassword = ({navigation}) => {
   
    const [email, setEmail] = useState('');
    const [isEmailFocused,setIsEmailFocused]= useState(false)
    const [otp, setOtp] = useState('');
    const[isOtpFocused,setIsOtpFocused] = useState(false)
    const [generatedOtp, setGeneratedOtp] = useState(null);
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [isPasswordFocused,setIsPasswordFocused]= useState(false)
    const [hidePass, setHidePass] = useState(true);
    const [showPasswordInput, setShowPasswordInput] = useState(false);
    const [error, setErr] = useState("");
    const [flag, setFlag] = useState(false);
    const sendOtp = async () => {
      let errors={}
        try {
            const response = await axios.post('https://fiedex.com/fiedex/send-otp', { email });
            console.log(response.data.otp)
            setGeneratedOtp(response.data.otp);
            setShowOtpInput(true);
        } catch (error) {
             errors.email= "Email not found"
             setErr(errors)
             setTimeout(() => {
               setErr("")
             }, 5000);
            console.error(error);
            // Alert.alert('Email not found');
        }
    };

    const verifyOtp = () => {
      let errors={}
        if (otp == generatedOtp) {
            setShowPasswordInput(true);
        } else {

          errors.otp= "Incorrect OTP"
          setErr(errors)
          setTimeout(() => {
            setErr("")
          }, 5000);
            // Alert.alert('Incorrect OTP');
        }
    };

    const checkPassword = () => {
        let errors = {};
        if (!newPassword) {
          errors.password = "Password is required.";

          setErr(errors);
          setFlag(true);
        } 
        else{
           setErr({})
            setFlag(false); 
        }
      

      };
    
      useEffect(() => {
        checkPassword();
      }, [newPassword]);
    
      const changePassword = async () => {
        console.log(error)
        if (!error.password) {
          try {
            await axios.post('https://fiedex.com/fiedex/change-password', { email, newPassword });
            Alert.alert('Password changed successfully');
            navigation.navigate("Login");
          } catch (error) {
            console.error(error);
            // Alert.alert('Error changing password');
          }
        }
      };

    return (
        <ImageBackground source={require("../assets/bg9.png")} style={styles.container}>
             <View style={{marginTop:10,width:width,alignItems:"center",marginBottom:60}}>
            <Image style={styles.img} source={require("../assets/logo.png")} />
          </View>
            {!showOtpInput && !showPasswordInput && (
                <>
                  
                    <TextInput
                        style={[styles.input,styles.inputBoxFocused]}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholder='Enter your email'
                        onFocus={()=>setIsEmailFocused(true)}
                        onBlur={()=>setIsEmailFocused(false)}
                    />

                    {error.email!="" && <Text style={{color:"red"}}>{error.email}</Text>}
                             <TouchableOpacity style={styles.button}
                
                onPress={()=>sendOtp()}
               
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Send OTP
            </Text>
          </TouchableOpacity>
                </>
            )}
            {showOtpInput && !showPasswordInput && (
                <>
                  
                    <TextInput
           style={[styles.input,styles.inputBoxFocused]}
                        value={otp}
                        onChangeText={setOtp}
                        keyboardType="numeric"
                        placeholder='Enter OTP'
                        onFocus={()=>setIsOtpFocused(true)}
                        onBlur={()=>setIsOtpFocused(false)}
                    />

{error.otp!="" && <Text style={{color:"red"}}>{error.otp}</Text>}


                              <TouchableOpacity style={styles.button}
                
                onPress={()=>verifyOtp()}
               
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Verify OTP
            </Text>
          </TouchableOpacity>
                </>
            )}
            {showPasswordInput && (
                <>
                   <View>
                <View style={styles.inputBoxCont}>

                  {
                    hidePass ? <Entypo name="eye-with-line" onPress={() => setHidePass(!hidePass)} size={24} color="black"
                      style={{ marginLeft: 8 }} /> : <Entypo name="eye" onPress={() => setHidePass(!hidePass)} size={24} color="black" style={{ marginLeft: 8 }} />

                  }


                  <TextInput
                  
                    value={newPassword}
                    onChangeText={(text) => setNewPassword(text)}
                    secureTextEntry={hidePass ? true : false}
                    style={{
                      color: "black",
                      marginVertical: 10,
                      width: 300,
                      fontSize: 16,
                      borderColor: isPasswordFocused ? "#121212":null,
                      borderWidth: 2,

                    }}
                    placeholder="Enter your new password"
                  />
                </View>
                {console.log(error)}
                {error.password  && flag && <Text style={{ color: "red" }}>{error.password}</Text>}


              </View>
              
              {newPassword !== '' && <PasswordStrengthIndicator password={newPassword} />}



   
                   <TouchableOpacity style={styles.button}
                
                onPress={()=>changePassword()}
               
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Change Password
            </Text>
          </TouchableOpacity>
                </>
            )}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
     alignItems:"center",
        paddingTop:50
   
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor: "#90e0ef",
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 0,
        width: width * 0.9,
        marginBottom:20,
        paddingHorizontal:15

       
    },
    button: {
        width: 200,
        backgroundColor: "#f01c8b",
        borderRadius: 6,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
        marginTop:30
      },
      inputBoxCont: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor: "#90e0ef",
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 0,
        width: width * 0.9,
        marginBottom:20
    
      },
      img: {
        width: 120,
        height: 80,
        resizeMode:"contain"
      },
      inputBoxFocused: {
        borderColor: "#121212",
        borderWidth: 2,
      },
});

export default ForgotPassword;
