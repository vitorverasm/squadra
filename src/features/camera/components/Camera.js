import Moment from 'moment';
import React, { Component } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import CustomModal from '../../../components/CustomModal';
import { formatFilename, requestPermission, savePhoto } from '../../../utils/helpers';
import NotAuthMessage from '../../../components/NotAuthMessage';
import { colors } from '../../../utils/styles';

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
    // Go to pending view
  };

  onCameraReady = () => {
    const permission = requestPermission('storage');
    this.setState({ writeExternalPermission: permission, cameraReady: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  renderModal = (content, height) => {
    const { showModal } = this.state;
    return (
      <CustomModal close={this.closeModal} visible={showModal} content={content} height={height} />
    );
  };

  render() {
    const { cameraReady } = this.state;
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
          onStatusChange={({ cameraStatus }) => {
            console.log({ onStatusChange: cameraStatus });
            if (cameraStatus === 'NOT_AUTHORIZED') {
              requestPermission('camera');
            }
          }}
          onCameraReady={this.onCameraReady}
          notAuthorizedView={<NotAuthMessage />}
        />
        {cameraReady ? (
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: colors.black
            }}
          >
            <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
              <Text style={{ fontSize: 14, color: colors.white }}> SNAP </Text>
            </TouchableOpacity>
          </View>
        ) : null}
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
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

export default Camera;
