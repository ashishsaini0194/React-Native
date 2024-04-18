import React from 'react'
import { useAuth0 } from 'react-native-auth0';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

function Logout({ navigation, user }) {
    const { clearSession } = useAuth0();
    var darkorlight = useTheme();

    const onPress = async () => {
        try {
            if (user) {
                await clearSession();
                navigation.navigate('Login')
            }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        // <TouchableOpacity style={{ ...styles.view, backgroundColor: theme.headercolor, color: theme.text }} onPress={onPress}>
        //     {/* <View style={{ backgroundColor: theme.headercolor, color: theme.text }} > */}
        //     <Text style={{ color: theme.text }}>Log Out</Text>
        //     {/* </View> */}
        // </TouchableOpacity>
        <Icon onPress={onPress} style={{ ...styles.icon, color: user ? darkorlight.colors.text : 'gray' }} name="log-out" size={24} />
    )
}

export default Logout

const styles = StyleSheet.create({
    icon: {

        position: "absolute",
        right: 25
    }
})