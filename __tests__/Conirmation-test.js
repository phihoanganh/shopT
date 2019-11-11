import React from 'react';
import { shallow } from 'enzyme';
import Confirmation from '../src/views/confirmation';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);
jest.mock('react-navigation', () => ({ withNavigation: component => component}));

const initialState = {

};

describe('ProductList Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Confirmation/>, { context: { store: mockStore(initialState) } },
      )
      expect(component).toMatchSnapshot()
    })
  })
})