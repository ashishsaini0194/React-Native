import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '@react-navigation/native'
import Logout from './Logout';
import { useAuth0 } from 'react-native-auth0';

export default function About({ navigation }) {
    const { user } = useAuth0();
    var theme = useTheme().colors;
    return (


        <View style={{ ...styles.view1, backgroundColor: theme.background }} >
            <Image style={styles.img1} source={require('../assets/Images/mighty2.jpg')} />

            <View style={{ ...styles.footer, backgroundColor: theme.headercolor }}>
                <Text style={{ color: theme.text, marginLeft: 25 }}>Made By Ashish &copy; 2021</Text>

                <Logout navigation={navigation} user={user} />
            </View>
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
        // left: 10
        // alignItems: 'center'
    }, header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 70,
    }
})