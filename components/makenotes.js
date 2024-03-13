import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Text, Keyboard } from 'react-native';
import { globalstyle } from '../assets/styles/gloabalstyles';
import { useTheme } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Makenotes({ updatenotes, functoclose }) {

    var [text, settext] = React.useState('');
    var chngtext = (e) => {
        // console.log(e)
        settext(e)
    }
    var theme = useTheme().colors;
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={{ ...styles.makenotes, backgroundColor: theme.background, borderColor: theme.border }}>
                <View style={{ ...styles.aboveView, borderColor: theme.border, backgroundColor: theme.headercolor }}>
                    <Entypo name="cross" onPress={functoclose} size={30} color={theme.text} />
                    <TouchableOpacity onPress={() => { updatenotes(text), text.clear(), functoclose() }} style={{ ...styles.Topa, backgroundColor: theme.background }} ><Text style={{ fontFamily: globalstyle.font.fontFamily, textAlign: 'center', fontSize: 17, marginTop: 5, color: theme.text }}>Add</Text></TouchableOpacity>
                </View>
                <View style={{ flex: 1, }}>
                    <ScrollView style={{ margin: 20 }}>
                        <TextInput autoFocus={true} ref={input => { text = input }} placeholder=' Type here..' placeholderTextColor={theme.text} multiline={true} onChangeText={chngtext} style={{ ...styles.TextInp, color: theme.text, backgroundColor: theme.background }}></TextInput>
                    </ScrollView>
                    <StatusBar backgroundColor='black' />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    makenotes: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

        // alignItems: 'center',
        paddingBottom: 5
    }, aboveView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 70,
        borderBottomWidth: 2,
        borderRadius: 3,
        borderColor: 'grey',
    }, TextInp: {
        borderColor: 'gray',
        // borderBottomWidth: 1,
        color: 'black',
        width: '100%',
        // height: '100%',
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 0,
        // marginLeft: 10,
        // marginRight: 5,
        fontSize: 16,
        height: 'auto',
        flex: 1,
        textAlign: 'justify',
        textAlignVertical: 'top',
        // fontFamily: globalstyle.font.fontFamily,
    }, Topa: {
        backgroundColor: globalstyle.color2.backgroundColor,
        width: 100,
        height: 35,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 6,
        fontFamily: globalstyle.font.fontFamily,
    }
})