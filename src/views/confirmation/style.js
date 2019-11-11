import {
    StyleSheet
} from 'react-native';
import Color from '../../global/colors';

module.exports = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        backgroundColor: Color.white
    },
    header: {
        padding: 16
    },
    item_info_box: {
        flex: 1,
        padding: 2,
        paddingLeft: 8
    },
    item_price: {
        fontSize: 14,
        fontFamily: "Comfortaa-Regular",
        color: Color.dark_yellow
    },
    total_item_price: {
        fontSize: 16,
        fontFamily: "Comfortaa-Bold",
        color: Color.orange
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
        marginRight: 16,
        marginLeft: 16,
        marginBottom: 2,
        paddingBottom: 2
    },
    submit: {
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
        marginTop: 2,
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: Color.bleu_de_france
    },
    name: {
        color: Color.black,
        fontSize: 16,
        fontFamily: "Comfortaa-Regular"
    },
    d_text: {
        color: Color.gray,
        fontSize: 16,
        fontFamily: "Comfortaa-Regular"
    },
    s_text: {
        color: Color.black,
        fontSize: 14,
        fontFamily: "Comfortaa-Regular"
    },
    t_text: {
        color: Color.black,
        fontSize: 16,
        fontFamily: "Comfortaa-Bold"
    },
    r_text: {
        position: 'absolute',
        right: 0,
        color: Color.black,
        fontSize: 14,
        fontFamily: "Comfortaa-Bold"
    },
    footer_box: {
        padding: 16,
        backgroundColor: Color.light_dark
    },
    underline: {
        height: 0.5,
        backgroundColor: Color.light_gray,
        width: '100%',
        marginBottom: 10,
        marginTop: 10
    },
    a_box: {
        backgroundColor: Color.light_gray,
        padding: 4,
        marginTop: 4
    },
    p_box: {
        flexDirection: 'row',
        backgroundColor: Color.light_gray,
        padding: 4,
        marginTop: 4
    },
    p_select_box: {
        flexDirection: 'row',
        marginTop: 10
    },
    p_image: {
        width: 56,
        height: 25,
        marginTop: 4
    },
    p_text_box: {
        marginLeft: 4
    },
    c_btn: {
        width: 70,
        height: 40,
        justifyContent: 'center'
    },
    c_btn_text: {
        color: Color.dark_blue,
        fontSize: 16,
        fontFamily: "Comfortaa-Regular"
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
    title_text: {
        fontSize: 14,
        color: 'white',
        fontFamily: "Comfortaa-Bold"
    },
    cart_btn: {
        height: 48,
        width: 48,
        position: 'absolute',
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 24,
        width: 24
    },
    modal_title_box: {
        height: 48,
        backgroundColor: Color.light_dark,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    md_info_box: {
        padding: 16
    }
});