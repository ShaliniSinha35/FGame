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
  Alert
} from "react-native";
import { Vibration } from 'react-native';
import data from "../data";
import ProgressBar from "../Components/ProgressBar";
import Questions from "../Components/Questions";
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const height = Dimensions.get("screen").height;
const width = Dimensions.get('screen').width;

const Quiz = ({ navigation }) => {
  const allQuestions = data;

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
    Alert.alert(
      'Exit Quiz',
      'Are you sure you want to quit the quiz?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Quit',
          onPress: () =>{
            setCurrentQuestionIndex(0);
            setScore(0);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            navigation.goBack()
          } , // Navigate back when user confirms exit
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setStopTimer(false);
  }, []);

  useEffect(() => {
    if (!stopTimer) {
      timerRef.current = setTimeout(async () => {
        await showCorrectAnswer();
      }, 60000); // 60 seconds
    } else {
      clearTimeout(timerRef.current);
    }
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [currentQuestionIndex, stopTimer]);
  
  // Function to show correct answer when time is up
  const showCorrectAnswer = async () => {
    let correctOption = allQuestions[currentQuestionIndex]["correct_option"];
    setCorrectOption(correctOption);
    setIsOptionsDisabled(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
    handleNext();
  };
  

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setStopTimer(false);
    setTimerKey(prevKey => prevKey + 1); // Reset timer
    setNextTimerKey(prevKey => prevKey + 1); // Reset timer
    setCount(10)
  
  };

  const validateAnswer = (selectedOption) => {
    if (!isOptionsDisabled) {
      let correct_option = allQuestions[currentQuestionIndex]["correct_option"];
      setCurrentOptionSelected(selectedOption);
      setCorrectOption(correct_option);
      setIsOptionsDisabled(true);
      setStopTimer(true);
      if (selectedOption == correct_option) {
        setScore(score + 1);
      } else {
        Vibration.vibrate(500);
      }

    }
  };

  const handleNext = () => {
    clearTimeout(timerRef.current); // Clear the timer
    if (currentQuestionIndex == allQuestions.length - 1) {
      setCurrentQuestionIndex(0);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
     console.log("123",score)
      navigation.navigate("Result", { score: score });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setStopTimer(false);
      setTimerKey(prevKey => prevKey + 1); // Reset timer
      setNextTimerKey(prevKey => prevKey + 1); // Reset timer
      setCount(10)

    }
    Animated.parallel([
      Animated.timing(progress, {
        toValue: currentQuestionIndex + 2,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1900,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };


  // useEffect(() => {
    
  //     let count = 10;
  //     const intervalId = setInterval(() => {
  //       count -= 1;
  //       setCount(count);
  //       if (count === 0) {
  //         clearInterval(intervalId);
  //         showCorrectAnswer();
  //       }
  //     }, 1000);

  //     return () => clearInterval(intervalId);
  


   
  // },[stopTimer]);


  const renderOptions = () => {
    return (
      <ScrollView>
        <View style={{ marginTop: 40 }}>
          {allQuestions[currentQuestionIndex]?.options.map((option, index) => (
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
    <ImageBackground source={require("../assets/mjk.png")} style={{ height: Dimensions.get('screen').height, opacity: 1 }}>
      <ScrollView>
        <View style={{ width: width, alignItems: "center", marginTop: 20 }}>
          <CountdownCircleTimer
            key={timerKey} // Add key to reset the timer
            isPlaying={!stopTimer}
            duration={60}
            size={50}
            strokeWidth={4}
            colors={['#3c1642', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[40, 30, 20, 0]}
            onComplete={() => {
              // Handle timer completion if necessary
            }}
          >
            {({ remainingTime }) => <Text>{remainingTime}</Text>}
          </CountdownCircleTimer>
        </View>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <ProgressBar progress={progress} index={currentQuestionIndex} />
            <Questions index={currentQuestionIndex} question={allQuestions[currentQuestionIndex]?.question} />
          </View>
          {renderOptions()}
          <View style={{ alignItems: "center", marginTop: 20 }}>
           

        

<TouchableOpacity
              style={[
                { ...styles.btnNext },
                {
                  backgroundColor: !currentOptionSelected ? "#ffa6c1" : "#f01c8b",
                },
              ]}
              disabled={!currentOptionSelected}
              onPress={handleNext}
            >
              <Text allowFontScaling={false} style={styles.btnNextText}>NEXT
                <AntDesign name="doubleright" size={22} color="#fff" />
              </Text>
            </TouchableOpacity>

            {/* {
              stopTimer ?       <TouchableOpacity
              style={[
                { ...styles.btnNext },
                {
                  backgroundColor:  "#ffa6c1",
                },
              ]}
           
          
            >
              <Text allowFontScaling={false} style={[styles.btnNextText,{fontSize:15}]}> Next {count} seconds
                <AntDesign name="doubleright" size={15} color="#fff" />
              </Text>
            </TouchableOpacity>:       <TouchableOpacity
              style={[
                { ...styles.btnNext },
                {
                  backgroundColor: !currentOptionSelected ? "#ffa6c1" : "#f01c8b",
                },
              ]}
              disabled={!currentOptionSelected}
              onPress={handleNext}
            >
              <Text allowFontScaling={false} style={styles.btnNextText}>NEXT
                <AntDesign name="doubleright" size={22} color="#fff" />
              </Text>
            </TouchableOpacity>
            } */}


   
          </View>
        </View>
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
    marginTop: 15,
    marginVertical: 10,
    padding: 10,
    borderRadius: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderColor: "#3c1642",
    borderWidth: 2,
    opacity: 0.8
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
    flexDirection: "row"
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

export default Quiz;




// when within 60 sec user not submit the answer then move to the next questions






