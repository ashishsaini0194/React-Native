import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Headcomp from './header';
import Makenotes from './makenotes';
import ShowComponent from './showcomponents';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';




export default function Home(props) {

    var [notes, set_notes] = React.useState([{ 'notes': 'a', 'key': '0' }, { 'notes': 'ab', 'key': '1' }, { 'notes': 'c', 'key': '2' }])
    var [chckfonts, setchckfonts] = React.useState(false)
    // console.log('props are:', props.navigation);

    const getFonts = () => {
        // return 
        var a = Font.loadAsync({
            'font1': require('../assets/fonts/NewTegomin-Regular.ttf'),
        })
        // console.log(a);
        return a
    }

    var updatenotes = (textdata) => {
        // alert(textdata)
        if (textdata.length > 0) {
            set_notes((prevnotes) => {
                return [
                    { notes: textdata, key: Math.random().toString() },
                    ...prevnotes
                ]
            })
        } else {
            Alert.alert("Oops", "notes can't be empty", [{ text: 'I understand.' }])
        }
    }


    var deletenotes = (key) => {
        console.log('key we recieved: ', key);
        set_notes((prevnotes) => {
            return prevnotes.filter((e) => {
                return e.key !== key
            })

        })
    }



    if (chckfonts) {
        return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
            }}>
                <View style={styles.container}>
                    <Headcomp />
                    <Makenotes updatenotes={updatenotes} />

                    <ShowComponent a={notes} deletenotes={deletenotes} navigation={props.navigation} />
                    <StatusBar style="auto" />
                </View>
            </TouchableWithoutFeedback>
        );
    } else {
        return (
            <View>
                <AppLoading
                    startAsync={getFonts}
                    onFinish={() => setchckfonts(true)}
                    onError={() => setchckfonts(false)}
                />
                {/* <Text>{chckfonts}</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        // justifyContent: 'center',
        position: 'relative',
    },
});
