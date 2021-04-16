import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Navs from './stacknavigation'
import { globalstyle } from '../assets/styles/gloabalstyles';
import { useColorScheme } from 'react-native';

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

var glbl;
export var chngglobthem = (e)=>{
    glbl(e)
}


export default function Dooon() {
    var [scheme, setscheme] = React.useState('light')
    console.log(scheme);
    glbl = setscheme;


    return (
        <NavigationContainer theme={scheme === 'dark' ? MyTheme.moon : MyTheme.sun} >
            <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ff9900' }, headerShown: false }} initialRouteName="Home">
                <Drawer.Screen name="Home" component={Navs} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
