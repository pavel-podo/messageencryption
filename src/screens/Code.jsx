import React, { useState } from 'react';
import {
    Clipboard,
    StyleSheet,
    ToastAndroid,
    Text,
    View,
    ScrollView,
    Button,
    TouchableOpacity,
    TextInput,
    Share,
    StatusBar
} from 'react-native';

import { useSelector } from "react-redux";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
//import { PLText,DEText,FRText,RUText,ENText,ESText,ITText,IEText,PTText,SEText,DKNOText,UAText } from './test'

import { ChekingFinishText } from './ChekingFinishText'

export default function Code(prop) {




    const themeI = useSelector((state) => state.themeReducer.themeNumber);
    const langI = useSelector((state) => state.intLangReducer.langNumber);
    const alphI = useSelector((state) => state.alphabetReducer.alphabetNumber);
    const theme = themes[themeI];
    const lang = langs[langI];
    const alph = alphs[alphI].text;



    const codeStatus = prop.route.params.status
    const [showKey, setShowKey] = useState(false);
    const [showCodeButton, setShowCodeButton] = useState(true);
    const [finishText, setFinishText] = useState('')
    const [chekText, setChekText] = useState('')
    const [startText, setStartText] = useState('')
    const [key, setKeyText] = useState('')
    const [showCopyBtn, setShowCopyBtn] = useState(false)
    const test = (text) => {
        for (let i = 0; i < text.length; i++) {
            console.log('go')
            let qcodeText = text[i].codeText(key, alph)
            let qdecodeT = qcodeText.deCodeText(key, alph)

            if (qdecodeT === text[i]) {
                console.log(`step N${i} test is true`)
            }
            else {
                console.log(`step N${i} test is not true`)
                console.log(text[i])
                console.log(qdecodeT)
            }


        }
    }
    // test(UAText)
    const showPaswordTougle = () => {
        showKey ? setShowKey(false) : setShowKey(true);
    };
    const onChangeText = (text) => {
        setStartText(text)
        setFinishText('')
    }
    const onChangeKey = (text) => {
        text.length < 3 ? setShowCodeButton(true) : setShowCodeButton(false)
        setKeyText(text)
        setFinishText('')
        setChekText('')

    }

    const onPressCode = () => {
        let badSymbol = startText.changeSymbols(alph)
        if (badSymbol) {
            console.log(badSymbol)
            ToastAndroid.show(
                `${lang.invalidEextCharacter}  
${badSymbol}
# - ${badSymbol.charCodeAt(0)}, 
${lang.checkValidCharacters}`, ToastAndroid.LONG);
            setChekText('')
            return
        }
        badSymbol = key.changeSymbols(alph)
        if (badSymbol) {
            ToastAndroid.show(
                `${lang.invalidKeyCharacter}  
${badSymbol} 
# - ${badSymbol.charCodeAt(0)}, 
${lang.checkValidCharacters}`, ToastAndroid.LONG);
            setChekText('')
            return
        }
        if (startText.length > 500) {
            ToastAndroid.show(lang.longText, ToastAndroid.SHORT);
            setChekText('')

            return
        }
        if (key.length > 500) {
            ToastAndroid.show(lang.longText, ToastAndroid.SHORT);
            setChekText('')
            return
        }
        if (codeStatus == 'Code') {
            let codeText = startText
            let deCodeText = ''
            for (let i = 0; i < 5; i++) {
                codeText = codeText.codeText(key, alph)
                console.log(i)
            }
            deCodeText = codeText
            for (let i = 0; i < 5; i++) {
                deCodeText = deCodeText.deCodeText(key, alph)
                console.log(i)
            }
            setFinishText(codeText)
            setChekText(deCodeText)
        }
        if (codeStatus == 'DeCode') {
            let decodeT = startText
            for (let i = 0; i < 5; i++) {
                decodeT = decodeT.deCodeText(key, alph)
                console.log(i)
            }
            setFinishText(decodeT)
        }

    }
    const onPressCopy = () => {
        Clipboard.setString(finishText);
        ToastAndroid.show(lang.textCopied, ToastAndroid.SHORT);

    }
    const onPressShare = async () => {
        try {
            const result = await Share.share({
                message: finishText,
            });
        } catch (error) {
            console.log("share error", error);
        }
    };


    const clearAll = () => {

        setStartText('')
        setKeyText('')
        setFinishText('')
        setChekText('')
        setShowCodeButton(true)
    }
    const pasteText = async () => {
        const text = await Clipboard.getString();
        setStartText(text)
        setFinishText('')
    };

console.log(theme)
    return (
       
       
        <View style={{ ...styles.container, backgroundColor: theme.bg_color }}>
            <ScrollView style={styles.scroll} keyboardShouldPersistTaps="handled">
                <View style={{ ...styles.mainWrapper, backgroundColor: theme.bg_color }}>
                    <View style={{ ...styles.inputWrapper, backgroundColor: theme.second_color }}>
                        <TextInput
                            style={{
                                ...styles.input,
                                backgroundColor: theme.second_color,
                                color: theme.second_font_color
                            }}
                            numberOfLines={4}
                            multiline
                            value={startText}
                            placeholder={lang.enterText}
                            onChangeText={(text) => onChangeText(text)}
                        ></TextInput>
                        <View style={styles.inputIconWrapper}>
                            <TouchableOpacity
                                style={styles.touchInputIcon}
                                onPress={() => pasteText()}
                            >
                                <FontAwesome5
                                    name="paste"
                                    size={24}
                                    color={theme.second_font_color}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ ...styles.inputWrapper, backgroundColor: theme.second_color }}>
                        <TextInput
                            secureTextEntry={showKey ? false : true}
                            value={key}
                            style={{ ...styles.input, backgroundColor: theme.second_color, color: theme.second_font_color }}
                            placeholder={lang.enterKey}
                            autoCapitalize={"none"}
                            onChangeText={(text) => onChangeKey(text)}
                        ></TextInput>
                        <View style={styles.inputIconWrapper}>
                            <TouchableOpacity
                                style={styles.touchInputIcon}
                                onPress={() => showPaswordTougle()}
                            >
                                {showKey ? (
                                    <Octicons name="eye" size={24} color={theme.second_font_color} />
                                ) : (
                                    <Octicons
                                        name="eye-closed"
                                        size={24}
                                        color={theme.second_font_color}
                                    />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.btnWrapper}>
                        {codeStatus == 'Code' ? (
                            <View style={styles.btn}>
                                <Button
                                    title={lang.encryptBtn}
                                    onPress={onPressCode}
                                    disabled={showCodeButton}
                                    color={theme.btn_color}
                                ></Button>
                            </View>
                        ) : false}
                        {codeStatus == 'DeCode' ? (
                            <View style={styles.btn}>
                                <Button
                                    title={lang.decryptBtn}
                                    disabled={showCodeButton}
                                    onPress={onPressCode}
                                    color={theme.btn_color}
                                ></Button>
                            </View>
                        ) : false}
                        <View style={styles.btn}>
                            <Button
                                title={lang.clear}
                                onPress={clearAll}
                                color={theme.btn_color}
                            ></Button>
                        </View>
                    </View>
                    <View style={{ ...styles.inputWrapper, backgroundColor: theme.second_color }}>
                        <TextInput
                            style={{ ...styles.input, backgroundColor: theme.second_color }}
                            numberOfLines={4}
                            multiline
                            placeholder={lang.result}
                            editable={false}
                            value={finishText}
                        ></TextInput>
                        <View style={styles.inputIconWrapper}>
                            <TouchableOpacity
                                disabled={!finishText ? true : false}
                                style={styles.touchInputIcon}
                                onPress={() => onPressShare()}
                            >

                                <FontAwesome5
                                    name="share-alt"
                                    size={24}
                                    color={!finishText ? 'lightgrey' : theme.second_font_color}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.btnWrapper}>
                        <View style={styles.btn}>
                            <Button
                                title={lang.copy}
                                disabled={!finishText ? true : false}
                                onPress={onPressCopy}
                                color={theme.btn_color}
                            ></Button>

                        </View>

                    </View>
                    {codeStatus == 'Code' ?
                        <ChekingFinishText decodingText={chekText}
                        ></ChekingFinishText>
                        : false}


                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: theme.bg_color,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },

    scroll: {
        width: "100%",
    },
    mainWrapper: {
        alignItems: "center",
        backgroundColor: "#fff",
        width: "100%",
        //backgroundColor: theme.bg_color,
    },
    input: {
        width: "85%",

        //backgroundColor: theme.second_color
        //width: "100%",
    },
    inputWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 7,
        borderRadius: 8,
        // backgroundColor: theme.second_color,
        width: "80%",
        marginVertical: 8,
        paddingHorizontal: 5,
    },
    inputIconWrapper: {
        width: "14%",
        height: "100%",
    },
    touchInputIcon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    btnWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
        marginVertical: 8,
    },
    btn: {
        width: "45%",
    },

    text: {
        color: "white",
    },
    modalMessage: {
        backgroundColor: "#d3d3d3cc",
        padding: 10,
        borderRadius: 5,
        position: "absolute",
        bottom: 50,
    },
    errorBlock: {
        backgroundColor: "#BF3030cc",
        position: "absolute",
        padding: 10,
        borderRadius: 8,
        zIndex: 200,
    },
});