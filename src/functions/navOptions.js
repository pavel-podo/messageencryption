import React from "react";
import {  useSelector } from "react-redux";

import Header from "../screens/Header";
import HeaderBackBtn from "../components/HeaderBackBtn";
import HeaderSettingBtn from "../components/HeaderSettingBtn";

export  const navOptions  = ({navigation, route}) =>  {
  const themeI = useSelector((state) => state.themeReducer.themeNumber);



  return({
    headerTitle: () => (<Header
      nav={navigation}
      route={route}
    ></Header>),
    headerRight: () => (
      <HeaderSettingBtn
      nav={navigation}
      route={route}
      />
    ),
    headerLeft: () => (
      <HeaderBackBtn
      nav={navigation}
      route={route}
      ></HeaderBackBtn>
    ),
    headerStyle: {
      backgroundColor:route.params.bg,
    },
  })}