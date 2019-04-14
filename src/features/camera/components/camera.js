import React, { Component } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { RNCamera } from 'react-native-camera';

class Camera extends Component {
  componentDidMount() {
    const { currentTag } = this.props;
    console.log('currentTag: ', currentTag);
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, doNotSave: true, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log('URI: ', data.uri);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(camera) => {
            this.camera = camera;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle="Permission to use camera"
          permissionDialogMessage="We need your permission to use your phone camera"
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

export default Camera;
