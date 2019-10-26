import { shallow } from 'enzyme';
import React from 'react';
import NotAuthMessage from '../NotAuthMessage';

describe('NotAuthMessage', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NotAuthMessage />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
