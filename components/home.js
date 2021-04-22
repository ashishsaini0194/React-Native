import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import Makenotebut from './makenotebutton';
import ShowComponent from './showcomponents';
import asyncstore from '@react-native-async-storage/async-storage'




export default function Home(props) {

    var [notes, set_notes] = React.useState()
    var clear = async () => {
        await asyncstore.removeItem('data')
        console.log('cleared');
        // var endres = getData('end')
        // endres.then((e) => {
        //     console.log('end result is : ', e);
        // })
    }
    // clear()
    var getData = async (a) => {
        var data = await asyncstore.getItem('data')
        if (a == 'start') {
            if (JSON.parse(data) != null) {
                // console.log('data is not null');
                set_notes(JSON.parse(data))
            }
        } else {
            return JSON.parse(data)
        }


        return JSON.parse(data)
    }
    if (notes == null) {
        getData('start');
    }

    var setData = async (e) => {
        clear()
        await asyncstore.setItem('data', JSON.stringify(e))
        return;
    }


    var updatenotes = (textdata) => {
        // alert(textdata)
        if (textdata.length > 0) {
            // set_notes((prevnotes) => {
            const uniqueKey = Math.random().toString();

            var data = getData('end')
            data.then((e) => {
                if (e == null) {
                    setData([{ notes: textdata, key: uniqueKey }])
                    set_notes([{ notes: textdata, key: uniqueKey }])
                } else {
                    // console.log('BF data is :', e);
                    e[e.length] = { notes: textdata, key: uniqueKey };
                    // console.log('AF data is :', e);
                    // e.push({ notes: textdata, key: uniqueKey })
                    setData(e)
                    set_notes(e)
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
        var data = getData('end')
        if (data.length != 0) {
            data.then((e) => {
                // for (var i = 0; i < e.length; i++){
                //     if(key == e[i]){

                //     }
                // }
                var datatodel = e.filter((e) => {
                    return e.key != key
                })
                console.log(datatodel);
                clear()
                setData(datatodel)
                set_notes(datatodel)
            })
        }

    }

    var analyzeData = () => {
        var data = getData('end');
        data.then((data1) => {
            var realdata = data1.filter((e) => {

                if (e.notes == " " || e.notes == "  " || e.notes == "   ") {
                    return false
                } else {
                    return true
                }
            })
            console.log('real data is : ', realdata);
            set_notes(realdata)
            setData(realdata)
        })
    }
    var deletenotes = (key) => {
        console.log('key we recieved: ', key);
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
            <ImageBackground blurRadius={9} style={styles.container} source={require('../assets/Images/e.jpg')} >

                {/* <Headcomp /> */}
                <Makenotebut updatenotes={updatenotes} />

                <ShowComponent a={notes} deletenotes={deletenotes} navigation={props.navigation} setData={setData} set_notes={set_notes} analyzeData={analyzeData} />
                <StatusBar style='auto' />

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
