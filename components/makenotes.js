import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Text, Keyboard } from 'react-native';
import { globalstyle } from '../assets/styles/gloabalstyles';
import { useTheme } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';

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
                    <TouchableOpacity onPress={() => { updatenotes(text), text1.clear(), functoclose() }} style={{ ...styles.Topa, backgroundColor: theme.background }} ><Text style={{ fontFamily: globalstyle.font.fontFamily, textAlign: 'center', fontSize: 16, marginTop: 3, color: theme.text }}>Add</Text></TouchableOpacity>
                </View>
                <ScrollView>
                    <TextInput ref={input => { text1 = input }}  placeholder=' Type here..' placeholderTextColor={theme.text} multiline={true} onChangeText={chngtext} style={{ ...styles.TextInp, color: theme.text, backgroundColor: theme.background }}></TextInput>
                </ScrollView>
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
        height: 50,
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
        width: 70,
        height: 28,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 4,
        fontFamily: globalstyle.font.fontFamily,
    }
})