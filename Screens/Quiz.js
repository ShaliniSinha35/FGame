import React, { useState, useEffect } from "react";
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
import { useFocusEffect } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Quiz = ({ navigation }) => {
  const allQuestions = data;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(new Animated.Value(1));
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(3); // Initial countdown value (in seconds)




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
 
    let count = 3; 
    const intervalIds = [];

  
    for (let i = 0; i <= 3; i++) {
    
      const intervalId = setInterval(() => {
        count -= 1; 
        setTimer(count);

      
        if (count === 0) {
          clearInterval(intervalId);
          intervalIds.forEach(clearInterval);
        }
      }, 1000);

      intervalIds.push(intervalId);
    }

  
    return () => {
      intervalIds.forEach(clearInterval); 
    };
  }, []);

  useEffect(()=>{
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
  },[])

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
  };

  
  const validateAnswer = (selectedOption, navigation) => {
    if (isOptionsDisabled == false) {
      let correct_option = allQuestions[currentQuestionIndex]["correct_option"];

      setCurrentOptionSelected(selectedOption);
      setCorrectOption(correct_option);
      setIsOptionsDisabled(true);
      if (selectedOption == correct_option) {
        setScore(score + 1);
      }
      else{
        Vibration.vibrate(500);
      }
    }
  };
  const handleNext = (navigation) => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      setCurrentQuestionIndex(0);
      setScore(0);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      navigation.navigate("Result", { score: score });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
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

  const renderOptions = (navigation) => {
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
                    outputRange: [(150 / 4) * (index + 10), 0], // 0 : 150, 0.5 : 75, 1 : 0
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity
              onPress={() => validateAnswer(option, navigation)}
              key={index}
              style={[
                { ...styles.optionsText },
                {

                  padding:20,
                  borderRadius:30,
                  backgroundColor: isOptionsDisabled
                    ? option == correctOption
                      ? "#058c42"
                      : option == currentOptionSelected
                      ? "#780116" //red
                      : "#cfcdcc" //gray
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
               {index == 0 ? 'A. ' : index == 1 ? 'B. ' : index== 2 ? 'C. ': index==3 ?'D. ': null} {option}

             
              </Text>
              {
                 isOptionsDisabled
                 ? option == correctOption
                   ?         <Ionicons name="happy" size={24} color="black" style={{marginLeft:20,color:"#ffb700"}}  />
                   : option == currentOptionSelected
                   ?              <Ionicons name="sad" size={24} color="black" style={{marginLeft:20,color:"#ffb700"}}  />

                   : null
                 : null
              }
      
              {/* <AntDesign name="checkcircle" size={24} color="black" style={{marginLeft:20,color:"#f01c8b"}}  /> */}
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
      </ScrollView>
    );
  };

  
  return (

       
       <ImageBackground source={require("../assets/mjk.png")} style={{height:Dimensions.get('screen').height,opacity:1}}>
    <ScrollView >
       {/* <Text style={{textAlign:"center",fontSize:25,fontWeight:800,marginTop:40}}> QUIZ </Text> */}
       <View style={styles.container}>
  
        <View style={styles.subContainer}>
          <ProgressBar progress={progress} index={currentQuestionIndex} />

          <Questions
            index={currentQuestionIndex}
            question={allQuestions[currentQuestionIndex]?.question}
          />
        </View>
        {renderOptions(navigation)}


        <View style={{ alignItems:"center",marginTop:20 }}>

<TouchableOpacity
  style={[
    { ...styles.btnNext },
    {
      backgroundColor: !currentOptionSelected ? "#ffa6c1" : "#f01c8b",
    },
  ]}
  disabled={!currentOptionSelected}
  onPress={() => handleNext(navigation)}
>
  <Text allowFontScaling={false} style={styles.btnNextText}>NEXT 
  
  <AntDesign name="doubleright" size={22} color="#fff" />
  </Text>
</TouchableOpacity>
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
    marginTop: 25,
    marginVertical: 10,
    padding: 15,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderColor:"#3c1642",
    borderWidth:2,
    opacity:0.8
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
    flexDirection:"row"
  },
  btnNext: {
    borderRadius: 30,
    width: Dimensions.get('screen').width * 0.5,
    backgroundColor: "#ffffff",
    padding:20,
    alignItems:"center"
  },
  btnNextText: {
    color: "#fff",
    fontSize: 20,
    letterSpacing: 1.1,
  },
});
export default Quiz;
