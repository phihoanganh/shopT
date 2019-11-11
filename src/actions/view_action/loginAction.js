import LoginRepository from '../../network/respository/loginRepository';
import { LoginActionType } from '../../action_type'
import Const from '../../global/const'
import Utils from '../../global/utils'

export function loginSuccess() {
    return {
        type: LoginActionType.LOGIN_SUCCESS
    };
}

export function loginFail() {
    return { type: LoginActionType.LOGIN_FAIL };
}
export function getUserInfoSuccess(data) {
    return {
        type: LoginActionType.GET_USER_INFO_SUCCESS,
        data
    };
}

export function doLogin(username, password) {
    return dispatch => {
        LoginRepository.doLogin({
            email: username,
            password: password,
        }, function (status, responseJson) {
            context.setLoading(false);
            console.log(responseJson)
            if (status == Const.SUCCESS) {
                if (responseJson.status == 200) {
                    Utils.setValueByKey(Const.ACCESS_TOKEN_STORE_ID, 'Bearer ' + responseJson.json.token);
                    Utils.setValueByKey(Const.LOGIN_INPUT_STORE_ID, JSON.stringify({ username, password }));
                    dispatch(getUserInfo(username, context));
                } else if (responseJson.status == 401) {
                    context.renderPopup(
                        Const.LOGIN_FAIL_TITLE,
                        Const.LOGIN_OTHER_PLACE_MESSAGE,
                        require('../../assets/images/icon_fail.png'),
                        null,
                        2,
                        null
                    );
                } else {
                    context.renderPopup(
                        Const.LOGIN_FAIL_TITLE,
                        Const.LOGIN_FAIL_MESSAGE,
                        require('../../assets/images/icon_fail.png'),
                        null,
                        2,
                        null
                    );
                }
            } else {
                context.renderPopup(
                    Const.NETOWRK_ERROR_TITLE,
                    Const.NETOWRK_ERROR_MESSAGE,
                    require('../../assets/images/icon_fail.png'),
                    null,
                    2,
                    null
                );
            }
        });
    };
}
export function getUserInfo(cmnd, context) {
    return dispatch => {
        context.setLoading(true);
        LoginRepository.getUserInfo({
            cmnd: cmnd
        }, function (status, responseJson) {
            context.setLoading(false);
            console.log(responseJson)
            if (status == Const.SUCCESS && responseJson.status == 200) {
                dispatch(getUserInfoSuccess(responseJson.json));
                Utils.setValueByKey(Const.USER_INFO, JSON.stringify(responseJson.json));
                context.resetPage(0, 'main', null);
                dispatch(updateFirebaseToken());
            } else {
                context.renderPopup(
                    Const.TOKEN_ERROR_TITLE,
                    Const.TOKEN_ERROR_MESSAGE,
                    require('../../assets/images/icon_fail.png'),
                    null,
                    2,
                    null
                );
            }
        });
    }
}
export function updateFirebaseToken() {
    return dispatch => {
        Utils.getValueByKey(Const.FIREBASE_TOKEN_ID).then((tokenFirebase) => {
            if (tokenFirebase !== '' && tokenFirebase !== undefined && tokenFirebase !== null) {
                LoginRepository.updateFirebaseToken({
                    tokenFirebase: tokenFirebase
                }, function (responseJson) {
                    console.log('updateFirebaseToken')
                    console.log(responseJson)
                });
            }
        });
    }
}