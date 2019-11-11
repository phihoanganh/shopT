import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import * as actions from '../src/actions/data_action/cartListAction'
import types from '../src/action_type/data_type/cartListActionType'

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);
jest.mock('react-navigation', () => ({ withNavigation: component => component }));

describe('Cart Test', () => {
  describe('actions', () => {
    let productList = [{ id: '001', stock: 10, num: 10 }, { id: '002', stock: 5, num: 4 }, { id: '003', stock: 5, num: 1 }]
    let expectedList = [{ id: '001', stock: 10, num: 10 }, { id: '002', stock: 5, num: 4 }, { id: '003', stock: 5, num: 1 }]
    const store = mockStore({});
    it('add Cart Item Success', () => {
      store.dispatch(actions.doAddCartItem(productList[1], productList));
      expectedList[1].num++
      expect(store.getActions()).toContainEqual({
        type: types.GET_CART_LIST_SUCCESS,
        data: expectedList
      });
    })
    it('add Cart Item Fail', () => {
      store.dispatch(actions.doAddCartItem(productList[1], productList));
      expect(store.getActions()).toContainEqual({
        type: types.GET_CART_LIST_SUCCESS,
        data: expectedList
      });
    })
    it('minus Cart Item >=2', () => {
      store.dispatch(actions.doMinusCartItem(productList[1], productList));
      expectedList[1].num--
      expect(store.getActions()).toContainEqual({
        type: types.GET_CART_LIST_SUCCESS,
        data: expectedList
      });
    })
    it('minus Cart Item = 0', () => {
      store.dispatch(actions.doMinusCartItem(productList[2], productList));
      expectedList.splice(2, 1)
      expect(store.getActions()).toContainEqual({
        type: types.GET_CART_LIST_SUCCESS,
        data: expectedList
      });
    })
    it('remove Cart Item', () => {
      store.dispatch(actions.doRemoveCartItem(productList[0], productList));
      expectedList.splice(0, 1)
      expect(store.getActions()).toContainEqual({
        type: types.GET_CART_LIST_SUCCESS,
        data: expectedList
      });
    })
    it('clear Cart Item', () => {
      store.dispatch(actions.clearCartItem());
      expect(store.getActions()).toContainEqual({
        type: types.BUY_CONFIRM
      });
    })
  })
})