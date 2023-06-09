import React from "react";
import { StyleSheet, View, Text, AsyncStorage } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Picker } from '@react-native-picker/picker';



import { themeNumberActuion } from '../store/actions/themeNumberActuion'


export const SettingTemePicker = (prop) => {
  const { navigation } = prop

  const themeI = useSelector((state) => state.themeReducer.themeNumber);
  const langI = useSelector((state) => state.intLangReducer.langNumber);
  const theme = themes[themeI]
  const lang = langs[langI]
  const setLockalThemNumber = async (n) => {
    try {
      await AsyncStorage.setItem(
        'themNumber',
        String(n),
      );
    } catch (error) {
      console.log(error)
    }
  }
  const dispatch = useDispatch();
  const changeLang = (value, index) => {
    dispatch(themeNumberActuion(index))
    setLockalThemNumber(index)
    navigation.setOptions({
      headerStyle: {
        backgroundColor: themes[value].header_color
      },
    })
  }
  return (

    <View style={{ ...styles.settingItem, borderColor: theme.second_color }}>
      <View>
        <Text style={{ ...styles.settingTitle, color: theme.second_font_color }}>{lang.themeColors}</Text>
      </View>
      <View>
        <Picker
          selectedValue={themeI}
          style={{ height: 50, width: 150, color: theme.second_font_color }}
          onValueChange={(itemValue, itemIndex) => changeLang(itemValue, itemIndex)}
          mode='dropdown'
        >
          {
            themes.map((item, index) =>{ 
              console.log('index',index)
              return (
              <Picker.Item
                label={item.title}
                key={item.title}
                value={index} 
                style={{ height: 50, width: 150 }}
              />)}
            )
          }
        </Picker>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  settingItem: {
    alignItems: 'center',
    //orderColor: curentTheme.second_color,
    borderColor: 'red',
    borderBottomWidth: 1,
    width: '100%',
    paddingBottom: 7,
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  settingWrapper: {
    width: '100%',
  },
  settingTitle: {
    fontSize: 16,
    marginLeft: 20,
    //color:curentTheme.second_font_color,
    color: 'red',
  },
  dropBox: {
    top: 20,
    right: 0,
    position: 'absolute',
    width: 200,
    height: 400,
    backgroundColor: 'red',
    zIndex: 0,
  },
});