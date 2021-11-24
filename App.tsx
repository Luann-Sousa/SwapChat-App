/* eslint-disable camelcase */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import { StyleSheet, View } from 'react-native';

import { HomeScreen } from './src/screens/Home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [robotoFontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!robotoFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar translucent />
        <HomeScreen />
      </View>
    </>
  );
}
