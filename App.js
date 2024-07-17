
import { StyleSheet, Text, View, StatusBar,ActivityIndicator } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { AuthProvider } from './AuthContext';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '././redux/store';
import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync();
export default function App() {
  useEffect(() => {
 
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 3000);
  }, []);
  
  return (
    <View style={styles.container}>

<Provider store={store}>
        <PersistGate persistor={persistor}>
      <AuthProvider>    
          <AppNavigator></AppNavigator>
      </AuthProvider>

 
      
      <StatusBar
        backgroundColor='white'
        barStyle={"dark-content"}
        translucent={false}
      />
</PersistGate>
</Provider>
   
    
    
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