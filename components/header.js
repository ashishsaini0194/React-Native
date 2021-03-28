import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalstyle } from '../assets/styles/gloabalstyles';

export default function Headcomp() {
    return (
        <View style={style.headcomp} ><Text style={style.textcomp}>Notesss Maker</Text></View>
    )
}

const style = StyleSheet.create({
    headcomp: {
        width: '100%',
        height: 50,
        backgroundColor: '#ff9900',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
    }, textcomp: {
        fontSize: 20,
        // marginTop: 35,
        fontFamily: globalstyle.font.fontFamily
    }
})