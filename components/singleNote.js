import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Anote({ navigation }) {
    console.log(navigation.getState().routes[1].params.a);
    return (
        <View>
            <Text style={styles.text1} > {navigation.getState().routes[1].params.a}</Text>
        </View>
    )
}

var styles = StyleSheet.create({
    text1: {
        fontSize: 16,
        padding: 20
    }
})