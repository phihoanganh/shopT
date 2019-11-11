import AsyncStorage from '@react-native-community/async-storage';

export default Object.freeze({
    getValueByKey: function (key) {
        return new Promise(function (resolve, reject) {
            AsyncStorage.getItem(key).then((value) => {
                resolve(value);
            }).done();
        });
    },
    setValueByKey: function (key, value) {
        AsyncStorage.setItem(key, value);
    }
})