import CheckOutRepository from '../../network/respository/checkOutRepository';
import { CheckOutActionType } from '../../action_type'
import Const from '../../global/const'
import Utils from '../../global/utils'

export function getCheckOutInfoSuccess(data) {
    return {
        type: CheckOutActionType.GET_CHECK_OUT_INFO_SUCCESS,
        data
    }
}

export function getCheckOutInfoFail() {
    return { type: CheckOutActionType.GET_CHECK_OUT_INFO_FAIL }
}

export function doGetCheckOutInfo() {
    return dispatch => {
        return CheckOutRepository.getCheckOutInfo().then(data => {
            dispatch(getCheckOutInfoSuccess(data))
        })
    };
}
export function doSetCheckOutInfo(data) {
    return dispatch => {
        dispatch(getCheckOutInfoSuccess(data))
        Utils.setValueByKey(Const.STORE_ID_CHECK_OUT, JSON.stringify(data))
    };
}