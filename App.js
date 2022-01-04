import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';

const fetchFonts = () => {
  Font.loadAsync({
    'Lato': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold' : require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light' : require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Black' : require('./assets/fonts/Lato-Black.ttf')
  })
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return(
      <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NativeBaseProvider bg="white">
      <MealsNavigator/>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
