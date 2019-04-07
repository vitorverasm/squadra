import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStack from './auth';
import HomeStack from './home';
import * as routes from './routes';

export default createAppContainer(
  createSwitchNavigator(
    {
      [routes.HOME]: HomeStack,
      [routes.AUTH]: AuthStack
    },
    {
      initialRouteName: routes.AUTH
    }
  )
);
