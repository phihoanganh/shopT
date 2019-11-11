import React, {
    StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
    }
});