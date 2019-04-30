import React from 'react';
import { FlatList } from 'react-native';
import TagCard from './TagCard';

const TagSelector = ({ tags, currentTag, toggleTag }) => (
  <FlatList
    style={{ flex: 1, backgroundColor: 'transparent' }}
    contentContainerStyle={{ flexGrow: 0, alignItems: 'center', paddingHorizontal: 10 }}
    horizontal
    showsHorizontalScrollIndicator={false}
    data={tags}
    renderItem={({ item }) => (
      <TagCard
        tagName={item.tagName}
        onPress={() => {
          console.log('currentTag fora: ', currentTag);
          toggleTag(item, currentTag);
        }}
        checked={currentTag.id === item.id}
      />
    )}
    keyExtractor={item => item.id}
  />
);

export default TagSelector;
