import { shallow } from 'enzyme';
import React from 'react';
import Tab2 from '../Tab2';

describe('Tab2.js', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Tab2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
