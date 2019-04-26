import React from 'react';
import {
  Image, StyleSheet, Text, View
} from 'react-native';
import { human, sanFranciscoWeights } from 'react-native-typography';
import { colors } from '../utils/styles';
import warningImage from '../assets/warning.png';

const NotAuthMessage = () => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Image style={styles.img} source={warningImage} />
      <View style={styles.messageContainer}>
        <Text style={styles.label}>
          Oops!
          {'\n'}
        </Text>
        <Text style={styles.message}>
          Você precisa conceder as permissões necessárias para que o Squadra funcione direitinho.
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    flex: 0,
    height: 50
  },
  content: {
    flex: 1,
    marginTop: 50
  },
  img: {
    flex: 0,
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderRadius: 8,
    backgroundColor: 'transparent'
  },
  messageContainer: {
    flex: 3,
    marginHorizontal: 10,
    marginTop: 20
  },
  label: {
    textAlign: 'center',
    ...human.largeTitle,
    ...sanFranciscoWeights.bold,
    color: colors.primary
  },
  message: {
    textAlign: 'center',
    ...human.body,
    ...sanFranciscoWeights.medium,
    color: colors.primary
  },
  buttonContainer: {
    flex: 1
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary
  },
  buttonText: {
    textAlign: 'center',
    ...human.body,
    ...sanFranciscoWeights.bold
  }
});

export default NotAuthMessage;
