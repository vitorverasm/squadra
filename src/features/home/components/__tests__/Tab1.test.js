import { shallow } from 'enzyme';
import React from 'react';
import Tab1 from '../Tab1';

describe('Tab1.js', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Tab1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
