import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { colors } from '../../../utils/styles';

const ActionBar = ({ takePhoto }) => (
  <View
    style={{
      flex: 0,
      position: 'absolute',
      bottom: 0,
      height: 100,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: 'transparent'
    }}
  >
    <View style={{ flex: 1 }} />
    <TouchableHighlight
      onPress={takePhoto}
      style={styles.captureButton}
      underlayColor={colors.crimsonRed}
      activeOpacity={0}
    >
      <View style={{ flex: 1, borderRadius: 70, backgroundColor: colors.primary }} />
    </TouchableHighlight>
    <View style={{ flex: 1 }} />
  </View>
);

const styles = StyleSheet.create({
  captureButton: {
    flex: 0,
    backgroundColor: 'transparent',
    borderColor: colors.white,
    borderWidth: 2,
    height: 70,
    width: 70,
    borderRadius: 70,
    alignSelf: 'center'
  }
});

export default ActionBar;
