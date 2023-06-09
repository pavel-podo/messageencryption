import React, { useState, useEffect } from 'react';

import { ScrollView, StyleSheet, Text, View, StatusBar, Linking, TouchableOpacity, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const LinkBlock = (props) => {
    const { url, caption, color, linkColor } = props
    const goHttp = () => {
        Linking.openURL(url)
    }
    return (
        <View style={{flexDirection:'row',alignItems:'center'}}> 
            <Text style={{ color: color }}>{caption}</Text>
            <TouchableOpacity
                onPress={goHttp}
            >
                <EvilIcons name="external-link" size={30} color={linkColor} />
            </TouchableOpacity>
        </View>
    )
}

export default function About() {
    useEffect(() => {
        console.log('')
    }, [])
    const themeI = useSelector((state) => state.themeReducer.themeNumber);
    const langI = useSelector((state) => state.intLangReducer.langNumber);
    const theme = themes[themeI]
    const lang = langs[langI]
    console.log(theme)
    console.log(lang)




    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.bg_color,
        }}>
            <ScrollView
                style={{ ...styles.wrapper, color: 'red' }}>
                <Text
                    style={{ color: theme.second_font_color }}>
                    {lang.description1}{'\n'}
                    {lang.description2}
                </Text>
                <View style = {{
                    marginVertical:10,
                    backgroundColor:theme.header_color,
                    height:1,
                    
                }}></View>
                <LinkBlock
                    linkColor={theme.third_font_color}
                    color={theme.second_font_color}
                    url='https://docs.expo.dev/'
                    caption='Created at React native Expo'
                >
                </LinkBlock>
                <LinkBlock
                    linkColor={theme.third_font_color}
                    color={theme.second_font_color}
                    url='https://dryicons.com/free-icons/encryption'
                    caption='Icon by Dryicons'
                >
                </LinkBlock>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: screen.width / 100 * 10,
        paddingVertical: screen.height / 100 * 2,

    },
    text: {
        color: 'red'
    },
    
})


