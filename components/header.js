import React from 'react';
import { View, Text, StyleSheet, Modal, Image } from 'react-native';
import { useTheme } from '@react-navigation/native'
import { globalstyle } from '../assets/styles/gloabalstyles';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Headcomp({ navigation, chngglobthem }) {
    // console.log(navigation);
    var [modalOne, setModal] = React.useState(false)
    var [imgtheme, setimgtheme] = React.useState({ img: require('../assets/Images/sun.png'), key: 'sun' })
    var PageSlider = () => {
        navigation.openDrawer()
    }
    var darkorlight = useTheme()
    // console.log(darkorlight);
    var switchIt = () => {
        //switch the theme
        setModal(true)
        if (darkorlight.colors.background == 'black') {
            setimgtheme({ img: require('../assets/Images/sun.png'), key: 'sun' })
            chngglobthem('light')
        } else {
            setimgtheme({ img: require('../assets/Images/moon101.png'), key: 'moon' })
            chngglobthem('dark')
        }
        // console.log(imgtheme);
        setTimeout(() => setModal(false), 1500)
    }

    return (
        <View style={{ ...style.headcomp, backgroundColor: darkorlight.colors.headercolor }} >
            <Feather onPress={PageSlider} style={{ ...style.Menuicon, color: darkorlight.colors.text }} name="menu" size={24} color="black" />
            <Text style={{ ...style.textcomp, color: darkorlight.colors.text }}>Notes Maker</Text>
            <MaterialCommunityIcons style={{ ...style.themeDn, color: darkorlight.colors.text }} onPress={switchIt} name="theme-light-dark" size={24} color="black" />
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