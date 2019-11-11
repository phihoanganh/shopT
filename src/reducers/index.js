import { combineReducers } from 'redux';
import loginReducer from './view_reducers/loginReducer'
import productListReducer from './data_reducers/productListReducer'
import cartListReducer from './data_reducers/cartListReducer'
import checkOutReducer from './data_reducers/checkOutReducer'

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        loginPage: loginReducer,
        productListData: productListReducer,
        cartListData: cartListReducer,
        checkOutData: checkOutReducer
    });
}
