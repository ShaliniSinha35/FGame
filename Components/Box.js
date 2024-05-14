import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const Box = () => {
  const [percentageFilled] = useState(new Animated.Value(0)); // Initialize percentage filled to 0%

  useEffect(() => {
    const fillPercentage = () => {
      Animated.timing(percentageFilled, {
        toValue: 20, // Fill 20% of background color
        duration: 1000, // Animation duration
        useNativeDriver: false, // Required for backgroundColor animation
      }).start();
    };

    fillPercentage(); // Initial fill
    // Schedule filling percentage every 5 minutes
    const interval = setInterval(fillPercentage, 5 * 60 * 1000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, []);

  return (
  
      <Animated.View
        style={[
          styles.fill,
          {
            backgroundColor: 'blue', // Background color of the fill
            width: percentageFilled.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '20%'],
            }), // Width based on percentage filled
          },
        ]}
      />
   
  );
};

const styles = StyleSheet.create({

  fill: {
    height: '100%', // Fill the entire height of the container
  },
});

export default Box;
