import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import { globalstyle } from '../assets/styles/gloabalstyles';
import { debouncingFunc } from './debouncingFunc';

function Login({ navigation }) {
    const { authorize, user } = useAuth0();

    console.log({ user })
    useEffect(() => {
        if (user) {
            navigation.navigate('Home')
        }
    }, [user])

    const onPress = async () => {
        try {
            await authorize({ scope: "openid email profile" });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={() => debouncingFunc(onPress, 1000)}
                style={{ ...style.loginBut }}
            >
                <Text style={{
                    fontFamily: globalstyle.font.fontFamily,
                    textAlign: 'center',
                    fontSize: 17,
                    marginTop: 5,
                    color: 'white'
                }}>
                    Add</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const style = StyleSheet.create({
    loginBut: {
        width: 100,
        height: 30,
        backgroundColor: 'green'
    }
})

