import Moment from 'moment';
import React, { Component } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import CustomModal from '../../../components/CustomModal';
import { formatFilename, requestPermission, savePhoto } from '../../../utils/helpers';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      writeExternalPermission: false,
      showModal: false
    };
  }

  takePicture = async () => {
    const { writeExternalPermission } = this.state;
    if (this.camera && writeExternalPermission) {
      const { currentTag } = this.props;
      const options = { quality: 0.5, doNotSave: true, base64: true };
      const data = await this.camera.takePictureAsync(options);
      const filename = formatFilename(Moment().format('DD-MM-YY'));
      savePhoto(data.base64, currentTag, filename);
    }
    // TODO: Add case when writeExternalPermission = false
  };

  onCameraReady = () => {
    const permission = requestPermission();
    this.setState({ writeExternalPermission: permission });
  };

  render() {
    const { showModal } = this.state;
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(camera) => {
            this.camera = camera;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
          onCameraReady={this.onCameraReady}
          pendingAuthorizationView={(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Without permissions</Text>
            </View>
)}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
        <CustomModal
          close={() => {
            this.setState({ showModal: false });
          }}
          visible={showModal}
        />
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
