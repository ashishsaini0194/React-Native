// import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, ImageBackground, Text } from 'react-native';
import Makenotebut from './makenotebutton';
import ShowComponent from './showcomponents';
import asyncstore from '@react-native-async-storage/async-storage'
import { useAuth0 } from 'react-native-auth0';
import { createItem } from './fetchApis';
import uuid from 'react-native-uuid';




export default function Home(props) {
    const { user } = useAuth0();
    var [notes, set_notes] = React.useState({})

    // asyncstore.clear()

    var getData = async () => {
        const allNotes = await asyncstore.getItem('data');
        if (allNotes) set_notes(JSON.parse(allNotes))
        console.log(allNotes)

    }
    useEffect(() => { getData() }, [])
    var setData = async (e) => {
        if (!e) {
            Alert.alert("Oops", "notes can't be empty", [{ text: 'I understand.' }])
        }

        const key = `key_${uuid.v4()}`;
        let dataToSave = { ...notes };
        dataToSave[key] = {
            textData: e,
            key
        }


        // if (user) await createItem({ email: user.email, textdata: e.notes })
        await asyncstore.setItem('data', JSON.stringify(dataToSave))
        getData();
    }


    var updateNote = async (key, textData) => {
        if (!textData) {
            Alert.alert("Oops", "notes can't be empty", [{ text: 'I understand.' }])
            return;
        }

        // console.log('updating 2', key, textData)
        const allNotes = { ...notes }
        allNotes[key] = { textData, key };
        await asyncstore.setItem('data', JSON.stringify(allNotes))
        getData();

    }


    var deletenotes = async (key) => {
        // console.log('key we recieved: ', key);
        const newData = { ...notes };
        delete newData[key];
        await asyncstore.setItem('data', JSON.stringify(newData))
        getData();
    }




    return (

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <>

                {/* <Headcomp /> */}
                <Makenotebut updatenotes={setData} />

                <ShowComponent notes={notes ? Object.values(notes) : []} deletenotes={deletenotes} navigation={props.navigation} updateNote={updateNote} set_notes={set_notes} />
                {/* <StatusBar style='auto' /> */}

            </>
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
