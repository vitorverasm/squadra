import React from 'react';
import {
  Modal, StyleSheet, View, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../utils/styles';

const CustomModal = ({
  visible, close, content, height
}) => (
  <Modal visible={visible} transparent animationType="slide" onRequestClose={close}>
    <View style={styles.outside}>
      <View style={[styles.modal, { height: height || '50%' }]}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={close}>
            <Icon
              name="x"
              size={25}
              color={colors.primary}
              style={{ backgroundColor: 'transparent' }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.childrenContainer}>{content || null}</View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  childrenContainer: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 59,
    marginBottom: 43
  },
  iconContainer: {
    position: 'absolute',
    top: 26,
    left: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    height: '50%',
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  outside: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.modalOpacity
  }
});

export default CustomModal;
