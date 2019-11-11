import ProductListRepository from '../../network/respository/productListRepository';
import { ProductListActionType } from '../../action_type'
import Const from '../../global/const'
import Utils from '../../global/utils'

export function getProductListSuccess(data) {
    return {
        type: ProductListActionType.GET_PRODUCT_LIST_SUCCESS,
        data
    }
}

export function getProductListFail() {
    return { type: ProductListActionType.GET_PRODUCT_LIST_FAIL }
}

export function doGetProductList() {
    return dispatch => {
        return ProductListRepository.getProductList().then(data => {
            dispatch(getProductListSuccess(data))
        })
    };
}

export function doBuyProduct(buyList, productList) {
    return dispatch => {
        buyList.forEach(buyElement => {
            let itemIndex = productList.findIndex((element) => {
                return buyElement.id === element.id
            })
            if (itemIndex != -1) {
                productList[itemIndex].stock -= buyElement.num
            }
        })
        dispatch(getProductListSuccess(productList))
        Utils.setValueByKey(Const.STORE_ID_PRODUCT_LIST, JSON.stringify(productList))
    }
}