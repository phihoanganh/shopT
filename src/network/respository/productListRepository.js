// import ServerPath from '../net/ServerPath'
// import NetworkUtils from '../net/NetworkUtils'
import Data from '../../global/data'
import Utils from '../../global/utils'
import Const from '../../global/const'

export default Object.freeze({
    getProductList: function () {
        return new Promise(function (resolve, reject) {
            Utils.getValueByKey(Const.STORE_ID_PRODUCT_LIST).then(data => {
                if (data) {
                    resolve(JSON.parse(data))
                } else {
                    resolve(Data.product)
                    Utils.setValueByKey(Const.STORE_ID_PRODUCT_LIST, JSON.stringify(Data.product))
                }
            })
        });
    }
});
