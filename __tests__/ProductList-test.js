import React from 'react';
import { shallow } from 'enzyme';
import ProductList from '../src/views/product_list';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import * as actions from '../src/actions/data_action/productListAction'
import types from '../src/action_type/data_type/productListActionType'
import Data from '../src/global/data'

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);
jest.mock('react-navigation', () => ({ withNavigation: component => component }));

const initialState = {

};

describe('ProductList Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<ProductList />, { context: { store: mockStore(initialState) } },
      )
      expect(component).toMatchSnapshot()
    })
  })
  describe('actions', () => {
    it('get Product List Success', async () => {
      const data = Data.product
      const expectedAction = {
        type: types.GET_PRODUCT_LIST_SUCCESS,
        data
      }

      const store = mockStore({});
      await store.dispatch(actions.doGetProductList());
      expect(store.getActions()).toContainEqual(expectedAction);
    })
    it('do Buy Product Success', () => {
      const buyList = [{ id: '001', num: 2 }]
      const productList = [{ id: '001', stock: 10 }, { id: '002', stock: 5 }]
      const expectList = [{ id: '001', stock: 8 }, { id: '002', stock: 5 }]
      const expectedAction = {
        type: types.GET_PRODUCT_LIST_SUCCESS,
        data: expectList
      }

      const store = mockStore({});
      store.dispatch(actions.doBuyProduct(buyList, productList));
      expect(store.getActions()).toContainEqual(expectedAction);
    })
  })
})