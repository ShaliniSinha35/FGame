import React from "react";
import { View, StyleSheet, Text } from "react-native";


 export const MiningQuestions = ({ index, question }) => {
  return (
    <View style={{}}>
      {/* Question Counter */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
    
       
      </View>

      {/* Question */}
      <Text
      allowFontScaling = {false}
        style={{
          color: "#333",
          fontSize: 18,
          textAlign: "center",
        }}
      >
        {question}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

