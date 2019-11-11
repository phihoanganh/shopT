import { StyleSheet } from 'react-native';
import Color from '../../global/colors'

module.exports = StyleSheet.create({
    modal_box: {
        backgroundColor: 'rgba(35, 35, 35, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    popup_box: {
        backgroundColor: 'white',
        borderRadius: 8,
        position: 'absolute',
        right: 24,
        left: 24,
        alignItems: 'center'
    },
    title_box: {
        height: 60,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Color.dark_blue,
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    btn_text: {
        color: 'white',
        fontSize: 14,
        fontFamily: "Comfortaa-Regular"
    },
    btn_galary_text: {
        color: Color.dim_gray,
        fontSize: 14,
        fontFamily: "Comfortaa-Regular"
    },
    title_text: {
        color: Color.dim_gray,
        fontSize: 14,
        fontFamily: "Comfortaa-Bold",
        marginTop: 24
    },
    message_text: {
        color: Color.dim_gray,
        fontSize: 12,
        marginTop: 5,
        fontFamily: "Comfortaa-Regular"
    },
    submit: {
        marginTop: 32,
        height: 40,
        width: '100%',
        // flex: 1,
        backgroundColor: Color.dark_blue,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
        alignSelf: 'center'
    },
    box_btn: {
        paddingLeft: 24,
        paddingRight: 24,
        alignItems: 'center',
        width: '100%'
    },
    get_picture: {
        marginTop: 22,
        height: 40,
        marginBottom: 32,
        width: '100%',
        backgroundColor: Color.platinum,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    icon_cancel: {
        height: 48,
        width: 48,
        position: 'absolute',
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 40,
        width: 40
    }
});
