import React from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useTheme, usetheme } from '@react-navigation/native'
import Clipboard from 'expo-clipboard';

export default function Anote({ navigation }) {
    var data = navigation.getState().routes[1].params.a
    console.log(data);
    var theme = useTheme()
    // var copytoclip = () => {
    //     Clipboard.setString(data); console.log('copied');
    // }
    return (

        <View>
            <ScrollView>
                <TextInput editable={true} multiline={true} style={{ ...styles.text1, color: theme.colors.text }} > {data}</TextInput>
            </ScrollView>
        </View>

    )
}

var styles = StyleSheet.create({
    text1: {
        fontSize: 16,
        padding: 20,
        height: '100%',
        flex: 1,
    }
})