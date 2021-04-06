import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { globalstyle } from '../assets/styles/gloabalstyles';

export default function Makenotes({ updatenotes }) {

    var [text, settext] = React.useState('');
    var chngtext = (e) => {
        // console.log(e)
        settext(e)
    }
    return (
        <View style={styles.makenotes}>
            <TextInput ref={input => { this.text1 = input }} onChangeText={chngtext} style={styles.TextInp}></TextInput>
            <TouchableOpacity onPress={() => { updatenotes(text), this.text1.clear() }} style={styles.Topa} ><Text style={{ fontFamily: globalstyle.font.fontFamily, textAlign: 'center', fontSize: 16, marginTop: 5, }}>Add</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    makenotes: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        borderWidth: 0,
        borderBottomWidth: 2,
        borderRadius: 1,
        borderColor: 'grey',
        paddingBottom: 5
    }, TextInp: {
        borderColor: 'gray',
        // borderBottomWidth: 1,
        color: 'black',
        width: '75%',
        marginTop: 20,
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 5,
        fontSize: 16,
        // fontFamily: globalstyle.font.fontFamily,
    }, Topa: {
        backgroundColor: globalstyle.color2.backgroundColor,
        width: 70,
        height: 32,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 4,
        fontFamily: globalstyle.font.fontFamily,
    }
})