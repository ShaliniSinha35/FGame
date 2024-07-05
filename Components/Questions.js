import React from "react";
import { View, StyleSheet, Text } from "react-native";
import data from "../data";

const Questions = ({ index, question }) => {
  // console.log(question)
  return (
    <View style={{}}>
      {/* Question Counter */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <Text
        allowFontScaling={false}
          style={{ color: "#fff", fontSize: 15, opacity: 1, marginRight: 2 ,fontWeight:"bold"}}
        >
          {index + 1}
        </Text>
        <Text allowFontScaling={false} style={{ color: "#fff", fontSize: 13, opacity: 1,fontWeight:"bold" }}>
          / {data.length}
        </Text>
      </View>

      {/* Question */}
      {/* <Text
      allowFontScaling = {false}
        style={{
          color: "#fff",
          fontSize: 18,
          textAlign: "center",
          fontWeight:1000
        }}
      >
       {index + 1}. {question}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Questions;