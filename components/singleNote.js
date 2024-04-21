import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native'
import Headcomp2 from '../components/header2'
import { debouncingFunc } from './debouncingFunc';

export default function Anote({ navigation }) {
    var data = navigation.getState().routes[1].params.data;
    const [updatedTextData, setupdatedTextData] = useState(data);
    var key = navigation.getState().routes[1].params.key;

    // console.log(data);
    var theme = useTheme()
    // console.log(navigation);
    // var set_notes = navigation.getState().routes[1].params.b;
    var updateNote = navigation.getState().routes[1].params.updateNote;
    // var analyzeData = navigation.getState().routes[1].params.e;
    var saveUpdatedData = () => {
        if (updatedTextData !== data) {
            console.log('updating 1')
            updateNote(key, updatedTextData)
        }
    }

    // var copytoclip = () => {
    //     Clipboard.setString(data); console.log('copied');
    // }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} >
            <View style={{ flex: 1 }}>
                <Headcomp2 navigation={navigation} saveUpdatedData={saveUpdatedData} />
                <View style={styles.View1}>
                    <ScrollView >
                        <TextInput onChangeText={(text) => debouncingFunc(() => setupdatedTextData(text), 700)}
                            numberOfLines={2}
                            multiline={true}
                            style={{ ...styles.text1, color: theme.colors.text }}
                        >
                            {data}
                        </TextInput>
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
    }, View1: {
        // height: 400,
        flex: 1
    }
})