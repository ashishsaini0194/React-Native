import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { globalstyle } from '../assets/styles/gloabalstyles';

export default function ShowComponent({ a, deletenotes, navigation }) {
    console.log('this is ', a);
    var [iter, set_iter] = React.useState(0)
    // var list1 = [];
    // for (var as = 0; as < a.length; as++) {
    //     list1.push(<View style={style.eachtext}><Text style={style.texttype1, style.texttype2} key={a[as].key} >{a[as].notes}</Text></View>)
    // }

    navigatetoOther = (e) => {
        navigation.navigate('Details', { a: e })
    }

    return (
        <View style={style.alldata}>
            {/*<View style={style.pp}>{list1}</View>*/}
            <View style={{}}>
                <FlatList
                    style={style.flat}
                    ListEmptyComponent={() => { return <View></View> }}
                    data={a}
                    renderItem={({ item }) => (
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
                            <View style={style.eachtext}>
                                <Text style={style.texttype1} key={item.key} onPress={() => { navigatetoOther(item.notes) }} >  {item.notes}</Text>
                                <AntDesign style={style.icon1} onPress={() => { deletenotes(item.key) }} name="delete" size={24} color="black" />
                            </View>
                            {/* <TouchableOpacity onPress={() => { deletenotes(item.key) }} style={style.deleteButt}><Text style={{ fontSize: 14, color: 'black', }}>Del</Text></TouchableOpacity> */}

                        </View>

                    )}
                />

            </View>
        </View>

    )
}
const style = StyleSheet.create({
    alldata: {
        width: '100%',
        backgroundColor: 'white',
        marginTop: 20,
        // maxHeight: 550,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        // justifyContent: 'center',

        // alignItems: 'center'
    }, flat: {
        // maxHeight: 400,
        width: '100%',
        // flex:1,
        // backgroundColor: 'red',
    }, eachtext: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // minHeight: 40,
        width: '95%',
        // padding: 25,
        marginLeft: '2.5%',
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1.5,
        borderStyle: 'dotted',
        borderRadius: 5,
    }, texttype1: {
        fontSize: 16,
        padding: 10,
        width: '88%',
        fontFamily: globalstyle.font.fontFamily
        // textAlign: 'right',
        // flexWrap:'wrap',

    }, deleteButt: {
        position: 'absolute',
        right: 8,
        backgroundColor: '#ff9900',
        width: 60,
        height: 35,
        marginTop: 25,
        marginLeft: 5,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }, icon1: {
        position: 'absolute',
        right: 8,
        width: 28
        // height: 10,
    }
})