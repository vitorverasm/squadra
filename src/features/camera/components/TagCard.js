import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { human, sanFranciscoWeights } from 'react-native-typography';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../../utils/styles';

const TagCard = ({ tagName, checked, onPress }) => (
  <View style={[styles.container, { backgroundColor: checked ? colors.primary : colors.white }]}>
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <Icon
        name={checked ? 'check' : 'tag'}
        size={14}
        color={checked ? colors.white : colors.primary}
        style={{ backgroundColor: 'transparent' }}
      />
      <Text style={[styles.tagLabel, { color: checked ? colors.white : colors.primary }]}>
        {tagName}
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 35,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tagLabel: {
    ...human.footnote,
    ...sanFranciscoWeights.light,
    marginLeft: 2
  }
});

export default TagCard;
