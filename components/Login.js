import React, { useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import { globalstyle } from '../assets/styles/gloabalstyles';
import { debouncingFunc } from './debouncingFunc';

function Login({ navigation }) {
    const { authorize, user } = useAuth0();

    console.log({ user })
    const navigateToHome = () => {
        navigation.navigate('Home')
    }
    useEffect(() => {
        if (user) {
            navigateToHome()
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
            {/* <Image style={style.img1} source={require('../assets/Images/logo.png')} /> */}
            <ImageBackground source={require('../assets/Images/splash.png')} resizeMode="cover" style={style.img1}>
                <Text
                    onPress={() =>
                        navigation.navigate('Home')}
                    style={{
                        ...style.WithoutLogin
                    }}>
                    Continue Without Login</Text>
                <View style={{ position: 'absolute', bottom: 0, justifyContent: 'flex-end', width: '100%' }}>
                    <TouchableOpacity onPress={() => debouncingFunc(onPress, 1000)}
                        style={{ ...style.buttonContainer }}
                    >
                        <Text style={{

                            ...style.buttonText
                        }}>
                            Sign In</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login

const style = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: globalstyle.font.fontFamily,
        textAlign: 'center',
        fontSize: 17,
        marginTop: 5,
    }, WithoutLogin: {
        fontSize: 16,
        // fontWeight: 'bold',
        // fontFamily: globalstyle.font.fontFamily,
        textAlign: 'center',
        color: 'white',
        fontStyle: 'italic',
        // marginTop: 150,
        fontWeight: 200,
        position: 'absolute',
        bottom: "8%",
        left: "30%"

    }, img1: {
        flex: 1,
        justifyContent: 'center',
    }
})

