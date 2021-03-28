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
            <TextInput onChangeText={chngtext} style={styles.TextInp}></TextInput>
            <TouchableOpacity onPress={() => updatenotes(text)} style={styles.Topa} ><Text style={{ fontFamily: globalstyle.font.fontFamily, textAlign: 'center', fontSize: 16, color: 'black', marginTop: 5, }}>Add</Text></TouchableOpacity>
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
        borderBottomWidth: 2,
        borderColor: 'black',
        paddingBottom: 15
    }, TextInp: {
        borderColor: 'black',
        borderBottomWidth: 1,
        color: 'black',
        width: '75%',
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 5,
        fontSize: 16,
        fontFamily: globalstyle.font.fontFamily,
    }, Topa: {
        backgroundColor: '#ff9900',
        width: 70,
        height: 30,
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 4,
        fontFamily: globalstyle.font.fontFamily,
    }
})