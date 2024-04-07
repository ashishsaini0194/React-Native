// import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, ImageBackground, Text } from 'react-native';
import Makenotebut from './makenotebutton';
import ShowComponent from './showcomponents';
import asyncstore from '@react-native-async-storage/async-storage'

import { useQuery } from '@realm/react';
import { Notes, User } from '../App';


import { BSON } from 'realm';
import { useRealm } from '@realm/react';




export default function Home(props) {


    const realm = useRealm();

    var [notes, set_notes] = React.useState(null)
    var clear = async () => {
        await asyncstore.removeItem('data')

    }

    const AllNotes = useQuery(Notes);
    console.log(AllNotes)
    // useEffect(() => {
    //     getData('start');
    // }, [])


    // // useEffect(() => {
    // //     const saveUserId = async () => {
    // //         await asyncstore.setItem('userLoggedIn', JSON.stringify(e))
    // //     }
    // // }, [])

    // var getData = async (a) => {

    //     const AllNotes = useQuery(Notes);

    //     console.log(AllNotes)
    //     // const allUserNotes = useQuery(Notes, (AllNotes) => {
    //     //     return AllNotes.filtered('userId == 66095de1336f27b3e51e00ae');
    //     // })
    //     // console.log(allUserNotes)

    //     // var data = await asyncstore.getItem('data')
    //     if (a == 'start') {
    //         if (AllNotes != null) {
    //             // console.log('data is not null');
    //             set_notes(AllNotes)
    //         }
    //     }
    //     // return AllNotes

    //     // console.log(JSON.parse(data));
    //     // return JSON.parse(data)
    // }





    var setData = async (e) => {
        clear()
        await asyncstore.setItem('data', JSON.stringify(e))
        const realmData = {
            _id: new BSON.ObjectId(),
            userId: new BSON.ObjectId(),
            textData: e[0].notes,
        }
        console.log({ realmData }, e)
        let ops;
        realm.write(() => {
            ops = realm.create("note", realmData)
            console.log('2');
        });

        // console.log({ ops })
        // return;
    }


    var updatenotes = async (textdata) => {
        // alert(textdata)
        if (textdata.length > 0) {
            // set_notes((prevnotes) => {
            const uniqueKey = Math.random().toString();

            var data = await getData('end')
            data.then(() => {
                if (!notes) {
                    setData([{ notes: textdata, key: uniqueKey }])
                    set_notes([{ notes: textdata, key: uniqueKey }])
                } else {
                    // console.log('BF data is :', e);
                    notes[notes.length] = { notes: textdata, key: uniqueKey };
                    // console.log('AF data is :', e);
                    // e.push({ notes: textdata, key: uniqueKey })
                    setData(notes)
                    set_notes(notes)
                }
            })

            // if (prevnotes != null) {
            //     console.log('prevnotes 1 :', prevnotes);
            //     return [
            //         { notes: textdata, key: uniqueKey },
            //         ...prevnotes
            //     ]
            // } else {
            //     console.log('prevnotes 2 :', prevnotes);
            //     return [{ notes: textdata, key: uniqueKey }]
            // }

            // })
        } else {
            Alert.alert("Oops", "notes can't be empty", [{ text: 'I understand.' }])
        }
    }

    var deleteData = async (key) => {
        await getData('end')
        if (notes.length != 0) {
            notes.then((e) => {
                // for (var i = 0; i < e.length; i++){
                //     if(key == e[i]){

                //     }
                // }
                var datatodel = e.filter((e) => {
                    return e.key != key
                })
                // console.log(datatodel);
                clear()
                setData(datatodel)
                set_notes(datatodel)
            })
        }

    }

    var analyzeData = async () => {
        await getData('end');
        // data.then(() => {

        // })
        var realdata = notes.filter((e) => {

            if (e.notes == " " || e.notes == "  " || e.notes == "   ") {
                return false
            } else {
                return true
            }
        })
        // console.log('real data is : ', realdata);
        set_notes(realdata)
        setData(realdata)
    }
    var deletenotes = (key) => {
        // console.log('key we recieved: ', key);
        set_notes((prevnotes) => {
            return prevnotes.filter((e) => {
                return e.key !== key
            })

        })
        deleteData(key)
    }




    return (

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <>

                {/* <Headcomp /> */}
                <Makenotebut updatenotes={updatenotes} />

                <ShowComponent a={AllNotes} deletenotes={deletenotes} navigation={props.navigation} setData={setData} set_notes={set_notes} analyzeData={analyzeData} />
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
