import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home'
import Anote from '../components/singleNote'

var Stack = createStackNavigator()


export default function Navs() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Homefirst">
                <Stack.Screen options={{ title: 'Home' }} name="Homefirst" component={Home} />
                <Stack.Screen options={{ title: 'Details' }} name="Details" component={Anote} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}