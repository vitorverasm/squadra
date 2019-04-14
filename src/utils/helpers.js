import { PermissionsAndroid, Platform } from 'react-native';

const savePhoto = (base64String, currentTagName) => {
  console.log('base64String: ', base64String);
  console.log('currentTagName: ', currentTagName);
};

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

export { requestPermission, savePhoto };
