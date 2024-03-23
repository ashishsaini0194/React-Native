import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import Navs from './stacknavigation'
import AboutNavs from './stacknavigation2'
import { globalstyle } from '../assets/styles/gloabalstyles';
import { TextComponent, useColorScheme, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Anote from '../components/singleNote';
import {
    MemoryRouter,
    NativeRouter, Route, Routes
} from "react-router-native";
import Home from '../components/home';
// import { Home } from '../components/home';


// var Drawer = createDrawerNavigator()

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

    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <Home />,
    //         // loader: rootLoader,
    //         children: [
    //             {
    //                 path: "Details",
    //                 element: <Anote />,
    //                 // loader: teamLoader,
    //             },
    //         ],
    //     },
    //     // {
    //     //     path: "/About",
    //     //     element: <AboutNavs />,
    //     //     // loader: rootLoader,
    //     //     // children: [
    //     //     //     {
    //     //     //         path: "team",
    //     //     //         element: <Team />,
    //     //     //         loader: teamLoader,
    //     //     //     },
    //     //     // ],
    //     // },
    // ]);

    // return <RouterProvider router={router} />
    // return <Text>hshe</Text>
    return (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<AboutNavs />} />
            </Routes>
        </MemoryRouter>
    )


    // return (
    //     // <NavigationContainer theme={scheme === 'dark' ? MyTheme.moon : MyTheme.sun} >
    //     //     {/* <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ff9900' } }} initialRouteName="Home">
    //     //         <Drawer.Screen initialParams={{ 'ashish': chngglobthem }} options={{ headerShown: false }} name="Home" component={Navs} />
    //     //         <Drawer.Screen initialParams={{ 'ashish': chngglobthem }} options={{ headerShown: false }} name="About" component={AboutNavs} />
    //     //     </Drawer.Navigator> */}
    //     // </NavigationContainer>




    // )
}
