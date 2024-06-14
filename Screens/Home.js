import { View, Text, StyleSheet,Image, Dimensions,SafeAreaView, StatusBar,Platform, ImageBackground, ScrollView,Alert,BackHandler } from 'react-native'
import React, {useEffect} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Section1 from '../Components/Section1';
import Section8 from '../Components/Section8';
import Section10 from '../Components/Section10';


// 1 f01c8b
// 2 d11780
// 3 41b7d1

const width = Dimensions.get('screen').width
const Home = ({navigation}) => {


  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'FIEDEX',
        'Are you sure you want to close the app ?',
        [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false }
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    
    <SafeAreaView
    style={{
      paddinTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      flex: 1,
      backgroundColor: "white",
      // marginTop:5
    }}
  >
   


<ScrollView>

  

    <Section1 navigation = {navigation}></Section1>
    <Section8 navigation = {navigation}></Section8>
    <Section10 navigation={navigation}></Section10>
   
    </ScrollView>
  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginTop:30,
      alignItems:"center",
      width:Dimensions.get('screen').width,
      flexDirection:"row",
      justifyContent:"space-around"
    },
    logo:{
       height:80,
       width:100,
       resizeMode:"contain",
       margin:2
    },
    profileCont:{
        width:50,
        height:50,
        backgroundColor:"#cac51d",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center"
    }
  });

export default Home