import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";

import { codeFunctions } from '../functions/code';
import { langs } from './languages'
import { themes } from './themes'


export default function Start({ route, navigation }) {
    useEffect(() => {
        codeFunctions()
    }, [])

    const themeI = useSelector((state) => state.themeReducer.themeNumber);
    const langI = useSelector((state) => state.intLangReducer.langNumber);
    const theme = themes[themeI];
    const lang = langs[langI];

    return (
        <>
            <StatusBar
                backgroundColor={theme.header_color}
            ></StatusBar>
            <View style={{ ...styles.container, backgroundColor: theme.bg_color }}>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={{ ...styles.btn, backgroundColor: theme.btn_color }}
                        onPress={() => navigation.navigate('Code', {
                            status: 'Code',
                            bg: theme.header_color
                        })}>
                        <View style={styles.icon}>
                            <Entypo name="arrow-with-circle-right" size={24} color={theme.font_color} />
                        </View>
                        <Text style={{ ...styles.text, color: theme.font_color }}>{lang.encrypt}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...styles.btn, backgroundColor: theme.btn_color }}
                        onPress={() => navigation.navigate('Code', {
                            status: 'DeCode',
                            bg: theme.header_color
                        })}>
                        <View style={styles.icon}>
                            <Entypo name="arrow-with-circle-left" size={24} color={theme.font_color} />
                        </View>
                        <Text style={{ ...styles.text, color: theme.font_color }}>{lang.decrypt}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...styles.btn, backgroundColor: theme.btn_color }}
                        onPress={() => navigation.navigate('Settings', {
                            bg: theme.header_color
                        })}>
                        <View style={styles.icon}>
                            <Feather name="settings" size={24} color={theme.font_color} />
                        </View>
                        <Text style={{ ...styles.text, color: theme.font_color }}>{lang.settings}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...styles.btn, backgroundColor: theme.btn_color }}
                        onPress={() => navigation.navigate('About', {
                            bg: theme.header_color
                        })}>
                        <View style={styles.icon}>
                            <AntDesign name="exclamationcircleo" size={24} color={theme.font_color} />
                        </View>
                        <Text style={{ ...styles.text, color: theme.font_color }}>{lang.about} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        marginVertical: 8,
        marginHorizontal: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        width: '81%',
        textAlign: 'center'
    },
    buttonWrapper: {
        width: "100%",
    },
    icon: {
        width: '18%',
        alignItems: 'center',
    }
})