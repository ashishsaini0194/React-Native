import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { globalstyle } from '../assets/styles/gloabalstyles';
import Home from '../components/home'
import Anote from '../components/singleNote'
import Headcomp from '../components/header'
import { useTheme } from '@react-navigation/native'

var Stack = createStackNavigator()


export default function Navs() {
    var theme = useTheme()
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: theme.colors.headercolor } }} initialRouteName="Homefirst">
            <Stack.Screen options={({ navigation}) => { return { title: 'Home', headerTitle: () => <Headcomp navigation={navigation} /> } }} name="Homefirst" component={Home} />
            <Stack.Screen options={{ title: 'Details' }} name="Details" component={Anote} />
        </Stack.Navigator>
    )
}