import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '@react-navigation/native'
import { Header } from 'react-native/Libraries/NewAppScreen';
import Headcomp from './header';

export default function About() {
    var theme = useTheme().colors;
    return (


        <View style={{ ...styles.view1, backgroundColor: theme.background }} >
            {/* <View style={styles.header}>
                <Headcomp />
            </View> */}
            <Image style={styles.img1} source={require('../assets/Images/mighty2.jpg')} />
            <View style={{ ...styles.footer, backgroundColor: theme.headercolor }}><Text style={{ color: theme.text }}>Made By Ashish &copy; 2021</Text></View>
        </View>

    )
}

const styles = StyleSheet.create({
    view1: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }, img1: {
        borderRadius: 500,
        width: 250,
        height: 250
    }, footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }, header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 70,
    }
})