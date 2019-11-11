import React from 'react';
import { shallow } from 'enzyme';
import Splash from '../src/views/splash';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialState = {

};

describe('Splash Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Splash/>, { context: { store: mockStore(initialState) } },
      )
      expect(component).toMatchSnapshot()
    })
  })
})