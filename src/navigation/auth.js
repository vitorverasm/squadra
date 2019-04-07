import { createStackNavigator } from 'react-navigation';
import * as routes from './routes';
import Login from '../features/auth/components/Login';

export default createStackNavigator({ [routes.LOGIN]: Login }, { initialRouteKey: routes.LOGIN });
