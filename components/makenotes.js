import React, { useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Text, Keyboard } from 'react-native';
import { globalstyle } from '../assets/styles/gloabalstyles';
import { useTheme } from '@react-navigation/native'
// import { Entypo } from '@expo/vector-icons';
// import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/AntDesign';
import { debouncingFunc } from './debouncingFunc';

export default function Makenotes({ updatenotes, functoclose }) {

    var [text, settext] = React.useState('');
    const textRef = useRef(null);

    var theme = useTheme().colors;
    console.log('makenotes.ts')
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={{ ...styles.makenotes, backgroundColor: theme.background, borderColor: theme.border }}>
                <View style={{ ...styles.aboveView, borderColor: theme.border, backgroundColor: theme.headercolor }}>
                    {/* <Entypo name="cross" onPress={functoclose} size={30} color={theme.text} /> */}
                    <Icon onPress={() => { functoclose() }} name="arrowleft" size={25} style={{ ...styles.icon, color: theme.text }} />
                    <TouchableOpacity onPress={() => { updatenotes(text), textRef.current.clear(), functoclose() }}
                        style={{ ...styles.Topa, backgroundColor: theme.background }} >
                        <Text style={{
                            fontFamily: globalstyle.font.fontFamily,
                            textAlign: 'center', fontSize: 17,
                            marginTop: 5,
                            color: theme.text
                        }}>
                            Add</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, }}>
                    <ScrollView style={{ margin: 20 }}>
                        <TextInput
                            autoFocus={true}
                            ref={textRef}
                            placeholder=' Type here..' placeholderTextColor={theme.text}
                            multiline={true}
                            onChangeText={(e) => debouncingFunc(() => settext(e), 700)}
                            style={{
                                ...styles.TextInp,
                                color: theme.text,
                                backgroundColor: theme.background
                            }}>

                        </TextInput>
                    </ScrollView>
                    {/* <StatusBar backgroundColor='black' /> */}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    makenotes: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

        // alignItems: 'center',
        paddingBottom: 5
    }, aboveView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 70,
        borderBottomWidth: 2,
        borderRadius: 3,
        borderColor: 'grey',
    }, TextInp: {
        borderColor: 'gray',
        // borderBottomWidth: 1,
        color: 'black',
        width: '100%',
        // height: '100%',
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 0,
        // marginLeft: 10,
        // marginRight: 5,
        fontSize: 16,
        height: 'auto',
        flex: 1,
        textAlign: 'justify',
        textAlignVertical: 'top',
        // fontFamily: globalstyle.font.fontFamily,
    }, Topa: {
        backgroundColor: globalstyle.color2.backgroundColor,
        width: 100,
        height: 35,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 6,
        fontFamily: globalstyle.font.fontFamily,
    }, icon: {
        position: 'absolute', left: 20
    }
})