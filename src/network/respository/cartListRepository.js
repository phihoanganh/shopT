import Utils from '../../global/utils'
import Const from '../../global/const'

export default Object.freeze({
    getCartList: function () {
        return new Promise(function (resolve, reject) {
            Utils.getValueByKey(Const.STORE_ID_CART_LIST).then(data => {
                if (data) {
                    resolve(JSON.parse(data))
                } else {
                    resolve([])
                }
            })
        });
    }
});
