import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import Headcomp from './header';
import Makenotes from './makenotes';
import ShowComponent from './showcomponents';




export default function Home(props) {

    var [notes, set_notes] = React.useState([{ 'notes': 'a', 'key': '0' }, { 'notes': 'ab', 'key': '1' }, { 'notes': 'c', 'key': '2' }])

    // console.log('props are:', props.navigation);



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




    return (

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <ImageBackground blurRadius={9} style={styles.container} source={require('../assets/Images/e.jpg')} >

                {/* <Headcomp /> */}
                <Makenotes updatenotes={updatenotes} />

                <ShowComponent a={notes} deletenotes={deletenotes} navigation={props.navigation} />
                {/* <StatusBar style='auto' /> */}

            </ImageBackground>
        </TouchableWithoutFeedback >

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        // justifyContent: 'center',
        position: 'relative',
        resizeMode: "cover",
    },
});
