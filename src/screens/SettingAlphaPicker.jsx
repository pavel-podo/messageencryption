import React from "react";
import { StyleSheet, View, Text,AsyncStorage } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Picker } from '@react-native-picker/picker';

import { alphabetNumberActuion } from '../store/actions/alphabetNumberActuion'


export const SettingAlphaPicker = () => {
  const themeI = useSelector((state) => state.themeReducer.themeNumber);
  const alphI = useSelector((state) => state.alphabetReducer.alphabetNumber);
  const langI = useSelector((state) => state.intLangReducer.langNumber);
  const theme = themes[themeI]
  const alph = alphs[alphI]
  const lang = langs[langI]
  const setLockalAlphNumber  = async (n) => {
    try {
        await AsyncStorage.setItem(
            'alphNumber',
            String(n),
        );
    } catch (error) {
        console.log(error)
    }

}




  const dispatch = useDispatch();
  const changeLang = (value, index) => {
    dispatch(alphabetNumberActuion(index))
    setLockalAlphNumber(index)
  }

  return (
    <View style={{ ...styles.settingItem, borderColor: theme.second_color }}>
     <View style ={styles.picker}>
        <Text style={{ ...styles.settingTitle, color: theme.second_font_color }}>{lang.messageLanguage}</Text>
        <Picker
          selectedValue={alphI}
          style={{ height: 50, width: 150, color: theme.second_font_color }}
          onValueChange={(itemValue, itemIndex) => changeLang(itemValue, itemIndex)}
          mode='dropdown'
        >
          {
            alphs.map((item, index) => (
              <Picker.Item
                label={item.title}
                key={item.title}
                value={index}
                style={{ height: 50, width: 150 }}
              />
            ))
          }
        </Picker>
      </View>
      <View style = {styles.validСharsBlock}>
        <Text style = {{...styles.validСharsTitle,color:theme.second_font_color}}>
          {lang.allowedCharacters}
        </Text>
        <Text
        style = {{...styles.validСhars,backgroundColor:theme.second_color}}>{alph.text}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  settingItem: {
    alignItems: 'center',
    borderColor: 'red',
    borderBottomWidth: 1,
    width: '100%',
    paddingBottom: 7,
    paddingTop: 7,
    justifyContent: 'space-between'
  },
  settingWrapper: {
    width: '100%',
  },
  settingTitle: {
    fontSize: 16,
    marginLeft: 20,
    color: 'red',
  },
  dropBox: {
    top: 20,
    right: 0,
    position: 'absolute',
    width: 200,
    height: 400,
    zIndex: 0,
  },
  picker:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  validСharsBlock:{
    alignItems:'center',

  },
  validСhars:{
    textAlign:'center',
    //width:'30%',
    marginHorizontal:20,
    padding:10,
    borderRadius:8,
  },
  validСharsTitle:{
    marginBottom:12
  }

});