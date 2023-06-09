import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from "react-redux";


export default function HeaderSettingBtn(prop) {
    const {nav,route} = prop
    
    const themeI = useSelector((state) => state.themeReducer.themeNumber);
    const langI = useSelector((state) => state.intLangReducer.langNumber);
    const theme = themes[themeI]
    const lang = langs[langI]

    return (
        <View style = {{marginRight:15}}> 
        {
            route.name != 'Settings' ? (
                <TouchableOpacity onPress={() => nav.navigate('Settings',route.params)}>
                    <AntDesign name="setting" size={30} color={theme.font_color} />
                </TouchableOpacity>
            ) : false

        }
        </View>

    )
}
