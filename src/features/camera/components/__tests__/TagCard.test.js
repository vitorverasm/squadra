import { shallow } from 'enzyme';
import React from 'react';
import TagCard from '../TagCard';

describe('TagCard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TagCard tagName="teste" checked onPress={jest.fn} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
