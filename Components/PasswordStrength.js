import React from 'react';
import { View, TextInput, Text, Dimensions } from 'react-native';

const PasswordStrengthIndicator = ({ password }) => {
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const width= Dimensions.get('screen').width

  const allGreen = hasSpecialChar && hasUpperCase && hasNumber;

  // If all criteria are met, return null to not render the indicator
  if (allGreen) {
    return null;
  }


  return (
    <View style={{ marginTop: 10,backgroundColor:"#3c1642",padding:20,borderRadius:10,paddingBottom:20,width:width * 0.85,opacity:1 }}>
      <Text style={{color:"white"}}>Password must:</Text>
      <Text style={{ color: hasSpecialChar ? 'green' : 'red',marginTop:2,fontWeight:600 }}>
        {hasSpecialChar ? 'Contain at least one special character' : 'Contain at least one special character (@,#,$,%,..)'}
      </Text>
      <Text style={{ color: hasUpperCase ? 'green' : 'red',fontWeight:600  }}>
        {hasUpperCase ? 'Contain at least one uppercase letter' : 'Contain at least one uppercase letter (A-Z)'}
      </Text>
      <Text style={{ color: hasNumber ? 'green' : 'red' ,fontWeight:600 }}>
        {hasNumber ? 'Contain at least one number' : 'Contain at least one number (0-9)'}
      </Text>
    </View>
  );
};

export default PasswordStrengthIndicator;