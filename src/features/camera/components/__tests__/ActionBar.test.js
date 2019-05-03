import { shallow } from 'enzyme';
import React from 'react';
import ActionBar from '../ActionBar';

describe('ActionBar', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ActionBar takePhoto={jest.fn} toggleFlash={jest.fn} goToAlbums={jest.fn} flashOn />
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
