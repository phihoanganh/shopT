import {
    StyleSheet
} from 'react-native';
import Color from '../../global/colors';

module.exports = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        backgroundColor: Color.light_dark
    },
    logo: {
        width: 178,
        height: 60,
        alignItems: 'center',
        alignSelf: 'center'
    },
    footer_image: {
        width: '100%',
        alignSelf: 'stretch',
        marginBottom: 10
    },
    footer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        paddingRight: 32,
    },
    image: {
        width: '100%',
        backgroundColor: Color.white,
        height: 200
    },
    itemPrice: {
        fontWeight: '600',
        fontSize: 26,
        color: Color.orange
    },
    info_box: {
        padding: 8
    },
    des: {
        marginTop: 5,
        color: 'white',
        fontSize: 14,
        fontFamily: "Comfortaa-Regular"
    },
    submit: {
        marginTop: 10,
        height: 40,
        width: '100%',
        backgroundColor: Color.orange,
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
    }
});