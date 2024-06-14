// AuthContext.js

import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoginValue, setIsLoginValue] = useState(false);
  const [isLogoutValue, setIsLogoutValue] = useState(false);

  const [isWalletUpdated,setIsWalletUpdated]= useState(false)



   const [mobile,setMobile] = useState(null)
   const [email,setEmail] = useState(null)
   const [password,setPassword] = useState(null)
   const [country,setCountry] = useState(null)
   const [user,setUser]= useState(null)


   const [key, setKey]= useState(false)




  const register = async(value) => {
    console.log("register called")

    setIsLoginValue(true)
    setIsLogoutValue(false)
  
    
    // try {
    //   const value = await AsyncStorage.getItem('user')
    //   if(value !== null) {
    //     console.log("value", value)
    //     const data= JSON.parse(value)
    //      setUser(data)  
    //   }
  
    // } catch(e) {
    //   console.log("38 error",e)
    // }
       
  };


  const isAlreadyLogin =async()=>{

    
 
    setIsLoginValue(true);
  
    } 


  const login = async() => {
    setIsLoginValue(true);
    setIsLogoutValue(false)
  
    // try {
    //   const value = await AsyncStorage.getItem('user')
    //   if(value !== null) {
       
    //     const data= JSON.parse(value)
    //      setUser(data)
    //      setMobile(data.mobile)
    //      await AsyncStorage.setItem("loginUser",JSON.stringify(data))
    //      setIsLoginValue(true);
    //      setIsLogoutValue(false)
    //   }
  
    // } catch(e) {
    //   console.log("38 error",e)
    // }

  };

  const logout = async() => {
    try{
    //  await AsyncStorage.removeItem('loginUser')
     setIsLoginValue(false);
     setIsLogoutValue(true);
    }
    catch(error){
      console.log("asyncstorage remove item error",error)
    }

  };




  

  return (
    <AuthContext.Provider value={{ isLoginValue, login, logout,isAlreadyLogin,register,user,mobile,isLogoutValue,key,setKey,isWalletUpdated,setIsWalletUpdated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);