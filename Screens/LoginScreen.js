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
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker'
import { Fontisto, Entypo } from '@expo/vector-icons';
import { useAuth } from "../AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from 'react-redux';
import { setUser } from "../redux/actions/userActions";
import axios from "axios";

const height = Dimensions.get("screen").height;
const width = Dimensions.get('screen').width;

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [hidePass, setHidePass] = useState(true);
  const [mobile, setMobile] = useState("");
  const { login } = useAuth();
  const [password, setPassword] = useState("");
  const [error, setErr] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [user, setUser] = useState("");
  const [flag, setFlag] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  useEffect(() => {
    validateForm();
  }, [password, email]);

  const validateForm = async () => {
    let errors = {};

    if (email == '') {
      errors.email = "Enter email";
    }

    if (password == '') {
      errors.password = "Enter password";
    }

    setErr(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const verifyUser = async () => {
    let errors = {};

    const res = await axios.get("https://fiedex.com/fiedex/verify", {
      params: {
        email: email,
        password: password
      }
    }).then(response => {
      console.log("131", response.data);
      if (response.data) {
        dispatch({ type: 'SET_USER_INFO', payload: response.data });
        login();
      }
    }).catch(error => {
      console.error(error);
      if (error.response && error.response.status === 404) {
        errors.message = 'You have entered wrong credentials!';
      }
      errors.message = 'You have entered wrong credentials!';
    });

    setErr(errors);
  };

  const handleSubmit = async () => {
    console.log(isFormValid, "formvalid");

    if (isFormValid) {
      await verifyUser();
    } else {
      setFlag(true);
    }
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <ImageBackground source={require("../assets/bg9.png")} style={{ width: width, height: height, alignItems: "center", paddingTop: 40 }}>
        <ScrollView>
          <View style={{ marginTop: 10, width: width, alignItems: "center" }}>
            <Image style={styles.img} source={require("../assets/logo.png")} />
          </View>

          <KeyboardAvoidingView>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.heading}>Login to your Account</Text>
              {error.message && <Text style={{ color: "red", marginTop: 10 }}>{error.message}</Text>}
            </View>

            <View style={{ width: width, alignItems: "center" }}>
              <View style={{ marginTop: 20 }}>
                <View style={[styles.inputBoxCont, isEmailFocused && styles.inputBoxFocused]}>
                  <MaterialIcons
                    style={{ marginLeft: 8 }}
                    name="email"
                    size={24}
                    color="black"
                  />
                  <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
                    style={{
                      color: "black",
                      marginVertical: 10,
                      width: 300,
                      fontSize: password ? 16 : 16,
                    }}
                    placeholder="Enter your email"
                  />
                </View>
                {error.email && flag && <Text style={{ color: "red" }}>{error.email}</Text>}
              </View>

              <View>
                <View style={[styles.inputBoxCont, isPasswordFocused && styles.inputBoxFocused]}>
                  {
                    hidePass ? <Entypo name="eye-with-line" onPress={() => setHidePass(!hidePass)} size={24} color="black" style={{ marginLeft: 8 }} />
                      : <Entypo name="eye" onPress={() => setHidePass(!hidePass)} size={24} color="black" style={{ marginLeft: 8 }} />
                  }
                  <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
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
                {error.password && flag && <Text style={{ color: "red" }}>{error.password}</Text>}
              </View>

              <Pressable style={styles.forgotCont} onPress={()=>navigation.navigate("Forgot")}>
                <Text style={{ color: "#f01c8b", fontWeight: "900" }}>
                  Forgot Password?
                </Text>
              </Pressable>

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
                <Text style={{ textAlign: "center", color: "black", fontSize: 16, fontWeight: 800 }}>
                  Don't have an account? Sign Up
                </Text>
              </TouchableOpacity>
            </View>
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
    resizeMode: "contain"
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
  inputBoxFocused: {
    borderColor: "#121212",
    borderWidth: 2,
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
