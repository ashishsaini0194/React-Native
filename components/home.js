// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, ImageBackground, Text, ActivityIndicator, View } from 'react-native';
import Makenotebut from './makenotebutton';
import ShowComponent from './showcomponents';
import asyncstore from '@react-native-async-storage/async-storage'
import { useAuth0 } from 'react-native-auth0';
import { createItem, deleteItem, fetchItems, updateItem } from './fetchApis';
import uuid from 'react-native-uuid';
import { useTheme } from '@react-navigation/native';




export default function Home(props) {
    var theme = useTheme().colors
    const { user } = useAuth0();
    var [notes, set_notes] = React.useState({})
    var [fetchedNotes, setFetchedNotes] = React.useState([])
    const [spinner, setSpinner] = useState(true);

    // asyncstore.clear()
    // console.log(user)

    var getData = async () => {
        if (user) {
            const allNotes = await fetchItems(user.email)
            if (allNotes) setFetchedNotes(allNotes)
            console.log({ allNotes })
        } else {
            const allNotes = await asyncstore.getItem('data');
            if (allNotes) set_notes(JSON.parse(allNotes))
            console.log({ allNotes })
        }
        setSpinner(false);

    }

    useEffect(() => { getData() }, [])

    var setData = async (e) => {
        setSpinner(true);
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
        await getData();
    }


    var updateNote = async (key, textData) => {
        setSpinner(true);
        if (!textData) {
            Alert.alert("Oops", "notes can't be empty", [{ text: 'I understand.' }])
            return;
        }

        if (user) {
            await updateItem(key, textData)
        } else {
            const allNotes = { ...notes }
            allNotes[key] = { textData, key };
            await asyncstore.setItem('data', JSON.stringify(allNotes))
        }
        await getData();

    }


    var deletenotes = async (key) => {
        setSpinner(true);
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
            {spinner ?
                <>
                    <View style={{ ...styles.container, backgroundColor: theme.background }}>
                        <ActivityIndicator color={theme.text} size={24} />
                    </View>
                </> :
                <>
                    <Makenotebut updatenotes={setData} />
                    <ShowComponent notes={user ? fetchedNotes : Object.values(notes)} deletenotes={deletenotes} navigation={props.navigation} updateNote={updateNote} set_notes={set_notes} />
                </>
            }
        </TouchableWithoutFeedback >


    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        resizeMode: "cover",
    },
});
