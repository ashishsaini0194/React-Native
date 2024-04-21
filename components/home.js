// import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, ImageBackground, Text } from 'react-native';
import Makenotebut from './makenotebutton';
import ShowComponent from './showcomponents';
import asyncstore from '@react-native-async-storage/async-storage'
import { useAuth0 } from 'react-native-auth0';
import { createItem, deleteItem, fetchItems, updateItem } from './fetchApis';
import uuid from 'react-native-uuid';




export default function Home(props) {
    const { user } = useAuth0();
    var [notes, set_notes] = React.useState({})
    var [fetchedNotes, setFetchedNotes] = React.useState([])

    // asyncstore.clear()
    // console.log(user)

    var getData = async () => {
        if (user) {
            const allNotes = await fetchItems(user.email)
            if (allNotes) setFetchedNotes(allNotes)
            // console.log(fetchedNotes)
        } else {
            const allNotes = await asyncstore.getItem('data');
            if (allNotes) set_notes(JSON.parse(allNotes))
            // console.log(allNotes)
        }

    }
    useEffect(() => { getData() }, [])
    var setData = async (e) => {
        if (!e) {
            Alert.alert("Oops", "notes can't be empty", [{ text: 'I understand.' }])
        }

        if (user) await createItem({ email: user.email, textData: e })
        else {
            const key = `key_${uuid.v4()}`;
            let dataToSave = { ...notes };
            dataToSave[key] = {
                textData: e,
                key
            }
            await asyncstore.setItem('data', JSON.stringify(dataToSave))
        }
        getData();
    }


    var updateNote = async (key, textData) => {
        if (!textData) {
            Alert.alert("Oops", "notes can't be empty", [{ text: 'I understand.' }])
            return;
        }

        if (user) {
            updateItem(key, textData)
        } else {
            const allNotes = { ...notes }
            allNotes[key] = { textData, key };
            await asyncstore.setItem('data', JSON.stringify(allNotes))
        }
        getData();

    }


    var deletenotes = async (key) => {
        // console.log('key we recieved: ', key);
        if (user) {
            await deleteItem(key)
        } else {
            const newData = { ...notes };
            delete newData[key];
            await asyncstore.setItem('data', JSON.stringify(newData))

        }
        getData();
    }




    return (

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <>

                {/* <Headcomp /> */}
                <Makenotebut updatenotes={setData} />

                <ShowComponent notes={user ? fetchedNotes : Object.values(notes)} deletenotes={deletenotes} navigation={props.navigation} updateNote={updateNote} set_notes={set_notes} />
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
