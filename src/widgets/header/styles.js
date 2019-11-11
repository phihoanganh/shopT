import { StyleSheet } from 'react-native';
import Color from '../../global/colors'

module.exports = StyleSheet.create({
    title_box: {
        height: 48,
        backgroundColor: Color.dark_blue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal_title_box: {
        height: 48,
        backgroundColor: Color.light_dark,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    text_cart: {
        fontSize: 14,
        color: 'white',
        fontFamily: "Comfortaa-Bold"
    },
    text_cart_box: {
        backgroundColor: Color.purple,
        height: 20,
        width: 20,
        position: 'absolute',
        top: 3,
        right: 3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title_text: {
        fontSize: 14,
        color: 'white',
        fontFamily: "Comfortaa-Bold"
    },
    back_btn: {
        height: 48,
        width: 48,
        position: 'absolute',
        left: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 24,
        width: 24
    },
    cart_btn: {
        height: 48,
        width: 48,
        position: 'absolute',
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1
    },
    modal_box: {
        flex: 1,
        margin: 16,
        backgroundColor: Color.white,
        marginBottom: 32,
        marginTop: 32,
        borderRadius: 8
    },
    flat_list_mess: {
        fontSize: 14,
        marginTop: 14,
        color: Color.black,
        fontFamily: "Comfortaa-Bold",
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        borderBottomColor: Color.platinum,
        borderBottomWidth: 1,
        marginRight: 8,
        marginLeft: 8,
        marginBottom: 6,
        paddingBottom: 12
    },
    submit: {
        marginTop: 10,
        height: 40,
        width: '100%',
        backgroundColor: Color.dark_blue,
        borderRadius: 5,
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_text: {
        color: Color.white,
        fontSize: 14,
        fontFamily: "Comfortaa-Regular"
    },
    image: {
        marginTop: 10,
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: Color.bleu_de_france
    },
    ft_text: {
        marginTop: 10,
        color: Color.black,
        fontSize: 18,
        fontFamily: "Comfortaa-Bold"
    },
    footer: {
        marginRight: 24,
        marginLeft: 24,
        marginBottom: 6,
        paddingBottom: 12
    },
    item_info_box: {
        flex: 1,
        padding: 8
    },
    item_qua_box: {
        width: 40,
        padding: 5
    },
    name: {
        color: Color.black,
        fontSize: 18,
        fontFamily: "Comfortaa-Bold"
    },
    item_price: {
        marginTop: 4,
        fontSize: 14,
        fontFamily: "Comfortaa-Regular",
        color: Color.dark_yellow
    },
    total_item_price: {
        marginTop: 4,
        marginBottom: 4,
        fontSize: 16,
        fontFamily: "Comfortaa-Bold",
        color: Color.orange
    },
    item_btn: {
        height: 40,
        width: 40
    },
    item_icon: {
        height: 30,
        width: 30
    },
    num_box: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.ash_gray,
        marginBottom: 8
    }
});
