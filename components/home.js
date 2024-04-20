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
    var [notes, set_notes] = React.useState({ key: 'sfsf', textData: 'sfs' })

    asyncstore.clear()

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
        let dataToSave = {};
        dataToSave[key] = {
            textData: e,
            key
        }


        // if (user) await createItem({ email: user.email, textdata: e.notes })
        await asyncstore.setItem('data', JSON.stringify(dataToSave))
        getData();
    }


    var updatenotes = (textdata) => {
        // // alert(textdata)
        // if (textdata.length > 0) {
        //     // set_notes((prevnotes) => {
        //     // const uniqueKey = Math.random().toString();

        //     var data = getData('end')
        //     data.then((e) => {
        //         if (e == null) {
        //             setData([{ notes: textdata }])
        //             set_notes([{ notes: textdata }])
        //         } else {
        //             // console.log('BF data is :', e);
        //             e[e.length] = { notes: textdata, key: uniqueKey };
        //             // console.log('AF data is :', e);
        //             // e.push({ notes: textdata, key: uniqueKey })
        //             setData(e)
        //             set_notes(e)
        //         }
        //     })

        //     // if (prevnotes != null) {
        //     //     console.log('prevnotes 1 :', prevnotes);
        //     //     return [
        //     //         { notes: textdata, key: uniqueKey },
        //     //         ...prevnotes
        //     //     ]
        //     // } else {
        //     //     console.log('prevnotes 2 :', prevnotes);
        //     //     return [{ notes: textdata, key: uniqueKey }]
        //     // }

        //     // })
        // } else {
        //     Alert.alert("Oops", "notes can't be empty", [{ text: 'I understand.' }])
        // }
    }

    var analyzeData = () => {
        // var data = getData('end');
        // data.then((data1) => {
        //     var realdata = data1.filter((e) => {

        //         if (e.notes == " " || e.notes == "  " || e.notes == "   ") {
        //             return false
        //         } else {
        //             return true
        //         }
        //     })
        //     // console.log('real data is : ', realdata);
        //     set_notes(realdata)
        //     setData(realdata)
        // })
    }
    var deletenotes = (key) => {
        // // console.log('key we recieved: ', key);
        // set_notes((prevnotes) => {
        //     return prevnotes.filter((e) => {
        //         return e.key !== key
        //     })

        // })
        // deleteData(key)
    }




    return (

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <>

                {/* <Headcomp /> */}
                <Makenotebut updatenotes={setData} />

                <ShowComponent notes={notes ? Object.values(notes) : []} deletenotes={deletenotes} navigation={props.navigation} setData={setData} set_notes={set_notes} analyzeData={analyzeData} />
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
