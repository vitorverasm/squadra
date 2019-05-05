import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { human, sanFranciscoWeights } from 'react-native-typography';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../../utils/styles';

const Header = ({ tags }) => (
  <View style={styles.container}>
    <View style={styles.box}>
      <TouchableOpacity style={styles.touchable} onPress={() => {}}>
        <Icon
          name="sliders"
          size={16}
          color={colors.white}
          style={{ backgroundColor: 'transparent' }}
        />
      </TouchableOpacity>
    </View>
    <View style={[styles.box, { flex: 2 }]}>
      <TouchableOpacity
        style={[
          styles.touchable,
          { backgroundColor: colors.primary, margin: 10, borderRadius: 30 }
        ]}
        onPress={() => {}}
      >
        <Text style={styles.headerText}>{tags.length === 0 ? 'Add tag' : 'Edit tags'}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.box}>
      <TouchableOpacity style={styles.touchable} onPress={() => {}}>
        <Icon
          name="zoom-in"
          size={16}
          color={colors.white}
          style={{ backgroundColor: 'transparent' }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 50,
    width: '100%',
    backgroundColor: colors.black,
    flexDirection: 'row'
  },
  box: {
    flex: 1
  },
  headerText: {
    ...human.subheadWhite,
    ...sanFranciscoWeights.light,
    marginLeft: 10
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Header;
