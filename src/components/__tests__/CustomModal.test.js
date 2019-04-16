import { shallow } from 'enzyme';
import React from 'react';
import { View } from 'react-native';
import CustomModal from '../CustomModal';

describe('CustomModal', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CustomModal />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders with props', () => {
    const wrapper = shallow(
      <CustomModal visible close={jest.fn} content={<View />} height="50%" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
