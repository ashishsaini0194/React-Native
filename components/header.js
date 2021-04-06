import React from 'react';
import { View, Text, StyleSheet, Modal, Image } from 'react-native';
import { globalstyle } from '../assets/styles/gloabalstyles';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { chngthm } from '../routes/routerNav'

export default function Headcomp({ navigation }) {
    // console.log(navigation);
    var [modalOne, setModal] = React.useState(false)
    var [imgtheme, setimgtheme] = React.useState({ img: require('../assets/Images/sun.png'), key: 'sun' })
    var PageSlider = () => {
        navigation.openDrawer()
    }
    var switchIt = () => {
        //switch the theme
        if (imgtheme.key == 'moon') {
            setimgtheme({ img: require('../assets/Images/sun.png'), key: 'sun' })

        } else {
            setimgtheme({ img: require('../assets/Images/moon.jpg'), key: 'moon' })

        }
        console.log(imgtheme);
        setModal(true)
        setTimeout(() => setModal(false), 1000)
        chngthm()
    }

    return (
        <View style={style.headcomp} >
            <Feather onPress={PageSlider} style={style.Menuicon} name="menu" size={24} color="black" />
            <Text style={style.textcomp}>Notesss Maker</Text>
            <MaterialCommunityIcons style={style.themeDn} onPress={switchIt} name="theme-light-dark" size={24} color="black" />
            <Modal visible={modalOne} animationType={'fade'} transparent={true}  >

                <View style={style.modal}>
                    <Image style={style.switchImg} source={imgtheme.img} />
                </View>

            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    headcomp: {
        width: '100%',
        height: '100%',
        backgroundColor: globalstyle.color2.backgroundColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }, textcomp: {
        fontSize: 20,
        // marginTop: 15,
        fontFamily: globalstyle.font.fontFamily,
        marginLeft: 0,
    }, Menuicon: {
        position: 'absolute',
        left: 5,
    }, themeDn: {
        position: 'absolute',
        right: 5,
    }, modal: {
        flex: 1,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }, switchImg: {
        height: 240,
        width: 250,
        borderRadius: 1000,
    }
})