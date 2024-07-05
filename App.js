
import { StyleSheet, Text, View, StatusBar,ActivityIndicator } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { AuthProvider } from './AuthContext';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '././redux/store';
export default function App() {
  // AsyncStorage.clear()
  
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