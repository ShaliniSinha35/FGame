import React, { useRef, useEffect,useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing, Share, Linking,Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Make sure to import AntDesign from the correct package

const PopupButton = () => {
  const animation = useRef(new Animated.Value(1)).current; 
  const [referralLink, setReferralLink] = useState('https://expo.dev/artifacts/eas/hQ7QeYzY9jMDot6HFS6Hnx.apk');

  const shareReferralLink = async (platform) => {
    try {
      const message = `Check this out: ${referralLink}`;
      let url;

      if (platform === 'whatsapp') {
        url = `whatsapp://send?text=${encodeURIComponent(message)}`;
      } else if (platform === 'facebook') {
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`;
      }

      if (url) {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
          await Linking.openURL(url);
        } else {
          Alert.alert('Error', `Cannot open URL: ${url}. Make sure the app is installed.`);
        }
      } else {
        await Share.share({ message });
      }
    } catch (error) {
      Alert.alert('Error', 'Could not share referral link');
    }
  };
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
            borderWidth:2,
            borderColor:"#fff"
          }}
          onPress={() => shareReferralLink('generic')}
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
