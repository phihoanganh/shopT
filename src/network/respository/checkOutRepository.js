import Utils from '../../global/utils'
import Const from '../../global/const'

export default Object.freeze({
    getCheckOutInfo: function () {
        return new Promise(function (resolve, reject) {
            Utils.getValueByKey(Const.STORE_ID_CHECK_OUT).then(data => {
                if (data) {
                    resolve(JSON.parse(data))
                } else {
                    resolve({ ship_adss: {}, pay_method: {} })
                }
            })
        });
    }
});
