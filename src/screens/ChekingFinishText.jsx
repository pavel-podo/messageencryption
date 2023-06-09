import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";




export const ChekingFinishText = (props) => {

  const themeI = useSelector((state) => state.themeReducer.themeNumber );
  const langI = useSelector((state) => state.intLangReducer.langNumber);
  const theme = themes[themeI];
  const lang = langs[langI];


    return (
    <View style = {{...styles.messageBox,backgroundColor: theme.bg_color,}}
    >
      <Text style={{ color: theme.third_font_color }}>{lang.textCheck} </Text>
      <Text style={{ 
        backgroundColor: theme.bg_color,
        color: theme.second_font_color
         }}>
        {props.decodingText}
      </Text>
    </View>
  );
};
const styles =  StyleSheet.create({
    messageBox:{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        borderRadius: 8,
        width: "80%",
        marginVertical: 5,
        paddingHorizontal: 5,
        flexDirection: "column",
        alignItems: "flex-start",
  }})