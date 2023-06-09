import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './screens/Start';
import Code from './screens/Code';
import Decode from './screens/Decode';
import About from './screens/About';
import Settings from './screens/Settings';
import Header from "./screens/Header";
import HeaderBackBtn from "./components/HeaderBackBtn";
import HeaderSettingBtn from "./components/HeaderSettingBtn";
import { useDispatch, useSelector } from "react-redux";
import {themeNumberActuion} from './store/actions/themeNumberActuion'
import {alphabetNumberActuion} from './store/actions/alphabetNumberActuion'
import {langNumberActuion} from './store/actions/langNumberActuion'

export default function Main(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(themeNumberActuion(Number(props.themeN)))
    dispatch(alphabetNumberActuion(Number(props.alphN)))
    dispatch(langNumberActuion(Number(props.langN)))
  }, [])
  const Stack = createStackNavigator();
  const themeI = useSelector((state) => state.themeReducer.themeNumber);
 


  const navOptions = ({ navigation, route }) => {
    return ({
      headerTitle: () => (
        <Header
          nav={navigation}
          route={route}
        ></Header>),
      headerRight: () => (
        <HeaderSettingBtn
          nav={navigation}
          route={route}
        />
      ),
      headerLeft: () => (
        <HeaderBackBtn
          nav={navigation}
          route={route}
        ></HeaderBackBtn>
      ),
      headerStyle: {
        backgroundColor: themes[themeI].header_color,
      }
    })
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" options={{ headerShown: false }} component={Start} />
        <Stack.Screen
          options={navOptions}
          name="Code" component={Code} />
        <Stack.Screen options={navOptions} name="Decode" component={Decode} />
        <Stack.Screen options={navOptions} name="About" component={About} />
        <Stack.Screen options={navOptions} name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



//<a href='https://dryicons.com/free-icons/encryption-'> Icon by Dryicons </a>