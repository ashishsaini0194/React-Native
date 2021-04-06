import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Navs from './stacknavigation'
import { globalstyle } from '../assets/styles/gloabalstyles';

var Drawer = createDrawerNavigator()

var MyTheme = {
    sun: {
        "colors": {
            // "background": "rgb(1, 1, 1)",
            // "border": "rgb(255, 255, 255)",
            "card": 'white',
            // "notification": "rgb(255, 69, 58)",
            "primary": 'black',
            // "text": globalstyle.color.backgroundColor,
        },
        "dark": false,
    },
    moon: {
        "colors": {
            // "background": "rgb(1, 1, 1)",
            // "border": "rgb(255, 255, 255)",
            "card": 'black',
            // "notification": "rgb(255, 69, 58)",
            "primary": globalstyle.color2.backgroundColor,
            // "text": "rgb(2, 2, 2)",
        },
        "dark": true,
    }
};


var outside;
var out1;
export var chngthm = () => {
    // console.log(MyTheme);
    if (out1.dark == false) {
        outside(MyTheme.moon)
    } else {
        outside(MyTheme.sun)
    }
}


export default function Dooon() {

    var [themeselct, Slctthm] = React.useState(MyTheme.sun)

    out1 = themeselct
    outside = Slctthm

    return (
        <NavigationContainer theme={themeselct} >
            <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ff9900' }, headerShown: false }} initialRouteName="Notes Maker">
                <Drawer.Screen name="Notes Maker" component={Navs} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
