import React from 'react'
import { View, TextInput, StyleSheet, Keyboard, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { useTheme } from '@react-navigation/native'
import Clipboard from 'expo-clipboard';
import Headcomp2 from '../components/header2'

export default function Anote({ navigation }) {
    var data = navigation.getState().routes[1].params.a;
    var key = navigation.getState().routes[1].params.c;

    // console.log(data);
    var theme = useTheme()
    console.log(navigation);
    var set_notes = navigation.getState().routes[1].params.b;
    var setData = navigation.getState().routes[1].params.d;
    var analyzeData = navigation.getState().routes[1].params.e;
    var savestate = (data) => {

        // console.log(data);
        if (data.length <= 1) { }
        else {
            set_notes((prevnotes) => {
                var arr1 = prevnotes.filter((e) => {
                    if (e.key == key) {
                        return e.notes = data;
                    } else return true
                })
                setData(arr1)
                return arr1
            })
        }

    }

    // var copytoclip = () => {
    //     Clipboard.setString(data); console.log('copied');
    // }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} >
            <View>
                <Headcomp2 navigation={navigation} analyzeData={analyzeData} />
                <View style={styles.View1}>
                    <ScrollView >
                        <TextInput onChangeText={savestate} numberOfLines={2} multiline={true} style={{ ...styles.text1, color: theme.colors.text }} > {data}</TextInput>
                    </ScrollView>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}

var styles = StyleSheet.create({
    text1: {
        fontSize: 16,
        padding: 20,
        height: 'auto',
    }, View1: {
        height: 'auto',
    }
})