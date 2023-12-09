import React, { useState, useEffect, useCallback } from 'react';
import { Provider } from 'react-redux'
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as SplashScreen from 'expo-splash-screen';
const Stack = createStackNavigator();


// import Main from './src/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './src/store'

import { langs } from './src/screens/languages'
import { themes } from './src/screens/themes'
import { alphs } from './src/screens/alphs';
//SplashScreen.preventAutoHideAsync();

function App() {
  const [isReady, setIsReady] = useState(false)
  global.langs = langs
  global.themes = themes
  global.alphs = alphs
  const [themeN, SetThemeN] = useState(0)
  const [langN, SetLangN] = useState(0)
  const [alphN, SetAlphN] = useState(0)


  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       await getAllSetting();

  //       await new Promise(resolve => setTimeout(resolve, 1000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {

  //       setIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);



  // const getAllSetting = async () => {
  //   console.log('async start')
  //   try {
  //     await AsyncStorage.multiGet(
  //       ['langNumber', 'alphNumber', 'themNumber', 'non'],
  //       (err, result) => {
  //         result[0][1] ? SetLangN(result[0][1]) : false
  //         result[1][1] ? SetAlphN(result[1][1]) : false
  //         result[2][1] ? SetThemeN(result[2][1]) : false
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error)
  //   } 
  // }


  // const onLayoutRootView = useCallback(async () => {

  //   if (isReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [isReady]);

  // if (!isReady) {
  //   return null;
  // }
  return (
    //   <SafeAreaProvider
    //   onLayout={onLayoutRootView} 
    //   >
    //     <Provider store={store}>
    //       <Main
    //         themeN={themeN}
    //         langN={langN}
    //         alphN={alphN}
    //       ></Main>
    //     </Provider>
    //   </SafeAreaProvider>
    < SafeAreaProvider
      style={{ flex: 1, backgroundColor: 'red' }}
    >
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen name="Start" options={{ headerShown: false }} component={Main} />
           
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>

  )


}
function Main(props) {
  return(
    <View
    style = {{flex:1,backgroundColor:'green'}}
    />
  )
}

export default App;















// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { Provider } from 'react-redux'
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import AppLoading from 'expo-app-loading';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// import Main from './src/Main';


// import store from './src/store'

// import { langs } from './src/screens/languages'
// import { themes } from './src/screens/themes'
// import { alphs } from './src/screens/alphs';

// function App() {
//   const [isReady, setIsReady] = useState(false)
//   global.langs = langs
//   global.themes = themes
//   global.alphs = alphs
//   const [themeN, SetThemeN] = useState(0)
//   const [langN, SetLangN] = useState(0)
//   const [alphN, SetAlphN] = useState(0)

//   const getAllSetting = async () => {
//     console.log('async start')
//     try {
//       await AsyncStorage.multiGet(
//         ['langNumber', 'alphNumber', 'themNumber', 'non'],
//         (err, result) => {
//           result[0][1] ? SetLangN(result[0][1]) : false
//           result[1][1] ? SetAlphN(result[1][1]) : false
//           result[2][1] ? SetThemeN(result[2][1]) : false
//         }
//       );
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   if (!isReady) {
//     return (
//       <AppLoading
//         startAsync={getAllSetting}
//         onFinish={() => {
//           console.log('hello')
//           setIsReady(true)
//         }}
//         onError={console.warn}
//       />
//     )
//   }
//   return (
//     <SafeAreaProvider >
//       <Provider store={store}>
//         <Main
//           themeN={themeN}
//           langN={langN}
//           alphN={alphN}
//         ></Main>
//       </Provider>
//     </SafeAreaProvider>
//   )


// }


// export default App;

