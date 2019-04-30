import React from 'react';
import {
  StyleSheet, Text, TouchableHighlight, TouchableOpacity, View
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { human, sanFranciscoWeights } from 'react-native-typography';
import { colors } from '../../../utils/styles';
import TagSelector from './TagSelector';

const ActionBar = ({
  takePhoto,
  toggleFlash,
  goToAlbums,
  flashOn,
  tags,
  currentTag,
  toggleTag
}) => (
  <View style={styles.container}>
    <View style={{ flex: 1, backgroundColor: 'trasparent', marginBottom: 5 }}>
      <TagSelector tags={tags} currentTag={currentTag} toggleTag={toggleTag} />
    </View>
    <View style={styles.actionBar}>
      <TouchableOpacity style={styles.box} onPress={toggleFlash}>
        <Icon
          name={flashOn ? 'zap' : 'zap-off'}
          size={30}
          color={flashOn ? colors.primary : colors.white}
          style={{ backgroundColor: 'transparent' }}
        />
        <Text
          style={{
            ...human.subheadWhite,
            ...sanFranciscoWeights.medium,
            marginLeft: 5,
            color: flashOn ? colors.primary : colors.white
          }}
        >
          {flashOn ? 'ON' : 'OFF'}
        </Text>
      </TouchableOpacity>
      <TouchableHighlight
        onPress={takePhoto}
        style={styles.captureButton}
        underlayColor={colors.crimsonRed}
        activeOpacity={0}
      >
        <View style={styles.captureButtonInnerStyle} />
      </TouchableHighlight>
      <TouchableOpacity style={styles.box} onPress={goToAlbums}>
        <Icon
          name="image"
          size={30}
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
    height: 150,
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBar: {
    flex: 0,
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: colors.modalOpacity
  },
  captureButton: {
    flex: 0,
    backgroundColor: 'transparent',
    borderColor: colors.white,
    borderWidth: 3,
    height: 70,
    width: 70,
    borderRadius: 70,
    alignSelf: 'center'
  },
  captureButtonInnerStyle: {
    flex: 1,
    borderRadius: 70,
    backgroundColor: colors.modalOpacity
  }
});

export default ActionBar;
