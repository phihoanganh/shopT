import {
    StyleSheet
} from 'react-native';
import Color from '../../global/colors';

module.exports = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    gridView: {
        flex: 1,
        backgroundColor: Color.ash_gray
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 250,
        backgroundColor: Color.white
    },
    itemName: {
        fontSize: 16,
        color: Color.black,
        fontWeight: '600'
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: Color.black
    },
    itemPrice: {
        fontWeight: '600',
        fontSize: 16,
        color: Color.orange
    },
    submit: {
        marginTop: 5,
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
    },
    mark: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Color.white,
        zIndex: 99999,
        backgroundColor: Color.yellow,
        position: 'absolute',
        top: 10,
        right: 0,
        padding: 5,
        fontWeight: '600',
        fontSize: 12,
    }
});