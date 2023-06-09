import React from "react";
import { StyleSheet, View, Text,AsyncStorage } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Picker } from '@react-native-picker/picker';



import { langNumberActuion } from '../store/actions/langNumberActuion'


export const SettingLangsPicker = () => {
  const themeI = useSelector((state) => state.themeReducer.themeNumber);
  const langI = useSelector((state) => state.intLangReducer.langNumber);
  const theme = themes[themeI]
  const lang = langs[langI]
  console.log('tttt',typeof themeI )
  const setLockalLangNumber  = async (n) => {
    try {
        await AsyncStorage.setItem(
            'langNumber',
            String(n),
        );
    } catch (error) {
        console.log(error)
    }

}

  const dispatch = useDispatch();
  const changeLang = (value, index) => {
    setLockalLangNumber(index)
    dispatch(langNumberActuion(index))
  }



  return (

    <View style={{...styles.settingItem,borderColor:theme.second_color}}>
        <View>
          <Text style={{...styles.settingTitle,color:theme.second_font_color}}>{lang.applicationLanguage}</Text>
        </View>
        <View>
          <Picker
            selectedValue={langI}
            style={{ height: 50, width: 150, color: theme.second_font_color }}
            onValueChange={(itemValue, itemIndex) => changeLang(itemValue, itemIndex)}
            mode='dropdown'
          > 
            {
              langs.map((item, index) => (
                <Picker.Item
                  label={item.title}
                  key={item.key}
                  value={index}
                  style={{ height: 50, width: 150 }}
                />
              ))
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