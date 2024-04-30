import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Quiz from "../Screens/Quiz";
import Referral from "../Screens/Referral";
import Wallet from "../Screens/Wallet";
import Login from "../Screens/Login";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Result from "../Screens/Result";
import { FontAwesome } from '@expo/vector-icons';
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

 
  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={{tabBarStyle: {elevation:15,height:65,borderTopWidth:1,backgroundColor:"#fff",opacity:0.6}}}
      
      >

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#f01c8b", fontSize: 15,marginBottom:5 },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                // <Entypo name="home" size={28} color="#41b7d1" />
                <MaterialCommunityIcons name="home-circle" size={38} color="#41b7d1" />
              ) : (
                // <AntDesign name="home" size={28} color="gray" />
                <MaterialCommunityIcons name="home-circle-outline" size={38} color="gray" />
              ),
          }}
        />
     
        <Tab.Screen
          name="Quiz To Earn"
          component={Quiz}
          options={{
            headerShown: false,
            tabBarLabel: "Quiz To Earn",
            tabBarLabelStyle: { color: "#f01c8b", fontSize: 15,marginBottom:5 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                // <MaterialIcons name="quiz" size={30} color="#41b7d1" />
                <MaterialCommunityIcons name="head-question" size={34} color="#41b7d1" />
              ) : (
                // <MaterialIcons name="quiz" size={30} color="gray"/>
                <MaterialCommunityIcons name="head-question-outline" size={28} color="gray" />
              ),
          }}
        />


        <Tab.Screen
          name="Referral"
          component={Referral}
          options={{
            tabBarLabel: "Referral",
            tabBarLabelStyle: { color: "#f01c8b", fontSize: 15,marginBottom:5 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                // <Ionicons name="send" size={28} color="#41b7d1" />
                <MaterialCommunityIcons name="send-circle" size={38} color="#41b7d1" />

              ) : (
                // <Ionicons name="send" size={28} color="gray" />
                <MaterialCommunityIcons name="send-circle-outline" size={38} color="gray" />
              ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{

            tabBarLabel: "Login",
            tabBarLabelStyle: { color: "#f01c8b", fontSize: 15 ,marginBottom:5},
            tabBarIcon: ({ focused }) =>
              focused ? (
                // <AntDesign name="login" size={28} color="#41b7d1" />
                <FontAwesome name="sign-in" size={28} color="#41b7d1" />

              ) : (
                // <AntDesign name="login" size={28} color="gray" />
                <FontAwesome name="sign-in" size={28} color="gray"/>
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Result"
          component={Result}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});


   {/* <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#f01c8b",fontSize:12 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="user-alt" size={24} color="#41b7d1" />
                ) : (
                  <FontAwesome5 name="user-alt" size={24} color="gray" />
              ),
          }}
        /> */}

        
        {/* <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarLabel: "Wallet",
            tabBarLabelStyle: { color: "#f01c8b",fontSize:12 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="wallet-sharp" size={24} color="#41b7d1" />
              
              ) : (
                <Ionicons name="wallet-sharp" size={24} color="gray" />
              ),
          }}
        /> */}
