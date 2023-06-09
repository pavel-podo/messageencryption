import React from 'react';
import { StatusBar, Text, View, Button } from 'react-native';
import { useSelector } from "react-redux";


export default function Header(prop) {


  const name = prop.route.name
  const status = prop.route.params.status
  const themeI = useSelector((state) => state.themeReducer.themeNumber);
  const langI = useSelector((state) => state.intLangReducer.langNumber);
  const theme = themes[themeI]
  const lang = langs[langI]
  let title = ''
  switch (name) {
    case 'Code':
      if (status == 'Code') {
        title = lang.encryption
      }
      if (status == 'DeCode') {
        title = lang.decryption
      }
      break;
    case 'Settings':
      title = lang.settings
      break;
    case 'About':
      title = lang.about
      break;
  }
  if (prop.route.name)


    return (
      <View>
         <StatusBar
    backgroundColor={theme.header_color}
    ></StatusBar>
        <Text style=
          {{
            color: theme.font_color,
            fontSize: 22,
          }}>
          {title}</Text>

      </View>
    )
}
