import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import getRootReducer from './src/reducers'


export default function getStore(navReducer, middleware) {
    const store = createStore(
        getRootReducer(navReducer),
        undefined,
        applyMiddleware(...[middleware, thunk])
    );
    return store;
}
// const store = createStore(reducer, applyMiddleware(thunk));
// export default store;
