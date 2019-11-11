import React from 'react';
import { shallow } from 'enzyme';
import Checkout from '../src/views/checkout';
import Enzyme from 'enzyme';
import thunk from 'redux-thunk'
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import * as actions from '../src/actions/data_action/checkOutAction'
import types from '../src/action_type/data_type/checkOutActionType'

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk]; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);
jest.mock('react-navigation', () => ({ withNavigation: component => component }));

const initialState = {

};

describe('CheckOut Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Checkout />, { context: { store: mockStore(initialState) } },
      )
      expect(component).toMatchSnapshot()
    })
  })
  describe('actions', () => {
    let data = {
      ship_adss: { name: 'AAA', address: '222 AAA', phone: '093837822', note: '' },
      pay_method: { isVisa: false }
    }
    const store = mockStore({});
    it('doGetCheckOutInfo Success', () => {
      store.dispatch(actions.doSetCheckOutInfo(data));
      expect(store.getActions()).toContainEqual({
        type: types.GET_CHECK_OUT_INFO_SUCCESS,
        data
      });
    })
    it('doGetCheckOutInfo Success', async () => {
      await store.dispatch(actions.doGetCheckOutInfo());
      expect(store.getActions()).toContainEqual({
        type: types.GET_CHECK_OUT_INFO_SUCCESS,
        data
      });
    })
  })
})