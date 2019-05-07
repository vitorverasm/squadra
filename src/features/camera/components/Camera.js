import Moment from 'moment';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CustomModal from '../../../components/CustomModal';
import { formatFilename, requestPermission, savePhoto } from '../../../utils/helpers';
import ActionBar from './ActionBar';
import NotAuthMessage from './NotAuthMessage';
import Header from './Header';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      writeExternalPermission: false,
      cameraFlash: RNCamera.Constants.FlashMode.off
    };
  }

  takePicture = async () => {
    const { writeExternalPermission } = this.state;
    if (this.camera && writeExternalPermission) {
      const { currentTag } = this.props;
      const options = { quality: 0.5, doNotSave: true, base64: true };
      const data = await this.camera.takePictureAsync(options);
      const filename = formatFilename(Moment().format('DD-MM-YY'));
      savePhoto(data.base64, currentTag.tagName, filename);
    }
  };

  onCameraReady = () => {
    const permission = requestPermission('storage');
    this.setState({ writeExternalPermission: permission, cameraReady: true });
  };

  renderModal = () => {
    const {
      showModal, modalContent, closeAddTagModal, modalHeight
    } = this.props;
    return (
      <CustomModal
        close={closeAddTagModal}
        visible={showModal}
        content={modalContent}
        height={modalHeight}
      />
    );
  };

  toggleFlash = () => {
    const { cameraFlash } = this.state;
    const flashMode = cameraFlash === RNCamera.Constants.FlashMode.off
      ? RNCamera.Constants.FlashMode.on
      : RNCamera.Constants.FlashMode.off;
    this.setState({ cameraFlash: flashMode });
  };

  goToAlbums = () => {
    console.log('Go to albums');
  };

  render() {
    const { cameraReady, cameraFlash } = this.state;
    const { tags, showAddTagModal } = this.props;
    return (
      <View style={styles.container}>
        <Header
          tags={tags}
          leftOnPress={() => {}}
          centerOnPress={showAddTagModal}
          rightOnPress={() => {}}
        />
        <RNCamera
          ref={(camera) => {
            this.camera = camera;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={cameraFlash}
          captureAudio={false}
          onStatusChange={({ cameraStatus }) => {
            if (cameraStatus === 'NOT_AUTHORIZED') {
              requestPermission('camera');
            }
          }}
          onCameraReady={this.onCameraReady}
          notAuthorizedView={<NotAuthMessage />}
        />
        {cameraReady ? (
          <ActionBar
            takePhoto={this.takePicture}
            toggleFlash={this.toggleFlash}
            flashOn={cameraFlash}
            goToAlbums={this.goToAlbums}
          />
        ) : null}
        {this.renderModal()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  preview: {
    flex: 1
  }
});

export default Camera;
