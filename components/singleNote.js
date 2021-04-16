import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme, usetheme } from '@react-navigation/native'

export default function Anote({ navigation }) {
    console.log(navigation.getState().routes[1].params.a);
    var theme = useTheme()
    return (
        <View>
            <ScrollView>
                <Text style={{ ...styles.text1, color: theme.colors.text }} > {navigation.getState().routes[1].params.a}</Text>
            </ScrollView>
        </View>
    )
}

var styles = StyleSheet.create({
    text1: {
        fontSize: 16,
        padding: 20,
        height: 'auto',
    }
})