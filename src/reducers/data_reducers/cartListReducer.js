import CartListActionType from '../../action_type/data_type/cartListActionType'

const cartListReducer = (state = CartListActionType.DEFAULT_STATE, action) => {
    switch (action.type) {
        case CartListActionType.GET_CART_LIST_SUCCESS:
            let count = 0
            let summary = 0
            action.data.forEach(element => {
                count += element.num
                summary += (element.num * element.price)
            });
            return {
                ...state,
                cart_list: action.data,
                count,
                summary
            };
        case CartListActionType.BUY_CONFIRM:
            return {
                ...state,
                confirm_list: state.cart_list,
                cart_list: [],
                confirm_count: state.count,
                confirm_summary: state.summary,
                count: 0,
                summary: 0
            };
        default:
            return state;
    }
};

export default cartListReducer;