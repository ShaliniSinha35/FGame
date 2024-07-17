import React, { useState, useEffect ,useRef} from "react";
import {
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  BackHandler,
  Alert,
  Button,

} from "react-native";
import { Vibration } from 'react-native';
import miningQuestion from "../miningQuestion";
import { AntDesign,MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MiningQuestions } from "../Components/Miningquestions";
import { useAuth } from "../AuthContext";
import CustomAlert from "../Components/CustomAlert";
import FailureAlert from "../Components/FailureAlert";
// import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';
import Dialog from 'react-native-alert-dialog';
import { useFocusEffect } from '@react-navigation/native';
const height = Dimensions.get("screen").height;
const width = Dimensions.get('screen').width;

const MiningKey = ({ navigation }) => {
  const allQuestions = miningQuestion;
  const {key,setKey} = useAuth()

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(new Animated.Value(1));
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [score, setScore] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const [nextTimerKey, setNextTimerKey] = useState(0);
  const timerRef = useRef(null);
  const [count,setCount]= useState(10)

  const [visible, setVisible] = useState(false);
  const [isFailure, setFailure] = useState(false);
  const [randomIndex,setRandomIndex] = useState(null)


  
  useEffect(()=>{
   setRandomIndex(Math.floor(Math.random() * 5))
  },[])

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setStopTimer(false);
  }, [key]);




  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        showExitAlert();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );


  const showExitAlert = () => {
   navigation.navigate("Mining")
  };




  const validateAnswer = (selectedOption) => {
    if (!isOptionsDisabled) {
      let correct_option = allQuestions[randomIndex]["correct_option"];
      setCurrentOptionSelected(selectedOption);
      setCorrectOption(correct_option);
      setIsOptionsDisabled(true);
      setStopTimer(true);
      if (selectedOption == correct_option) {


        setVisible(true);
       
      } 
      
    
      if(selectedOption !== correct_option){
        setFailure(true)

    
      }

    }
  };

  const handleStartMining = () => {
    setKey(true);
    setVisible(false);
    navigation.navigate('Mining');
  };
  const handleFailure = () => {
    setKey(false);
    setFailure(false);
    navigation.navigate('Mining');
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
  };



 

  const renderOptions = () => {
    return (
      <ScrollView>
        <View style={{ marginTop: 40 }}>
          {allQuestions[randomIndex]?.options.map((option, index) => (
            <Animated.View
              key={index}
              style={{
                opacity: fadeAnim,
                transform: [
                  {
                    translateY: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [(150 / 4) * (index + 10), 0],
                    }),
                  },
                ],
              }}
            >
              <TouchableOpacity
                onPress={() => validateAnswer(option)}
                key={index}
                style={[
                  { ...styles.optionsText },
                  {
                    padding: 20,
                    borderRadius: 30,
                    backgroundColor:  option == correctOption ?"#058c42" : isOptionsDisabled
                      ? option == correctOption
                        ? "#058c42"
                        : option == currentOptionSelected
                        ? "#780116"
                        : "#cfcdcc"
                      : "#3c1642",
                  },
                ]}
              >
                <Text
                  allowFontScaling={false}
                  style={{
                    fontSize: 16,
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  {index == 0 ? 'A. ' : index == 1 ? 'B. ' : index == 2 ? 'C. ' : index == 3 ? 'D. ' : null} {option}
                </Text>
                {isOptionsDisabled
                  ? option == correctOption
                    ? <Ionicons name="happy" size={24} color="black" style={{ marginLeft: 20, color: "#ffb700" }} />
                    : option == currentOptionSelected
                      ? <Ionicons name="sad" size={24} color="black" style={{ marginLeft: 20, color: "#ffb700" }} />
                      : null
                  : null
                }
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <ImageBackground source={require("../assets/B5.jpg")} style={{ height: Dimensions.get('screen').height, opacity: 1 }}>
      <ScrollView>
    
        <View style={styles.container}>
          <View style={styles.subContainer}>
           
            <MiningQuestions index={randomIndex} question={allQuestions[randomIndex]?.question} />
          </View>
          {renderOptions()}
        
        </View>


        <CustomAlert
        isVisible={visible}
        onClose={() => setVisible(false)}
        onConfirm={handleStartMining}
      />

<FailureAlert
        isVisible={isFailure}
        onClose={() => setFailure(false)}
        onConfirm={handleFailure}
      />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "relative",
  },
  subContainer: {
    marginTop: 35,
    marginVertical: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 40,
    backgroundColor: "#7f0475",
    alignItems: "center",
    // shadowColor: "#171717",
    // shadowOffset: { width: -6, height: 6 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    borderColor: "#fff",
    borderWidth: 2,
    // opacity: 0.8
  },
  optionsText: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: "row",
    borderColor:"#be95c4",
    borderWidth:2,
  },
  btnNext: {
    borderRadius: 30,
    width: Dimensions.get('screen').width * 0.5,
    backgroundColor: "#ffffff",
    padding: 20,
    alignItems: "center"
  },
  btnNextText: {
    color: "#fff",
    fontSize: 20,
    letterSpacing: 1.1,
  },
});

export default MiningKey;










