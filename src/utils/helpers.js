import {
  Alert, CameraRoll, PermissionsAndroid, Platform
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const savePhoto = (base64String, currentTagName, filename) => {
  const { dirs } = RNFetchBlob.fs;
  const basePath = Platform.OS === 'android' ? dirs.PictureDir : dirs.DocumentDir;
  const savePath = `${basePath}/${currentTagName}/${filename}`;
  console.log('aqui2');
  RNFetchBlob.fs
    .writeFile(savePath, base64String, 'base64')
    .then(() => {
      console.log('aqui3');
      if (Platform.OS === 'android') {
        RNFetchBlob.fs.scanFile([{ path: savePath, mime: 'image/png' }]);
        console.log('aqui4');
      } else {
        CameraRoll.saveToCameraRoll(savePath);
      }
    })
    .catch((error) => {
      Alert.alert('Fail to save image', error.message);
    });
};

const formatFilename = time => `${time}.png`;

const requestPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  } else {
    return true;
  }
};

export { requestPermission, savePhoto, formatFilename };
