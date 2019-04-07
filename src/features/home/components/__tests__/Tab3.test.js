import { shallow } from 'enzyme';
import React from 'react';
import Tab3 from '../Tab3';

describe('Tab3.js', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Tab3 />);
    expect(wrapper).toMatchSnapshot();
  });
});
