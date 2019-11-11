import LoginActionType from '../../action_type/view_type/loginActionType'

const loginReducer = (state = LoginActionType.DEFAULT_STATE, action) => {
    switch (action.type) {
        case LoginActionType.LOGIN_SUCCESS:
            return {
                ...state,
                error: false
            };
        case LoginActionType.LOGIN_FAIL:
            return {
                ...state,
                error: true
            };
        case LoginActionType.GET_USER_INFO_SUCCESS:
            return {
                ...state,
                user_info: action.data
            };
        default:
            return state;
    }
};

export default loginReducer;