import React from 'react';
import { View, TextInput, Text, Dimensions } from 'react-native';

const PasswordStrengthIndicator = ({ password }) => {
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasLength = password.length >= 8 ? true : false

  console.log(password.length, hasLength)

  const width = Dimensions.get('screen').width

  const allGreen = hasSpecialChar && hasUpperCase && hasNumber && hasLength && hasLowerCase;

  // If all criteria are met, return null to not render the indicator
  if (allGreen) {
    return null;
  }


  return (
    <View style={{ marginTop: 10, backgroundColor: "#90e0ef", padding: 20, borderRadius: 10, paddingBottom: 20, width: width * 0.85, opacity: 0.6 }}>

      <Text style={{ color: hasLength ? 'green' : 'red', fontWeight: 600, fontSize: 15 }}>
        {hasLength ? '✔ password length should be at least 8' : '❌ password length should be at least 8'}
      </Text>
      <Text style={{ color: hasSpecialChar ? 'green' : 'red', marginTop: 2, fontWeight: 600, fontSize: 15 }}>
        {hasSpecialChar ? '✔ at least 1 special character' : '❌ at least 1 special character'}
      </Text>
      <Text style={{ color: hasUpperCase ? 'green' : 'red', fontWeight: 600, fontSize: 15 }}>
        {hasUpperCase ? '✔ at least 1 uppercase character' : '❌ at least 1 uppercase character'}
      </Text>
      <Text style={{ color: hasLowerCase ? 'green' : 'red', fontWeight: 600, fontSize: 15 }}>
        {hasLowerCase ? '✔ at least 1 lowercase character' : '❌ at least 1 lowercase character'}
      </Text>
      <Text style={{ color: hasNumber ? 'green' : 'red', fontWeight: 600, fontSize: 15 }}>
        {hasNumber ? '✔ at least one digit (0-9)' : '❌ at least one digit (0-9)'}
      </Text>
    </View>
  );
};

export default PasswordStrengthIndicator;