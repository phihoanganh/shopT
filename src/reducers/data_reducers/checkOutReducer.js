import CheckOutActionType from '../../action_type/data_type/checkOutActionType'

const checkOutReducer = (state = CheckOutActionType.DEFAULT_STATE, action) => {
    switch (action.type) {
        case CheckOutActionType.GET_CHECK_OUT_INFO_SUCCESS:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

export default checkOutReducer;