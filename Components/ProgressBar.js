import React from "react";
import { View, Animated, StyleSheet } from "react-native";
import data from "../data"; 

const ProgressBar = ({ progress,index }) => {


  console.log("progress",progress,index)
//quiz data file imported to get the total number of questions
  const allQuestions = data;

  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  }); //length of progress is initialized with 0 and will go to total length of ques
  return (
    <View style={styles.progressBarContainer}>
      <Animated.View
        style={[
          {
            height: 5,
            borderRadius: 5,
            backgroundColor: "#fe11fe" + "90",
          },
          {
            width: progressAnim,
          },
        ]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "60%",
    height: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
  }
});
export default ProgressBar;