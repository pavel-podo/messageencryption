import React from 'react';
    
import {  View, StatusBar } from 'react-native';
import { useSelector } from "react-redux";



import { SettingLangsPicker } from './SettingLangsPicker'
import { SettingTemePicker } from './SettingThemePicker'
import { SettingAlphaPicker } from './SettingAlphaPicker'

/*
  themes theme themeI
  alphs alph alphI
  langs lang langI
  */

export default function Settings(prop) {
    const {navigation} = prop
    const themeI = useSelector((state) => state.themeReducer.themeNumber);
    const langI = useSelector((state) => state.intLangReducer.langNumber);
    const theme = themes[themeI]
    const lang = langs[langI]

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: theme.bg_color }}>
            <SettingLangsPicker></SettingLangsPicker>
            <SettingTemePicker navigation = {navigation} ></SettingTemePicker>
            <SettingAlphaPicker></SettingAlphaPicker>
        </View>
    )
}

