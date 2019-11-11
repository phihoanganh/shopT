import React, {
    StyleSheet
} from 'react-native';
import Color from '../../global/colors';

module.exports = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    logo_box: {
        width: '100%',
        alignItems: 'center'
    },
    logo: {
        width: 178,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer_image: {
        width: '100%',
        alignSelf: 'stretch',
        marginBottom: 10,
        opacity:0.4
    },
    footer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        paddingRight: 32,
    },
    form: {
        marginTop: 50,
        paddingLeft: 32,
        paddingRight: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        marginTop: 30,
        height: 40,
        width: '100%',
        backgroundColor: Color.dark_blue,
        borderRadius: 5,
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_text: {
        color: 'white',
        fontSize: 14,
        fontFamily: "Comfortaa-Regular",
        // fontWeight: 'bold'
    },
    forgot_pass: {
        fontSize: 12,
        color: Color.dim_gray,
        marginTop: 25,
        fontFamily: "Comfortaa-Regular",
        marginBottom: 20,
        backgroundColor: 'transparent'
    }
});