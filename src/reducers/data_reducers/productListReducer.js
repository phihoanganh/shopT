import ProductListActionType from '../../action_type/data_type/productListActionType'

const productListReducer = (state = ProductListActionType.DEFAULT_STATE, action) => {
    switch (action.type) {
        case ProductListActionType.GET_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                product_list: action.data,
            };
        default:
            return state;
    }
};

export default productListReducer;