import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function HeaderBackBtn(prop) {
    const {nav,route} = prop
    return (
        <View style = {{marginLeft:15}}> 
            <TouchableOpacity onPress={() => nav.goBack()} >
                <Entypo name="arrow-with-circle-left" size={30} color={'white'} />
            </TouchableOpacity>
        </View>

    )
}
