import CartListRepository from '../../network/respository/cartListRepository';
import { CartListActionType } from '../../action_type'
import Const from '../../global/const'
import Utils from '../../global/utils'

export function getCartListSuccess(data) {
    return {
        type: CartListActionType.GET_CART_LIST_SUCCESS,
        data
    }
}

export function getCartListFail() {
    return { type: CartListActionType.GET_CART_LIST_FAIL }
}

export function buyConfirm() {
    return { type: CartListActionType.BUY_CONFIRM }
}

export function doGetCartList() {
    return dispatch => {
        CartListRepository.getCartList().then(data => {
            dispatch(getCartListSuccess(data))
        })
    };
}

export function doAddCartItem(item, cartList) {
    return dispatch => {
        let itemIndex = cartList.findIndex((element) => {
            return element.id === item.id
        })
        if (itemIndex != -1) {
            if (cartList[itemIndex].num >= cartList[itemIndex].stock) {
                cartList[itemIndex].num = cartList[itemIndex].stock
            } else {
                cartList[itemIndex].num++
            }
        } else {
            let temp = item
            temp.num = 1
            cartList.push(temp)
        }
        dispatch(getCartListSuccess(cartList))
        Utils.setValueByKey(Const.STORE_ID_CART_LIST, JSON.stringify(cartList))
    }
}

export function doMinusCartItem(item, cartList) {
    return dispatch => {
        let itemIndex = cartList.findIndex((element) => {
            return element.id === item.id
        })
        if (cartList[itemIndex].num <= 1) {
            cartList.splice(itemIndex, 1)
        } else {
            cartList[itemIndex].num--
        }

        dispatch(getCartListSuccess(cartList))
        Utils.setValueByKey(Const.STORE_ID_CART_LIST, JSON.stringify(cartList))
    }
}
export function doRemoveCartItem(index, cartList) {
    return dispatch => {
        cartList.splice(index, 1)
        dispatch(getCartListSuccess(cartList))
        Utils.setValueByKey(Const.STORE_ID_CART_LIST, JSON.stringify(cartList))
    }
}

export function clearCartItem() {
    return dispatch => {
        dispatch(buyConfirm())
        Utils.setValueByKey(Const.STORE_ID_CART_LIST, '')
    }
}