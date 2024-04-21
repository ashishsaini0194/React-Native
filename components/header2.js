import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Header2({ navigation, saveUpdatedData }) {
    var theme = useTheme().colors;
    return (
        <View style={{ ...style.head1, backgroundColor: theme.headercolor }} >
            <Icon onPress={() => { navigation.navigate('Homefirst'), saveUpdatedData() }} name="arrowleft" size={25} style={{ ...style.icon, color: theme.text }} />
            <Text style={{ ...style.text1, color: theme.text }}>Details</Text>
        </View>
    )
}
const style = StyleSheet.create({
    head1: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center',
        // marginTop:70,
        height: 90,
        width: '100%'
    }, icon: {
        marginTop: 45,
        marginHorizontal: 20,
    }, text1: {
        fontSize: 22,
        marginTop: 43,
        marginLeft: 10
    }
})