import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTheme } from '@react-navigation/native'
import Makenotes from './makenotes';

export default function InputButton({ updatenotes }) {
    var [visib, setVisib] = React.useState(false)
    var theme = useTheme().colors
    var functoclose = () => {
        setVisib(false)
    }
    console.log('working')
    return (
        <View style={{ width: '100%', height: "100%", backgroundColor: "red" }}>
            <View style={{ ...style.butHead, backgroundColor: theme.background, borderColor: theme.border }}>
                <AntDesign onPress={() => { setVisib(true) }} size={34} color="black" />
                {/* <Text style={{ ...style.plusIcon, color: theme.text }} onPress={() => { console.log('h33'); setVisib(true) }}  >plus Icon</Text> */}
            </View>
            <Modal animationType='slide' visible={visib}>
                <Makenotes updatenotes={updatenotes} functoclose={functoclose} />
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    butHead: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderBottomWidth: 0.1,
        borderRadius: 1,
        // borderColor: 'gray',
    }, plusIcon: {
        marginVertical: 10,
    }
})