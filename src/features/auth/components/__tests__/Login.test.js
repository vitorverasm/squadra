import { shallow } from 'enzyme';
import React from 'react';
import Login from '../Login';

describe('Login.js', () => {
  const props = {
    navigation: {
      navigate: jest.fn
    }
  };
  it('renders correctly', () => {
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('onPress[function]', () => {
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper.instance().onPress()).not.toBeNull();
  });
});
