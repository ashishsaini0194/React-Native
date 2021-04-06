import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { globalstyle } from '../assets/styles/gloabalstyles';
import Home from '../components/home'
import Anote from '../components/singleNote'
import Headcomp from '../components/header'

var Stack = createStackNavigator()


export default function Navs() {
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: globalstyle.color2.backgroundColor } }} initialRouteName="Homefirst">
            <Stack.Screen options={({ navigation }) => { return { title: 'Home', headerTitle: () => <Headcomp navigation={navigation} /> } }} name="Homefirst" component={Home} />
            <Stack.Screen options={{ title: 'Details' }} name="Details" component={Anote} />
        </Stack.Navigator>
    )
}