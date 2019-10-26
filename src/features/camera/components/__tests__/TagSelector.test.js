import { shallow } from 'enzyme';
import React from 'react';
import TagSelector from '../TagSelector';

describe('TagSelector', () => {
  const store = {
    tags: [
      { id: '0', tagName: 'Neural Networks' },
      { id: '1', tagName: 'Statistics' },
      { id: '2', tagName: 'Linear Algebra' },
      { id: '3', tagName: 'Artificial Inteligence' }
    ],
    currentTag: { id: null, tagName: null }
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <TagSelector tags={store.tags} currentTag={store.currentTag} toggleTag={jest.fn} />
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
  it('FlatList functions', () => {
    const wrapper = shallow(
      <TagSelector tags={store.tags} currentTag={store.currentTag} toggleTag={jest.fn} />
    );
    const flatList = wrapper.find('FlatList');
    expect(flatList.props().renderItem({ item: store.tags[0] })).not.toBeNull();
    expect(flatList.props().keyExtractor({ item: store.tags[0] })).not.toBeNull();
  });
});
