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
        <View style={{ flex: 1 }}>
            <View style={{ position: 'absolute', bottom: 0, justifyContent: 'flex-end', width: '100%' }}>
                <TouchableOpacity onPress={() => debouncingFunc(onPress, 1000)}
                    style={{ ...style.buttonContainer }}
                >
                    <Text style={{
                        fontFamily: globalstyle.font.fontFamily,
                        textAlign: 'center',
                        fontSize: 17,
                        marginTop: 5,
                        color: 'white',
                        ...style.buttonText
                    }}>
                        Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const style = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

