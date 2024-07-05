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
import axios from "axios";
const height = Dimensions.get("screen").height;
const width = Dimensions.get('screen').width;

const Quiz = ({ navigation }) => {
  // const allQuestions = data;

    const [allQuestions,setAllQuestions]= useState([])

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



  const getAllQuestions = async () => {
    try {
      const res = await axios.get("https://fiedex.com/fiedex/quizQuestions");
      const data = res.data;
      let newArr = [];
      console.log("51", data);

      for (let i = 0; i < data.length; i++) {
        newArr.push({
          question: data[i].question,
          options: [data[i].option_1, data[i].option_2, data[i].option_3, data[i].option_4],
          correct_option: data[i].answer
        });
      }


      setAllQuestions(newArr);
      
      console.log("newArr", newArr);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAllQuestions();
  }, []);


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
      }, 60000); // 10 seconds
    } else {
      clearTimeout(timerRef.current);
    }
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [currentQuestionIndex, stopTimer, allQuestions]);

  // Function to show correct answer when time is up
  const showCorrectAnswer = async () => {
    if (allQuestions.length > 0) {
      let correctOption = allQuestions[currentQuestionIndex]["correct_option"];
      setCorrectOption(correctOption);
      setIsOptionsDisabled(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
      handleNext();
    }
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
      setCurrentOptionSelected(selectedOption + 1);
      setCorrectOption(correct_option);
      setIsOptionsDisabled(true);
      setStopTimer(true);
      console.log("168",selectedOption + 1, correct_option)
     
      if (selectedOption + 1 == correct_option) {
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





  const renderOptions = () => {

    return (
      <ScrollView>
        <View style={{ marginTop: 40 }}>
          {
          allQuestions[currentQuestionIndex]?.options.map((option, index) => (
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
                onPress={() => validateAnswer(index)}
                key={index}
                style={[
                  { ...styles.optionsText },
                  {
                    padding: 20,
                    borderRadius: 30,
                    backgroundColor:  index + 1 == correctOption ?"#058c42" : isOptionsDisabled
                      ? index + 1 == correctOption
                        ? "#058c42"
                        : index + 1 == currentOptionSelected
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
                  ? index + 1 == correctOption
                    ? <Ionicons name="happy" size={24} color="black" style={{ marginLeft: 20, color: "#ffb700" }} />
                    : index + 1 == currentOptionSelected
                      ? <Ionicons name="sad" size={24} color="black" style={{ marginLeft: 20, color: "#ffb700" }} />
                      : null
                  : null
                }
              </TouchableOpacity>
            </Animated.View>
          ))
          }
        </View>
      </ScrollView>
    );

  };

  return (
    <View style={{height:Dimensions.get("screen").height,backgroundColor:"black"}}>

<ImageBackground source={require("../assets/B5.png")} style={{ height: Dimensions.get('screen').height, opacity: 1 }}>
      {allQuestions.length!=0 &&
        <ScrollView>
        <View style={{ width: width, alignItems: "center", marginTop: 20 }}>
          <CountdownCircleTimer
            key={timerKey} // Add key to reset the timer
            isPlaying={!stopTimer}
            duration={60}
            size={50}
            strokeWidth={4}
            colors={['#f01c8b', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[40, 30, 20, 0]}
            onComplete={async () => {
              await showCorrectAnswer();
              return [false, 0];
            }}
          >
            {({ remainingTime }) => <Text style={{color:"#fff"}}>{remainingTime}</Text>}
          </CountdownCircleTimer>
        </View>
        <View style={styles.container}>
          <ImageBackground source={require("../assets/quizbg.jpg")} imageStyle={{borderRadius:40,borderWidth:2,borderColor:"#fff"}} style={styles.subContainer}>

            <ProgressBar progress={progress} index={currentQuestionIndex} />
            <Questions index={currentQuestionIndex} question={allQuestions[currentQuestionIndex]?.question} />
          </ImageBackground>
               {/* Question */}



<Text
      allowFontScaling = {false}
        style={{
          color: "#fff",
          fontSize: 18,
          textAlign: "center",
          fontWeight:"bold",
          marginTop:20
        }}
      >
       {currentQuestionIndex + 1}. {allQuestions[currentQuestionIndex]?.question}
      </Text>

 
           
          {renderOptions()}
               </View>

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
                <AntDesign name="doubleright" size={18} color="#fff" />
              </Text>
            </TouchableOpacity>

       

   
          </View>
      
      </ScrollView>
      
      }
    
    </ImageBackground>
    </View>

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
    // borderRadius: 40,
    // backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // borderColor: "#fff",
    // borderWidth: 2,
    opacity: 0.8,
    height:100
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderWidth:2,
    borderColor:"#fff"
  },
  btnNextText: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 1.1,
  },
});

export default Quiz;











