
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import StackNavigator from './navigation/stacknavigator';
import AppNavigator from './navigation/AppNavigator';
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen';
import { AuthProvider } from './AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignInWithGoogle from './Screens/SignInWithGoogle';
export default function App() {
  
  return (
    <View style={styles.container}>


      <AuthProvider>    
          <AppNavigator></AppNavigator>
      </AuthProvider>

 
      
      <StatusBar
        backgroundColor='white'
        barStyle={"dark-content"}
        translucent={false}
      />

   
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});


// 514aedf5-4621-458e-82fd-c24c446f3032