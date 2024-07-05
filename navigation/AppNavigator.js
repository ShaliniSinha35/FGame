import {StyleSheet,Image} from "react-native";
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Quiz from "../Screens/Quiz";
import Referral from "../Screens/Referral";
import Wallet from "../Screens/Wallet";
import Result from "../Screens/Result";
import Terms from "../Screens/Terms";
import Privacy from "../Screens/Privacy";
import Faq from "../Screens/Faq";
import QuizScreen from "../Screens/QuizScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import { useAuth } from "../AuthContext";
import MiningScreen from "../Screens/MiningScreen";
import RewardScreen from "../Screens/RewardScreen";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import Deregister from "../Screens/Deregister";
import { useSelector, useDispatch } from 'react-redux';
import MiningKey from "../Screens/MiningKey";
import Demo from "../Screens/Demo";
import ForgotPassword from "../Screens/ForgotPassword";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const AppNavigator = () => {
    const { isLoginValue, isAlreadyLogin, logout, isLogoutValue } = useAuth();


    console.log("isLoinValue", isLoginValue, isLogoutValue)
    const userInfo = useSelector(state => state.user.userInfo? state.user.userInfo:null);
    console.log("userinfo",userInfo)

    useEffect(() => {

    }, [userInfo])

  


    const dispatch = useDispatch();

    const handleLogout = async (navigation) => {
        dispatch({ type: 'CLEAR_USER_INFO' });
        navigation.navigate("Login");
        logout()

    }

    // Ensure setIsLogin(true) triggers a re-render
    const isLogin = async () => {
        isAlreadyLogin()

    };

    const drawerMenu = [

        {
            id: 1,
            name: "My Profile",
            url: "Profile",
            icon: <FontAwesome name="user" size={24} color="white" />,
        },
        {
            id: 4,
            name: "Referral",
            url: "Referral",
            icon: <FontAwesome name="send" size={22} color="white" />,
        },

        {
            id: 2,
            name: "Quiz To Earn",
            url: "Quiz To Earn",
            icon: <MaterialCommunityIcons name="head-question" size={30} color="white" />,
        },

        {
            id: 3,
            name: "Wallet",
            url: "Wallet",
            icon: <Ionicons name="wallet" size={24} color="white" />,
        },
        {
            id: 5,
            name: "Terms & Conditions",
            url: "terms",
            icon: <Foundation name="clipboard-pencil" size={24} color="white" />,
        },
        {
            id: 6,
            name: "Privacy Policy",
            url: "privacy",
            icon: <MaterialIcons name="security" size={24} color="white" />,
        },
        {
            id: 7,
            name: "FAQ",
            url: "Faq",
            icon: (
                <MaterialCommunityIcons
                    name="comment-question-outline"
                    size={24}
                    color="white"
                />
            ),
        },
        {
            id: 8,
            name: "Logout",
            url: "logout",
            icon: (
                <FontAwesome name="sign-in" size={24}
                    color="white" />
            ),
        }





    ];



    const BottomNavigator = () => {

        return (
            <Tab.Navigator
                screenOptions={{ tabBarStyle: { elevation: 15, height: 65, borderTopWidth: 1, backgroundColor: "#3c1642", opacity: 1, borderColor: "#3c1642" } }}

            >
                <Tab.Screen
                    name="Home"
                    component={StackNavigator}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Quiz To Earn",
                        tabBarLabelStyle: { color: "#fff", fontSize: 12, marginBottom: 5 },
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                // <MaterialIcons name="quiz" size={30} color="#41b7d1" />
                                <Image source={require("../assets/p.png")} style={{ width: 40, height: 40, resizeMode: "contain", elevation: 5 }}></Image>
                            ) : (
                                // <MaterialIcons name="quiz" size={30} color="gray"/>
                                <Image source={require("../assets/p1.png")} style={{ width: 40, height: 40, resizeMode: "contain", elevation: 5 }}></Image>
                            ),
                    }}
                />

                {/* <Tab.Screen
                name="Quiz To Earn"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: "Quiz To Earn",
                    tabBarLabelStyle: { color: "#fff", fontSize: 12, marginBottom: 5 },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            // <MaterialIcons name="quiz" size={30} color="#41b7d1" />
                            <Image source={require("../assets/p.png")} style={{width:40,height:40,resizeMode:"contain"}}></Image>
                        ) : (
                            // <MaterialIcons name="quiz" size={30} color="gray"/>
                            <Image source={require("../assets/p1.png")} style={{width:40,height:40,resizeMode:"contain"}}></Image>
                        ),
                }}
            /> */}


                <Tab.Screen
                    name="Referral"
                    component={Referral}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Referral",
                        tabBarLabelStyle: { color: "#fff", fontSize: 12, marginBottom: 5 },
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                // <Ionicons name="send" size={28} color="#41b7d1" />
                                // <MaterialCommunityIcons name="send-circle" size={38} color="#fff" />
                                <Image source={require("../assets/w.png")} style={{ width: 40, height: 40, resizeMode: "contain", elevation: 5 }}></Image>

                            ) : (
                                // <Ionicons name="send" size={28} color="gray" />
                                // <MaterialCommunityIcons name="send-circle-outline" size={38} color="gray" />
                                <Image source={require("../assets/w1.png")} style={{ width: 40, height: 40, resizeMode: "contain", elevation: 5 }}></Image>
                            ),



                    }}
                />

                <Tab.Screen
                    name="Mining"
                    component={MiningScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Minning",
                        tabBarLabelStyle: { color: "#fff", fontSize: 12, marginBottom: 5 },
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                // <Ionicons name="send" size={28} color="#41b7d1" />
                                <Image source={require("../assets/h.png")} style={{ width: 40, height: 40, resizeMode: "contain", elevation: 5 }}></Image>

                            ) : (
                                // <Ionicons name="send" size={28} color="gray" />
                                <Image source={require("../assets/h1.png")} style={{ width: 40, height: 40, resizeMode: "contain", elevation: 5 }}></Image>
                            ),
                    }}
                />
                <Tab.Screen
                    name="Reward"
                    component={Demo}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Opinion",
                        tabBarLabelStyle: { color: "#fff", fontSize: 12, marginBottom: 5 },
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                // <Ionicons name="send" size={28} color="#41b7d1" />
                                <Image source={require("../assets/g.png")} style={{ width: 40, height: 40, resizeMode: "contain", elevation: 5 }}></Image>
                            ) : (
                                // <Ionicons name="send" size={28} color="gray" />
                                <Image source={require("../assets/g1.png")} style={{ width: 40, height: 40, resizeMode: "contain", elevation: 5 }}></Image>
                            ),
                    }}
                />

                <Tab.Screen
                    name="Wallet"
                    component={Wallet}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Wallet",
                        tabBarLabelStyle: { color: "#fff", fontSize: 12, marginBottom: 5 },
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                // <Ionicons name="send" size={28} color="#41b7d1" />
                                <Image source={require("../assets/m.png")} style={{ width: 40, height: 40, resizeMode: "contain", elevation: 5 }}></Image>

                            ) : (
                                // <Ionicons name="send" size={28} color="gray" />
                                <Image source={require("../assets/m1.png")} style={{ width: 40, height: 40, resizeMode: "contain", elevation: 5 }}></Image>
                            ),
                    }}
                />
                {/* <Tab.Screen
                name="Login"
                component={Login}
                options={{

                    tabBarLabel: "Login",
                    tabBarLabelStyle: { color: "#f01c8b", fontSize: 15, marginBottom: 5 },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            // <AntDesign name="login" size={28} color="#41b7d1" />
                            <FontAwesome name="sign-in" size={28} color="#fff" />

                        ) : (
                            // <AntDesign name="login" size={28} color="gray" />
                            <FontAwesome name="sign-in" size={28} color="gray" />
                        ),
                }}
            /> */}
            </Tab.Navigator>
        )
    }



    function StackNavigator() {
        return (
            <Stack.Navigator >


                {/* {
                    isLoginValue ? <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                        :
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />

                } */}

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ProfileScreen"
                    component={Profile}
                    options={{ headerShown: false }}
                />


                <Stack.Screen
                    name="QuizScreen"
                    component={QuizScreen}

                    options={{ headerShown: false, tabBarVisible: false, tabBarStyle: { display: 'none' }, tabBarVisible: false }}
                />


                <Stack.Screen
                    name="Result"
                    component={Result}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Contact"
                    component={Contact}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="deregister"
                    component={Deregister}
                    options={{ headerShown: false }}
                />




                <Stack.Screen
                    name="terms"
                    component={Terms}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="privacy"
                    component={Privacy}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Faq"
                    component={Faq}
                    options={{ headerShown: false }}
                />


                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
                     <Stack.Screen
                    name="Forgot"
                    component={ForgotPassword}
                    options={{ headerShown: false }}
                />




            </Stack.Navigator>
        );
    }



    return (
        <NavigationContainer>



            <Stack.Navigator >
            {/* <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        /> */}



                {
                    userInfo ? <Stack.Screen
                        name="Home"
                        component={BottomNavigator}
                        options={{ headerShown: false }}
                    />
                        :
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />

                }

                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ProfileScreen"
                    component={Profile}
                    options={{ headerShown: false }}
                />


                <Stack.Screen
                    name="QuizScreen"
                    component={QuizScreen}

                    options={{ headerShown: false, tabBarVisible: false, tabBarStyle: { display: 'none' }, tabBarVisible: false }}
                />


                <Stack.Screen
                    name="Result"
                    component={Result}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Contact"
                    component={Contact}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="deregister"
                    component={Deregister}
                    options={{ headerShown: false }}
                />




                <Stack.Screen
                    name="terms"
                    component={Terms}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="privacy"
                    component={Privacy}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Faq"
                    component={Faq}
                    options={{ headerShown: false }}
                />


                <Stack.Screen
                    name="Quiz"
                    component={Quiz}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MiningKey"
                    component={MiningKey}
                    options={{ headerShown: false, tabBarVisible: false, tabBarStyle: { display: 'none' }, tabBarVisible: false }}

                />
                      <Stack.Screen
                    name="Forgot"
                    component={ForgotPassword}
                    options={{ headerShown: false, tabBarVisible: false, tabBarStyle: { display: 'none' }, tabBarVisible: false }}
                />


            </Stack.Navigator>



        </NavigationContainer>

    );
};

const styles = StyleSheet.create({
    drawerItem: {
        padding: 10,

    },
    submenu: {
        borderColor: "#ffe4c4",
        borderTopWidth: 0.2,
    },
    submenuItem: {
        padding: 10,

    },
});

export default AppNavigator;