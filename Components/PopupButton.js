import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Make sure to import AntDesign from the correct package

const PopupButton = () => {
  const animation = useRef(new Animated.Value(1)).current; // Initial scale value

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1.2, // Scale up to 20% larger
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1, // Return to original scale
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []); // Run animation on component mount

  return (
    <View style={{ alignItems: "center" }}>
      <Animated.View style={{ transform: [{ scale: animation }] }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#f01c8b",
            width: 180,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>
            Invite Partners <AntDesign name="doubleright" size={18} color="#fff" />
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default PopupButton;
