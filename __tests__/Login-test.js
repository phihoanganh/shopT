import React from 'react';
import { shallow } from 'enzyme';
import Login from '../src/views/login';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares)

const initialState = {

};

describe('Login Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Login />, { context: { store: mockStore(initialState) } },
      )
      expect(component).toMatchSnapshot()
    })
  })
})