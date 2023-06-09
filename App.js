import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';


import { navOptions } from './src/functions/navOptions'
import Main from './src/Main';


import store from './src/store'

import { langs } from './src/screens/languages'
import { themes } from './src/screens/themes'
import { alphs } from './src/screens/alphs';

function App() {
  const [isReady, setIsReady] = useState(false)
  global.langs = langs
  global.themes = themes
  global.alphs = alphs
  const [themeN, SetThemeN] = useState(0)
  const [langN, SetLangN] = useState(0)
  const [alphN, SetAlphN] = useState(0)
  const Stack = createStackNavigator();
  const options = navOptions

  const getAllSetting = async () => {
    console.log('async start')
    try {
      await AsyncStorage.multiGet(
        ['langNumber', 'alphNumber', 'themNumber', 'non'],
        (err, result) => {
          result[0][1] ? SetLangN(result[0][1]) : false
          result[1][1] ? SetAlphN(result[1][1]) : false
          result[2][1] ? SetThemeN(result[2][1]) : false
        }
      );
    } catch (error) {
      console.log(error)
    }
  }
  if (!isReady) {
    return (
      <AppLoading
        startAsync={getAllSetting}
        onFinish={() => {
          console.log('hello')
          setIsReady(true)
        }}
        onError={console.warn}
      />
    )
  }
  return (
    <SafeAreaProvider >
      <Provider store={store}>
        <Main
          themeN={themeN}
          langN={langN}
          alphN={alphN}
        ></Main>
      </Provider>
    </SafeAreaProvider>
  )


}


export default App;
/*
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
*/