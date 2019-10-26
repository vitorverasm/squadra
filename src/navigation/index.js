import { createAppContainer, createStackNavigator } from 'react-navigation';
import CameraContainer from '../features/camera/Camera.container';
import * as routes from './routes';

export default createAppContainer(
  createStackNavigator(
    {
      [routes.CAMERA]: CameraContainer
    },
    {
      initialRouteName: routes.CAMERA,
      headerMode: 'none'
    }
  )
);
