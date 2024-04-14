import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Navs from './stacknavigation'
import AboutNavs from './stacknavigation2'
import { globalstyle } from '../assets/styles/gloabalstyles';
import { TextComponent, useColorScheme, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth0, Auth0Provider } from 'react-native-auth0';

import Anote from '../components/singleNote';
import {
    MemoryRouter,
    NativeRouter, Route, Routes
} from "react-router-native";
import Home from '../components/home';
import Login from '../components/Login';
// import { Home } from '../components/home';


var Drawer = createDrawerNavigator()

var MyTheme = {
    sun: {
        "colors": {
            "background": 'white',
            "border": "black",
            "card": 'white',
            "primary": 'black',
            "text": 'black',
            'headercolor': '#b3ffff',
            'lightback': '#F5F5F5'
        }
    },
    moon: {
        "colors": {
            "background": "black",
            "card": 'black',
            "primary": globalstyle.color2.backgroundColor,
            "text": "white",
            'border': 'gray',
            'headercolor': '#00472d',
            'lightback': '#383838'
        }
    }
};

var setData = async (e) => {
    // console.log(e);
    await AsyncStorage.setItem('theme', JSON.stringify({ 'theme': e }))
    // console.log('theme saved');
}

var glbl;
export var chngglobthem = (e) => {
    glbl(e)
    setData(e)
}



export default function Dooon() {

    var getData = async () => {
        try {
            var d1 = await AsyncStorage.getItem('theme')
            d1 = JSON.parse(d1)
            // console.log(d1.theme);
            setscheme(d1.theme)
        } catch (e) {

        }
    }
    getData()

    var [scheme, setscheme] = React.useState('light')
    // console.log(scheme);
    glbl = setscheme;

    // return (
    //     <MemoryRouter>
    //         <Routes>
    //             <Route path="/" element={<Home />} />
    //             <Route path="/About" element={<AboutNavs />} />
    //         </Routes>
    //     </MemoryRouter>
    // )

    const { user } = useAuth0();
    console.log({ user })
    return (
        <NavigationContainer theme={scheme === 'dark' ? MyTheme.moon : MyTheme.sun} >
            <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ff9900' } }} initialRouteName={user ? 'Home' : "Login"}>
                <Drawer.Screen initialParams={{ 'ashish': chngglobthem }} options={{ headerShown: false }} name="Login" component={Login} />
                <Drawer.Screen initialParams={{ 'ashish': chngglobthem }} options={{ headerShown: false }} name="Home" component={Navs} />
                <Drawer.Screen initialParams={{ 'ashish': chngglobthem }} options={{ headerShown: false }} name="About" component={AboutNavs} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
