import { shallow } from 'enzyme';
import React from 'react';
import 'react-native';
import configureStore from 'redux-mock-store';
import App from '../App';

const mockStore = configureStore();
const initialState = {};
const store = mockStore(initialState);

describe('[App]', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
